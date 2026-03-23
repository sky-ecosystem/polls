# Create Atlas Edit Weekly Cycle Proposal

## Description
Creates a new poll file in the `sky-ecosystem/polls` repository by fetching the body of a pull request from `sky-ecosystem/next-gen-atlas` and populating the Atlas Edit Weekly Cycle Proposal template.

## Usage
The user will invoke this skill with a PR number and an optional `cf` flag, e.g.:
> "Create a poll for PR #123"
> "Create a poll for PR #123 cf"

### Parameters
- **PR number** (required): The pull request number from `sky-ecosystem/next-gen-atlas`.
- **`cf`** (optional): If provided, `$poll_deployers` is set to `"Core Facilitators"`. If not provided, ask the user whether `$poll_deployers` should be `"Core Facilitators"` or left as a placeholder.

## Steps

### 1. Get today's date and calculate poll dates

- Run `date` in the terminal to get today's date in UTC
- **Start date**: If today is Monday, use today. Otherwise calculate the next Monday.
- **End date**: 3 days after the start date
- Start and end times are always `16:00:00` UTC
- Format needed:
  - `$date_MONTH_DD,_YYYY` → e.g. `March 23, 2026` (using the start date)
  - `$date_DAY,_MONTH_DD` → e.g. `Monday, March 23` (using the start date)
  - `$YYYY-MM-DDT16:00:00` → e.g. `2026-03-23T16:00:00` (start), `2026-03-26T16:00:00` (end)

### 2. Fetch the PR from next-gen-atlas

Run the following command, substituting the PR number:

```bash
gh pr view <pr_number> --repo sky-ecosystem/next-gen-atlas --json body,url,title
```

Extract:

- `body` → to be interpreted into summaries (see step 4)
- `url` → used for `$Pull_Request_link`
- `title` → for reference

### 3. Find the forum discussion post

Search the Discourse forum for a post that mentions this PR. Fetch the 10 latest topics using the global latest endpoint:

```bash
curl -s "https://forum.skyeco.com/latest.json?order=created&ascending=false&per_page=10"
```

This returns a JSON object with a `topic_list.topics` array. For each topic, extract the `id` and `slug`. Then for each topic, fetch its first post to check for the PR URL:

```bash
curl -s "https://forum.skyeco.com/t/<slug>/<id>.json"
```

In the response, check `post_stream.posts[0].cooked` (the HTML body of the first post) for the PR URL obtained in step 2. If a match is found, the `$discussion_link` is:

```
https://forum.skyeco.com/t/<slug>/<id>
```

If no matching topic is found among the 10 latest posts, leave `$discussion_link` as-is for the user to fill in manually.

#### Find the Aligned Delegate approval

Within the matched topic's `post_stream.posts`, find a post from a user with the "Aligned Delegate" flair (check `flair_name` or user title fields). Extract:

- **`$Delegate_Name`**: The user's `username`
- **`$link`**: The post URL in the format `https://forum.skyeco.com/t/<slug>/<id>/<post_number>`

If no Aligned Delegate post is found, leave `$Delegate_Name` and `$link` as-is for the user to fill in manually.

### 4. Read the template

The template is located at:

```txt
templates/Atlas/Atlas Edit Weekly Cycle Proposal - $date_MONTH_DD,_YYYY.md
```

### 5. Interpret the PR body

The PR body will contain a bullet list of individual Atlas edits. Use this to generate two summaries:

- **`$sentence_summary`**: A single sentence that enumerates each edit as a numbered inline list, inferred from the bullet points. For example: `This Atlas edit proposal 1) authorizes funding for Genesis Agents, 2) adds Allocator Vault parameters for Launch Agent 6 and Launch Agent 7, 3) authorizes investments in ACRDX on Ethereum mainnet, 4) adds Allocation System instances to the Grove Artifact, 5) updates multisig operators to Soter Labs.`

- **`$paragraph_summary`**: Reproduce the PR bullet list in the following format:

  ```markdown
  _This proposal includes the following edits:_

  - _**Edit Title** - Edit description._
  - _**Edit Title** - Edit description._
  ```

  The entire block should be italicized. Each bullet should have a bold italic title followed by an italic description, matching exactly the structure of the PR body bullets.

### 6. Populate the template

Replace the following placeholders with the values gathered above:

| Placeholder | Value |
|---|---|
| `$date_MONTH_DD,_YYYY` | Start date e.g. `March 23, 2026` |
| `$date_DAY,_MONTH_DD` | Start date day e.g. `Monday, March 23` |
| `$YYYY-MM-DD` | Start date e.g. `2026-03-23` |
| `$sentence_summary` | Single sentence summary of the proposal |
| `$paragraph_summary` | Prose paragraph summary of the PR body |
| `$poll_deployers` | `"Core Facilitators"` if `cf` flag provided, otherwise ask the user |
| `$Pull_Request_link` | PR URL |
| `$discussion_link` | Forum discussion URL (if found in step 3) |
| `$Delegate_Name` | Aligned Delegate username (if found in step 3) |
| `$link` | URL to the Aligned Delegate's approval post (if found in step 3) |
| `$YYYY-MM-DDT16:00:00` (first occurrence) | Start datetime e.g. `2026-03-23T16:00:00` |
| `$YYYY-MM-DDT16:00:00` (second occurrence) | End datetime e.g. `2026-03-26T16:00:00` |

Leave any other placeholders (e.g. `$Delegate_Name`/`$link`/`$discussion_link` if not found, or `$poll_deployers` if the user chose to leave it) as-is for the user to fill in manually.

### 7. Write the output file

Save the populated file to the year folder based on the **start date**, using the kebab-case naming convention:

```txt
<YYYY>/<YYYY-MM-DD>-Atlas-edit-weekly-cycle-proposal.md
```

Where `<YYYY>` is the year from the start date and `<YYYY-MM-DD>` is the start date. For example, if the start date is `2026-03-23`, the file path would be:

```txt
2026/2026-03-23-Atlas-edit-weekly-cycle-proposal.md
```

### 8. Confirm

Tell the user:

- The path of the newly created file
- The poll start and end datetimes
- Which placeholders still need to be filled in manually

// Poll parameters
export enum PollInputFormat {
  singleChoice = 'single-choice',
  rankFree = 'rank-free',
  chooseFree = 'choose-free',
}

export enum PollVictoryConditions {
  and = 'and',
  majority = 'majority',
  approval = 'approval',
  plurality = 'plurality',
  instantRunoff = 'instant-runoff',
  default = 'default',
  comparison = 'comparison',
}

export enum PollResultDisplay {
  singleVoteBreakdown = 'single-vote-breakdown',
  instantRunoffBreakdown = 'instant-runoff-breakdown',
  approvalBreakdown = 'approval-breakdown',
}

export const ERRORS_VALIDATE_POLL_PARAMETERS = {
  missingInputFormat: 'Missing input_format on poll parameters',
  invalidInputFormat:
    'Invalid input_format. Supported values are rank-free, choose-free and single-choice',
  missingVictoryConditions: 'Missing victory_conditions',
  victoryConditionsNotArray:
    'victory_conditions should be an array of victory conditions',
  invalidVictoryConditions: 'victory_conditions should be objects',
  victoryConditionsInstantRunOffAndPluralityCanNotBeCombined:
    'victory_conditions combination not valid. instant-runoff and plurality can not be combined together.',
  victoryConditionsInstantRunOffAndMajoritynNotBeCombined:
    'victory_conditions combination not valid. instant-runoff and majority can not be combined together.',
  victoryConditionANDRequiresConditions:
    'victory_condition AND requires inserting nested conditions',
  victoryConditionDefaultRequiresDefaultValue:
    'victory_condition default requires a value',
  victoryConditionMajorityRequiresAPercentValue:
    'victory_condition majority requires a percent',
  victoryConditionComparisonRequiresValidComparator:
    'victory_condition comparison requires a valid comparator (>, >=, =, <=, <).',
  victoryConditionComparisonRequiresValidValue:
    'victory_condition comparison requires a valid value',
  instantRunoffRequiresRankFree:
    'victory_condition instant-runoff requires input_format rank-free',
  pluralityRequiresSingleChoice:
    'victory_condition plurality requires input_format single-choice',
  approvalRequiresChooseFree:
    'victory_condition approval requires input_format choose-free',
  requiredResultDisplay:
    'result_display is required. Available values are "instant-runoff-breakdown" or "single-vote-breakdown"',
  singleChoiceRequiresSingleVoteBreakdownDisplay:
    'input_format single-choice requires single-vote-breakdown result_display',
  rankFreeRequiresInstantRunoffBreakdownDisplay:
    'input_format rank-free requires instant-runoff-breakdown result_display',
  approvalRequiresApprovalBreakdownDisplay:
    'victory_condition approval requires approval-breakdown result_display',
}

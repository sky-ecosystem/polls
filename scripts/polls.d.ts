import {
  PollInputFormat,
  PollResultDisplay,
  PollVictoryConditions,
} from './constants'

//  { type : comparison, options: [0, 1, 4], comparator : '>=10000' }
export type PollVictoryConditionComparison = {
  type: PollVictoryConditions.comparison
  options: number[]
  comparator: string
  value: number
}

// { type : default, value: 2 }
export type PollVictoryConditionDefault = {
  type: PollVictoryConditions.default
  value: number
}

// { type : majority, percent: 50 }
export type PollVictoryConditionMajority = {
  type: PollVictoryConditions.majority
  percent: number
}

// { type : 'approval' }
export type PollVictoryConditionApproval = {
  type: PollVictoryConditions.approval
}

// { type : 'instant-runoff' }
export type PollVictoryConditionInstantRunoff = {
  type: PollVictoryConditions.instantRunoff
}

// { type : 'plurality' }
export type PollVictoryConditionPlurality = {
  type: PollVictoryConditions.plurality
}

export type VictoryCondition =
  | PollVictoryConditionComparison
  | PollVictoryConditionDefault
  | PollVictoryConditionMajority
  | PollVictoryConditionApproval
  | PollVictoryConditionInstantRunoff
  | PollVictoryConditionPlurality

// { type : 'and', conditions: conditions[] }
export type PollVictoryConditionAND = {
  type: PollVictoryConditions.and
  conditions: VictoryCondition[]
}

export type PollParameters = {
  input_format: {
    type: PollInputFormat
    abstain: number[]
    options: number[]
  }
  victory_conditions: (PollVictoryConditionAND | VictoryCondition)[]
  result_display: PollResultDisplay
}

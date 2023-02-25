

export enum ReportType {
    warning,
    error,
    info,
    niceToHave
}

export type PlainLanguageProblem = {
    type: ReportType;
    title: string;
    occurence: number;
}
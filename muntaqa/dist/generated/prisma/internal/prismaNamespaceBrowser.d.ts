import * as runtime from "@prisma/client/runtime/index-browser";
export type * from '../models.js';
export type * from './prismaNamespace.js';
export declare const Decimal: typeof runtime.Decimal;
export declare const NullTypes: {
    DbNull: (new (secret: never) => typeof runtime.DbNull);
    JsonNull: (new (secret: never) => typeof runtime.JsonNull);
    AnyNull: (new (secret: never) => typeof runtime.AnyNull);
};
export declare const DbNull: import("@prisma/client-runtime-utils").DbNullClass;
export declare const JsonNull: import("@prisma/client-runtime-utils").JsonNullClass;
export declare const AnyNull: import("@prisma/client-runtime-utils").AnyNullClass;
export declare const ModelName: {
    readonly Committee: "Committee";
    readonly Interviewee: "Interviewee";
    readonly OscMember: "OscMember";
    readonly OscMemberPhone: "OscMemberPhone";
    readonly Recruitment: "Recruitment";
    readonly Interview: "Interview";
    readonly InterviewPanel: "InterviewPanel";
    readonly InterviewSchedule: "InterviewSchedule";
};
export type ModelName = (typeof ModelName)[keyof typeof ModelName];
export declare const TransactionIsolationLevel: {
    readonly ReadUncommitted: "ReadUncommitted";
    readonly ReadCommitted: "ReadCommitted";
    readonly RepeatableRead: "RepeatableRead";
    readonly Serializable: "Serializable";
};
export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel];
export declare const CommitteeScalarFieldEnum: {
    readonly id: "id";
    readonly name: "name";
};
export type CommitteeScalarFieldEnum = (typeof CommitteeScalarFieldEnum)[keyof typeof CommitteeScalarFieldEnum];
export declare const IntervieweeScalarFieldEnum: {
    readonly id: "id";
    readonly email: "email";
    readonly university: "university";
    readonly name: "name";
    readonly seatId: "seatId";
    readonly firstCommitteeId: "firstCommitteeId";
    readonly secondCommitteeId: "secondCommitteeId";
    readonly faculty: "faculty";
    readonly phone: "phone";
};
export type IntervieweeScalarFieldEnum = (typeof IntervieweeScalarFieldEnum)[keyof typeof IntervieweeScalarFieldEnum];
export declare const OscMemberScalarFieldEnum: {
    readonly id: "id";
    readonly email: "email";
    readonly name: "name";
    readonly committeeId: "committeeId";
    readonly seatId: "seatId";
    readonly newColumn: "newColumn";
    readonly phone: "phone";
    readonly role: "role";
};
export type OscMemberScalarFieldEnum = (typeof OscMemberScalarFieldEnum)[keyof typeof OscMemberScalarFieldEnum];
export declare const OscMemberPhoneScalarFieldEnum: {
    readonly oscMemId: "oscMemId";
    readonly phone: "phone";
};
export type OscMemberPhoneScalarFieldEnum = (typeof OscMemberPhoneScalarFieldEnum)[keyof typeof OscMemberPhoneScalarFieldEnum];
export declare const RecruitmentScalarFieldEnum: {
    readonly id: "id";
    readonly eventDay: "eventDay";
    readonly date: "date";
};
export type RecruitmentScalarFieldEnum = (typeof RecruitmentScalarFieldEnum)[keyof typeof RecruitmentScalarFieldEnum];
export declare const InterviewScalarFieldEnum: {
    readonly id: "id";
    readonly intervieweeId: "intervieweeId";
    readonly result: "result";
    readonly time: "time";
    readonly committeeId: "committeeId";
    readonly date: "date";
    readonly recruitmentId: "recruitmentId";
    readonly notes: "notes";
};
export type InterviewScalarFieldEnum = (typeof InterviewScalarFieldEnum)[keyof typeof InterviewScalarFieldEnum];
export declare const InterviewPanelScalarFieldEnum: {
    readonly oscMemberId: "oscMemberId";
    readonly interviewId: "interviewId";
};
export type InterviewPanelScalarFieldEnum = (typeof InterviewPanelScalarFieldEnum)[keyof typeof InterviewPanelScalarFieldEnum];
export declare const InterviewScheduleScalarFieldEnum: {
    readonly id: "id";
    readonly day: "day";
    readonly oscMemberId: "oscMemberId";
    readonly availableFrom: "availableFrom";
    readonly availableTo: "availableTo";
    readonly breakFrom: "breakFrom";
    readonly breakTo: "breakTo";
    readonly attendence: "attendence";
};
export type InterviewScheduleScalarFieldEnum = (typeof InterviewScheduleScalarFieldEnum)[keyof typeof InterviewScheduleScalarFieldEnum];
export declare const SortOrder: {
    readonly asc: "asc";
    readonly desc: "desc";
};
export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder];
export declare const QueryMode: {
    readonly default: "default";
    readonly insensitive: "insensitive";
};
export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode];
export declare const NullsOrder: {
    readonly first: "first";
    readonly last: "last";
};
export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder];

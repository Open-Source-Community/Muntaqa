import * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../models.js";
import { type PrismaClient } from "./class.js";
export type * from '../models.js';
export type DMMF = typeof runtime.DMMF;
export type PrismaPromise<T> = runtime.Types.Public.PrismaPromise<T>;
export declare const PrismaClientKnownRequestError: typeof runtime.PrismaClientKnownRequestError;
export type PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError;
export declare const PrismaClientUnknownRequestError: typeof runtime.PrismaClientUnknownRequestError;
export type PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError;
export declare const PrismaClientRustPanicError: typeof runtime.PrismaClientRustPanicError;
export type PrismaClientRustPanicError = runtime.PrismaClientRustPanicError;
export declare const PrismaClientInitializationError: typeof runtime.PrismaClientInitializationError;
export type PrismaClientInitializationError = runtime.PrismaClientInitializationError;
export declare const PrismaClientValidationError: typeof runtime.PrismaClientValidationError;
export type PrismaClientValidationError = runtime.PrismaClientValidationError;
export declare const sql: typeof runtime.sqltag;
export declare const empty: runtime.Sql;
export declare const join: typeof runtime.join;
export declare const raw: typeof runtime.raw;
export declare const Sql: typeof runtime.Sql;
export type Sql = runtime.Sql;
export declare const Decimal: typeof runtime.Decimal;
export type Decimal = runtime.Decimal;
export type DecimalJsLike = runtime.DecimalJsLike;
export type Extension = runtime.Types.Extensions.UserArgs;
export declare const getExtensionContext: typeof runtime.Extensions.getExtensionContext;
export type Args<T, F extends runtime.Operation> = runtime.Types.Public.Args<T, F>;
export type Payload<T, F extends runtime.Operation = never> = runtime.Types.Public.Payload<T, F>;
export type Result<T, A, F extends runtime.Operation> = runtime.Types.Public.Result<T, A, F>;
export type Exact<A, W> = runtime.Types.Public.Exact<A, W>;
export type PrismaVersion = {
    client: string;
    engine: string;
};
export declare const prismaVersion: PrismaVersion;
export type Bytes = runtime.Bytes;
export type JsonObject = runtime.JsonObject;
export type JsonArray = runtime.JsonArray;
export type JsonValue = runtime.JsonValue;
export type InputJsonObject = runtime.InputJsonObject;
export type InputJsonArray = runtime.InputJsonArray;
export type InputJsonValue = runtime.InputJsonValue;
export declare const NullTypes: {
    DbNull: (new (secret: never) => typeof runtime.DbNull);
    JsonNull: (new (secret: never) => typeof runtime.JsonNull);
    AnyNull: (new (secret: never) => typeof runtime.AnyNull);
};
export declare const DbNull: runtime.DbNullClass;
export declare const JsonNull: runtime.JsonNullClass;
export declare const AnyNull: runtime.AnyNullClass;
type SelectAndInclude = {
    select: any;
    include: any;
};
type SelectAndOmit = {
    select: any;
    omit: any;
};
type Prisma__Pick<T, K extends keyof T> = {
    [P in K]: T[P];
};
export type Enumerable<T> = T | Array<T>;
export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
};
export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
} & (T extends SelectAndInclude ? 'Please either choose `select` or `include`.' : T extends SelectAndOmit ? 'Please either choose `select` or `omit`.' : {});
export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
} & K;
type Without<T, U> = {
    [P in Exclude<keyof T, keyof U>]?: never;
};
export type XOR<T, U> = T extends object ? U extends object ? (Without<T, U> & U) | (Without<U, T> & T) : U : T;
type IsObject<T extends any> = T extends Array<any> ? False : T extends Date ? False : T extends Uint8Array ? False : T extends BigInt ? False : T extends object ? True : False;
export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T;
type __Either<O extends object, K extends Key> = Omit<O, K> & {
    [P in K]: Prisma__Pick<O, P & keyof O>;
}[K];
type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>;
type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>;
type _Either<O extends object, K extends Key, strict extends Boolean> = {
    1: EitherStrict<O, K>;
    0: EitherLoose<O, K>;
}[strict];
export type Either<O extends object, K extends Key, strict extends Boolean = 1> = O extends unknown ? _Either<O, K, strict> : never;
export type Union = any;
export type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K];
} & {};
export type IntersectOf<U extends Union> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;
export type Overwrite<O extends object, O1 extends object> = {
    [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
} & {};
type _Merge<U extends object> = IntersectOf<Overwrite<U, {
    [K in keyof U]-?: At<U, K>;
}>>;
type Key = string | number | symbol;
type AtStrict<O extends object, K extends Key> = O[K & keyof O];
type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
    1: AtStrict<O, K>;
    0: AtLoose<O, K>;
}[strict];
export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
} & {};
export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
} & {};
type _Record<K extends keyof any, T> = {
    [P in K]: T;
};
type NoExpand<T> = T extends unknown ? T : never;
export type AtLeast<O extends object, K extends string> = NoExpand<O extends unknown ? (K extends keyof O ? {
    [P in K]: O[P];
} & O : O) | {
    [P in keyof O as P extends K ? P : never]-?: O[P];
} & O : never>;
type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;
export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;
export type Boolean = True | False;
export type True = 1;
export type False = 0;
export type Not<B extends Boolean> = {
    0: 1;
    1: 0;
}[B];
export type Extends<A1 extends any, A2 extends any> = [A1] extends [never] ? 0 : A1 extends A2 ? 1 : 0;
export type Has<U extends Union, U1 extends Union> = Not<Extends<Exclude<U1, U>, U1>>;
export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
        0: 0;
        1: 1;
    };
    1: {
        0: 1;
        1: 1;
    };
}[B1][B2];
export type Keys<U extends Union> = U extends unknown ? keyof U : never;
export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O ? O[P] : never;
} : never;
type FieldPaths<T, U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>> = IsObject<T> extends True ? U : T;
export type GetHavingFields<T> = {
    [K in keyof T]: Or<Or<Extends<'OR', K>, Extends<'AND', K>>, Extends<'NOT', K>> extends True ? T[K] extends infer TK ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never> : never : {} extends FieldPaths<T[K]> ? never : K;
}[keyof T];
type _TupleToUnion<T> = T extends (infer E)[] ? E : never;
type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>;
export type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T;
export type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>;
export type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T;
export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>;
type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>;
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
export interface TypeMapCb<GlobalOmitOptions = {}> extends runtime.Types.Utils.Fn<{
    extArgs: runtime.Types.Extensions.InternalArgs;
}, runtime.Types.Utils.Record<string, any>> {
    returns: TypeMap<this['params']['extArgs'], GlobalOmitOptions>;
}
export type TypeMap<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
        omit: GlobalOmitOptions;
    };
    meta: {
        modelProps: "committee" | "interviewee" | "oscMember" | "oscMemberPhone" | "recruitment" | "interview" | "interviewPanel" | "interviewSchedule";
        txIsolationLevel: TransactionIsolationLevel;
    };
    model: {
        Committee: {
            payload: Prisma.$CommitteePayload<ExtArgs>;
            fields: Prisma.CommitteeFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.CommitteeFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$CommitteePayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.CommitteeFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$CommitteePayload>;
                };
                findFirst: {
                    args: Prisma.CommitteeFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$CommitteePayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.CommitteeFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$CommitteePayload>;
                };
                findMany: {
                    args: Prisma.CommitteeFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$CommitteePayload>[];
                };
                create: {
                    args: Prisma.CommitteeCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$CommitteePayload>;
                };
                createMany: {
                    args: Prisma.CommitteeCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.CommitteeCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$CommitteePayload>[];
                };
                delete: {
                    args: Prisma.CommitteeDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$CommitteePayload>;
                };
                update: {
                    args: Prisma.CommitteeUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$CommitteePayload>;
                };
                deleteMany: {
                    args: Prisma.CommitteeDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.CommitteeUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.CommitteeUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$CommitteePayload>[];
                };
                upsert: {
                    args: Prisma.CommitteeUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$CommitteePayload>;
                };
                aggregate: {
                    args: Prisma.CommitteeAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateCommittee>;
                };
                groupBy: {
                    args: Prisma.CommitteeGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.CommitteeGroupByOutputType>[];
                };
                count: {
                    args: Prisma.CommitteeCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.CommitteeCountAggregateOutputType> | number;
                };
            };
        };
        Interviewee: {
            payload: Prisma.$IntervieweePayload<ExtArgs>;
            fields: Prisma.IntervieweeFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.IntervieweeFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$IntervieweePayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.IntervieweeFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$IntervieweePayload>;
                };
                findFirst: {
                    args: Prisma.IntervieweeFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$IntervieweePayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.IntervieweeFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$IntervieweePayload>;
                };
                findMany: {
                    args: Prisma.IntervieweeFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$IntervieweePayload>[];
                };
                create: {
                    args: Prisma.IntervieweeCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$IntervieweePayload>;
                };
                createMany: {
                    args: Prisma.IntervieweeCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.IntervieweeCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$IntervieweePayload>[];
                };
                delete: {
                    args: Prisma.IntervieweeDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$IntervieweePayload>;
                };
                update: {
                    args: Prisma.IntervieweeUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$IntervieweePayload>;
                };
                deleteMany: {
                    args: Prisma.IntervieweeDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.IntervieweeUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.IntervieweeUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$IntervieweePayload>[];
                };
                upsert: {
                    args: Prisma.IntervieweeUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$IntervieweePayload>;
                };
                aggregate: {
                    args: Prisma.IntervieweeAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateInterviewee>;
                };
                groupBy: {
                    args: Prisma.IntervieweeGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.IntervieweeGroupByOutputType>[];
                };
                count: {
                    args: Prisma.IntervieweeCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.IntervieweeCountAggregateOutputType> | number;
                };
            };
        };
        OscMember: {
            payload: Prisma.$OscMemberPayload<ExtArgs>;
            fields: Prisma.OscMemberFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.OscMemberFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$OscMemberPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.OscMemberFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$OscMemberPayload>;
                };
                findFirst: {
                    args: Prisma.OscMemberFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$OscMemberPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.OscMemberFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$OscMemberPayload>;
                };
                findMany: {
                    args: Prisma.OscMemberFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$OscMemberPayload>[];
                };
                create: {
                    args: Prisma.OscMemberCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$OscMemberPayload>;
                };
                createMany: {
                    args: Prisma.OscMemberCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.OscMemberCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$OscMemberPayload>[];
                };
                delete: {
                    args: Prisma.OscMemberDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$OscMemberPayload>;
                };
                update: {
                    args: Prisma.OscMemberUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$OscMemberPayload>;
                };
                deleteMany: {
                    args: Prisma.OscMemberDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.OscMemberUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.OscMemberUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$OscMemberPayload>[];
                };
                upsert: {
                    args: Prisma.OscMemberUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$OscMemberPayload>;
                };
                aggregate: {
                    args: Prisma.OscMemberAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateOscMember>;
                };
                groupBy: {
                    args: Prisma.OscMemberGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.OscMemberGroupByOutputType>[];
                };
                count: {
                    args: Prisma.OscMemberCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.OscMemberCountAggregateOutputType> | number;
                };
            };
        };
        OscMemberPhone: {
            payload: Prisma.$OscMemberPhonePayload<ExtArgs>;
            fields: Prisma.OscMemberPhoneFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.OscMemberPhoneFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$OscMemberPhonePayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.OscMemberPhoneFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$OscMemberPhonePayload>;
                };
                findFirst: {
                    args: Prisma.OscMemberPhoneFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$OscMemberPhonePayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.OscMemberPhoneFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$OscMemberPhonePayload>;
                };
                findMany: {
                    args: Prisma.OscMemberPhoneFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$OscMemberPhonePayload>[];
                };
                create: {
                    args: Prisma.OscMemberPhoneCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$OscMemberPhonePayload>;
                };
                createMany: {
                    args: Prisma.OscMemberPhoneCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.OscMemberPhoneCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$OscMemberPhonePayload>[];
                };
                delete: {
                    args: Prisma.OscMemberPhoneDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$OscMemberPhonePayload>;
                };
                update: {
                    args: Prisma.OscMemberPhoneUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$OscMemberPhonePayload>;
                };
                deleteMany: {
                    args: Prisma.OscMemberPhoneDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.OscMemberPhoneUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.OscMemberPhoneUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$OscMemberPhonePayload>[];
                };
                upsert: {
                    args: Prisma.OscMemberPhoneUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$OscMemberPhonePayload>;
                };
                aggregate: {
                    args: Prisma.OscMemberPhoneAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateOscMemberPhone>;
                };
                groupBy: {
                    args: Prisma.OscMemberPhoneGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.OscMemberPhoneGroupByOutputType>[];
                };
                count: {
                    args: Prisma.OscMemberPhoneCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.OscMemberPhoneCountAggregateOutputType> | number;
                };
            };
        };
        Recruitment: {
            payload: Prisma.$RecruitmentPayload<ExtArgs>;
            fields: Prisma.RecruitmentFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.RecruitmentFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$RecruitmentPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.RecruitmentFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$RecruitmentPayload>;
                };
                findFirst: {
                    args: Prisma.RecruitmentFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$RecruitmentPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.RecruitmentFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$RecruitmentPayload>;
                };
                findMany: {
                    args: Prisma.RecruitmentFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$RecruitmentPayload>[];
                };
                create: {
                    args: Prisma.RecruitmentCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$RecruitmentPayload>;
                };
                createMany: {
                    args: Prisma.RecruitmentCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.RecruitmentCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$RecruitmentPayload>[];
                };
                delete: {
                    args: Prisma.RecruitmentDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$RecruitmentPayload>;
                };
                update: {
                    args: Prisma.RecruitmentUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$RecruitmentPayload>;
                };
                deleteMany: {
                    args: Prisma.RecruitmentDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.RecruitmentUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.RecruitmentUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$RecruitmentPayload>[];
                };
                upsert: {
                    args: Prisma.RecruitmentUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$RecruitmentPayload>;
                };
                aggregate: {
                    args: Prisma.RecruitmentAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateRecruitment>;
                };
                groupBy: {
                    args: Prisma.RecruitmentGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.RecruitmentGroupByOutputType>[];
                };
                count: {
                    args: Prisma.RecruitmentCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.RecruitmentCountAggregateOutputType> | number;
                };
            };
        };
        Interview: {
            payload: Prisma.$InterviewPayload<ExtArgs>;
            fields: Prisma.InterviewFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.InterviewFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$InterviewPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.InterviewFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$InterviewPayload>;
                };
                findFirst: {
                    args: Prisma.InterviewFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$InterviewPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.InterviewFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$InterviewPayload>;
                };
                findMany: {
                    args: Prisma.InterviewFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$InterviewPayload>[];
                };
                create: {
                    args: Prisma.InterviewCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$InterviewPayload>;
                };
                createMany: {
                    args: Prisma.InterviewCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.InterviewCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$InterviewPayload>[];
                };
                delete: {
                    args: Prisma.InterviewDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$InterviewPayload>;
                };
                update: {
                    args: Prisma.InterviewUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$InterviewPayload>;
                };
                deleteMany: {
                    args: Prisma.InterviewDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.InterviewUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.InterviewUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$InterviewPayload>[];
                };
                upsert: {
                    args: Prisma.InterviewUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$InterviewPayload>;
                };
                aggregate: {
                    args: Prisma.InterviewAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateInterview>;
                };
                groupBy: {
                    args: Prisma.InterviewGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.InterviewGroupByOutputType>[];
                };
                count: {
                    args: Prisma.InterviewCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.InterviewCountAggregateOutputType> | number;
                };
            };
        };
        InterviewPanel: {
            payload: Prisma.$InterviewPanelPayload<ExtArgs>;
            fields: Prisma.InterviewPanelFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.InterviewPanelFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$InterviewPanelPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.InterviewPanelFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$InterviewPanelPayload>;
                };
                findFirst: {
                    args: Prisma.InterviewPanelFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$InterviewPanelPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.InterviewPanelFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$InterviewPanelPayload>;
                };
                findMany: {
                    args: Prisma.InterviewPanelFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$InterviewPanelPayload>[];
                };
                create: {
                    args: Prisma.InterviewPanelCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$InterviewPanelPayload>;
                };
                createMany: {
                    args: Prisma.InterviewPanelCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.InterviewPanelCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$InterviewPanelPayload>[];
                };
                delete: {
                    args: Prisma.InterviewPanelDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$InterviewPanelPayload>;
                };
                update: {
                    args: Prisma.InterviewPanelUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$InterviewPanelPayload>;
                };
                deleteMany: {
                    args: Prisma.InterviewPanelDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.InterviewPanelUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.InterviewPanelUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$InterviewPanelPayload>[];
                };
                upsert: {
                    args: Prisma.InterviewPanelUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$InterviewPanelPayload>;
                };
                aggregate: {
                    args: Prisma.InterviewPanelAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateInterviewPanel>;
                };
                groupBy: {
                    args: Prisma.InterviewPanelGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.InterviewPanelGroupByOutputType>[];
                };
                count: {
                    args: Prisma.InterviewPanelCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.InterviewPanelCountAggregateOutputType> | number;
                };
            };
        };
        InterviewSchedule: {
            payload: Prisma.$InterviewSchedulePayload<ExtArgs>;
            fields: Prisma.InterviewScheduleFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.InterviewScheduleFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$InterviewSchedulePayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.InterviewScheduleFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$InterviewSchedulePayload>;
                };
                findFirst: {
                    args: Prisma.InterviewScheduleFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$InterviewSchedulePayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.InterviewScheduleFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$InterviewSchedulePayload>;
                };
                findMany: {
                    args: Prisma.InterviewScheduleFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$InterviewSchedulePayload>[];
                };
                create: {
                    args: Prisma.InterviewScheduleCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$InterviewSchedulePayload>;
                };
                createMany: {
                    args: Prisma.InterviewScheduleCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.InterviewScheduleCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$InterviewSchedulePayload>[];
                };
                delete: {
                    args: Prisma.InterviewScheduleDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$InterviewSchedulePayload>;
                };
                update: {
                    args: Prisma.InterviewScheduleUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$InterviewSchedulePayload>;
                };
                deleteMany: {
                    args: Prisma.InterviewScheduleDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.InterviewScheduleUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.InterviewScheduleUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$InterviewSchedulePayload>[];
                };
                upsert: {
                    args: Prisma.InterviewScheduleUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$InterviewSchedulePayload>;
                };
                aggregate: {
                    args: Prisma.InterviewScheduleAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateInterviewSchedule>;
                };
                groupBy: {
                    args: Prisma.InterviewScheduleGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.InterviewScheduleGroupByOutputType>[];
                };
                count: {
                    args: Prisma.InterviewScheduleCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.InterviewScheduleCountAggregateOutputType> | number;
                };
            };
        };
    };
} & {
    other: {
        payload: any;
        operations: {
            $executeRaw: {
                args: [query: TemplateStringsArray | Sql, ...values: any[]];
                result: any;
            };
            $executeRawUnsafe: {
                args: [query: string, ...values: any[]];
                result: any;
            };
            $queryRaw: {
                args: [query: TemplateStringsArray | Sql, ...values: any[]];
                result: any;
            };
            $queryRawUnsafe: {
                args: [query: string, ...values: any[]];
                result: any;
            };
        };
    };
};
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
export type BigIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'BigInt'>;
export type ListBigIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'BigInt[]'>;
export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>;
export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>;
export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>;
export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>;
export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>;
export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>;
export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>;
export type BatchPayload = {
    count: number;
};
export declare const defineExtension: runtime.Types.Extensions.ExtendsHook<"define", TypeMapCb, runtime.Types.Extensions.DefaultArgs>;
export type DefaultPrismaClient = PrismaClient;
export type ErrorFormat = 'pretty' | 'colorless' | 'minimal';
export type PrismaClientOptions = ({
    adapter: runtime.SqlDriverAdapterFactory;
    accelerateUrl?: never;
} | {
    accelerateUrl: string;
    adapter?: never;
}) & {
    errorFormat?: ErrorFormat;
    log?: (LogLevel | LogDefinition)[];
    transactionOptions?: {
        maxWait?: number;
        timeout?: number;
        isolationLevel?: TransactionIsolationLevel;
    };
    omit?: GlobalOmitConfig;
    comments?: runtime.SqlCommenterPlugin[];
};
export type GlobalOmitConfig = {
    committee?: Prisma.CommitteeOmit;
    interviewee?: Prisma.IntervieweeOmit;
    oscMember?: Prisma.OscMemberOmit;
    oscMemberPhone?: Prisma.OscMemberPhoneOmit;
    recruitment?: Prisma.RecruitmentOmit;
    interview?: Prisma.InterviewOmit;
    interviewPanel?: Prisma.InterviewPanelOmit;
    interviewSchedule?: Prisma.InterviewScheduleOmit;
};
export type LogLevel = 'info' | 'query' | 'warn' | 'error';
export type LogDefinition = {
    level: LogLevel;
    emit: 'stdout' | 'event';
};
export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;
export type GetLogType<T> = CheckIsLogLevel<T extends LogDefinition ? T['level'] : T>;
export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition> ? GetLogType<T[number]> : never;
export type QueryEvent = {
    timestamp: Date;
    query: string;
    params: string;
    duration: number;
    target: string;
};
export type LogEvent = {
    timestamp: Date;
    message: string;
    target: string;
};
export type PrismaAction = 'findUnique' | 'findUniqueOrThrow' | 'findMany' | 'findFirst' | 'findFirstOrThrow' | 'create' | 'createMany' | 'createManyAndReturn' | 'update' | 'updateMany' | 'updateManyAndReturn' | 'upsert' | 'delete' | 'deleteMany' | 'executeRaw' | 'queryRaw' | 'aggregate' | 'count' | 'runCommandRaw' | 'findRaw' | 'groupBy';
export type TransactionClient = Omit<DefaultPrismaClient, runtime.ITXClientDenyList>;

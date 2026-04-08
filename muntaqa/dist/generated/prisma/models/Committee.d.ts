import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
export type CommitteeModel = runtime.Types.Result.DefaultSelection<Prisma.$CommitteePayload>;
export type AggregateCommittee = {
    _count: CommitteeCountAggregateOutputType | null;
    _avg: CommitteeAvgAggregateOutputType | null;
    _sum: CommitteeSumAggregateOutputType | null;
    _min: CommitteeMinAggregateOutputType | null;
    _max: CommitteeMaxAggregateOutputType | null;
};
export type CommitteeAvgAggregateOutputType = {
    id: number | null;
};
export type CommitteeSumAggregateOutputType = {
    id: bigint | null;
};
export type CommitteeMinAggregateOutputType = {
    id: bigint | null;
    name: string | null;
};
export type CommitteeMaxAggregateOutputType = {
    id: bigint | null;
    name: string | null;
};
export type CommitteeCountAggregateOutputType = {
    id: number;
    name: number;
    _all: number;
};
export type CommitteeAvgAggregateInputType = {
    id?: true;
};
export type CommitteeSumAggregateInputType = {
    id?: true;
};
export type CommitteeMinAggregateInputType = {
    id?: true;
    name?: true;
};
export type CommitteeMaxAggregateInputType = {
    id?: true;
    name?: true;
};
export type CommitteeCountAggregateInputType = {
    id?: true;
    name?: true;
    _all?: true;
};
export type CommitteeAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.CommitteeWhereInput;
    orderBy?: Prisma.CommitteeOrderByWithRelationInput | Prisma.CommitteeOrderByWithRelationInput[];
    cursor?: Prisma.CommitteeWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | CommitteeCountAggregateInputType;
    _avg?: CommitteeAvgAggregateInputType;
    _sum?: CommitteeSumAggregateInputType;
    _min?: CommitteeMinAggregateInputType;
    _max?: CommitteeMaxAggregateInputType;
};
export type GetCommitteeAggregateType<T extends CommitteeAggregateArgs> = {
    [P in keyof T & keyof AggregateCommittee]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateCommittee[P]> : Prisma.GetScalarType<T[P], AggregateCommittee[P]>;
};
export type CommitteeGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.CommitteeWhereInput;
    orderBy?: Prisma.CommitteeOrderByWithAggregationInput | Prisma.CommitteeOrderByWithAggregationInput[];
    by: Prisma.CommitteeScalarFieldEnum[] | Prisma.CommitteeScalarFieldEnum;
    having?: Prisma.CommitteeScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: CommitteeCountAggregateInputType | true;
    _avg?: CommitteeAvgAggregateInputType;
    _sum?: CommitteeSumAggregateInputType;
    _min?: CommitteeMinAggregateInputType;
    _max?: CommitteeMaxAggregateInputType;
};
export type CommitteeGroupByOutputType = {
    id: bigint;
    name: string;
    _count: CommitteeCountAggregateOutputType | null;
    _avg: CommitteeAvgAggregateOutputType | null;
    _sum: CommitteeSumAggregateOutputType | null;
    _min: CommitteeMinAggregateOutputType | null;
    _max: CommitteeMaxAggregateOutputType | null;
};
export type GetCommitteeGroupByPayload<T extends CommitteeGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<CommitteeGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof CommitteeGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], CommitteeGroupByOutputType[P]> : Prisma.GetScalarType<T[P], CommitteeGroupByOutputType[P]>;
}>>;
export type CommitteeWhereInput = {
    AND?: Prisma.CommitteeWhereInput | Prisma.CommitteeWhereInput[];
    OR?: Prisma.CommitteeWhereInput[];
    NOT?: Prisma.CommitteeWhereInput | Prisma.CommitteeWhereInput[];
    id?: Prisma.BigIntFilter<"Committee"> | bigint | number;
    name?: Prisma.StringFilter<"Committee"> | string;
    interviewees?: Prisma.IntervieweeListRelationFilter;
    interviewees2?: Prisma.IntervieweeListRelationFilter;
    oscMembers?: Prisma.OscMemberListRelationFilter;
    interviews?: Prisma.InterviewListRelationFilter;
};
export type CommitteeOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    interviewees?: Prisma.IntervieweeOrderByRelationAggregateInput;
    interviewees2?: Prisma.IntervieweeOrderByRelationAggregateInput;
    oscMembers?: Prisma.OscMemberOrderByRelationAggregateInput;
    interviews?: Prisma.InterviewOrderByRelationAggregateInput;
};
export type CommitteeWhereUniqueInput = Prisma.AtLeast<{
    id?: bigint | number;
    AND?: Prisma.CommitteeWhereInput | Prisma.CommitteeWhereInput[];
    OR?: Prisma.CommitteeWhereInput[];
    NOT?: Prisma.CommitteeWhereInput | Prisma.CommitteeWhereInput[];
    name?: Prisma.StringFilter<"Committee"> | string;
    interviewees?: Prisma.IntervieweeListRelationFilter;
    interviewees2?: Prisma.IntervieweeListRelationFilter;
    oscMembers?: Prisma.OscMemberListRelationFilter;
    interviews?: Prisma.InterviewListRelationFilter;
}, "id">;
export type CommitteeOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    _count?: Prisma.CommitteeCountOrderByAggregateInput;
    _avg?: Prisma.CommitteeAvgOrderByAggregateInput;
    _max?: Prisma.CommitteeMaxOrderByAggregateInput;
    _min?: Prisma.CommitteeMinOrderByAggregateInput;
    _sum?: Prisma.CommitteeSumOrderByAggregateInput;
};
export type CommitteeScalarWhereWithAggregatesInput = {
    AND?: Prisma.CommitteeScalarWhereWithAggregatesInput | Prisma.CommitteeScalarWhereWithAggregatesInput[];
    OR?: Prisma.CommitteeScalarWhereWithAggregatesInput[];
    NOT?: Prisma.CommitteeScalarWhereWithAggregatesInput | Prisma.CommitteeScalarWhereWithAggregatesInput[];
    id?: Prisma.BigIntWithAggregatesFilter<"Committee"> | bigint | number;
    name?: Prisma.StringWithAggregatesFilter<"Committee"> | string;
};
export type CommitteeCreateInput = {
    id?: bigint | number;
    name: string;
    interviewees?: Prisma.IntervieweeCreateNestedManyWithoutFirstCommitteeInput;
    interviewees2?: Prisma.IntervieweeCreateNestedManyWithoutSecondCommitteeInput;
    oscMembers?: Prisma.OscMemberCreateNestedManyWithoutCommitteeInput;
    interviews?: Prisma.InterviewCreateNestedManyWithoutCommitteeInput;
};
export type CommitteeUncheckedCreateInput = {
    id?: bigint | number;
    name: string;
    interviewees?: Prisma.IntervieweeUncheckedCreateNestedManyWithoutFirstCommitteeInput;
    interviewees2?: Prisma.IntervieweeUncheckedCreateNestedManyWithoutSecondCommitteeInput;
    oscMembers?: Prisma.OscMemberUncheckedCreateNestedManyWithoutCommitteeInput;
    interviews?: Prisma.InterviewUncheckedCreateNestedManyWithoutCommitteeInput;
};
export type CommitteeUpdateInput = {
    id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    interviewees?: Prisma.IntervieweeUpdateManyWithoutFirstCommitteeNestedInput;
    interviewees2?: Prisma.IntervieweeUpdateManyWithoutSecondCommitteeNestedInput;
    oscMembers?: Prisma.OscMemberUpdateManyWithoutCommitteeNestedInput;
    interviews?: Prisma.InterviewUpdateManyWithoutCommitteeNestedInput;
};
export type CommitteeUncheckedUpdateInput = {
    id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    interviewees?: Prisma.IntervieweeUncheckedUpdateManyWithoutFirstCommitteeNestedInput;
    interviewees2?: Prisma.IntervieweeUncheckedUpdateManyWithoutSecondCommitteeNestedInput;
    oscMembers?: Prisma.OscMemberUncheckedUpdateManyWithoutCommitteeNestedInput;
    interviews?: Prisma.InterviewUncheckedUpdateManyWithoutCommitteeNestedInput;
};
export type CommitteeCreateManyInput = {
    id?: bigint | number;
    name: string;
};
export type CommitteeUpdateManyMutationInput = {
    id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type CommitteeUncheckedUpdateManyInput = {
    id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type CommitteeCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
};
export type CommitteeAvgOrderByAggregateInput = {
    id?: Prisma.SortOrder;
};
export type CommitteeMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
};
export type CommitteeMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
};
export type CommitteeSumOrderByAggregateInput = {
    id?: Prisma.SortOrder;
};
export type CommitteeScalarRelationFilter = {
    is?: Prisma.CommitteeWhereInput;
    isNot?: Prisma.CommitteeWhereInput;
};
export type BigIntFieldUpdateOperationsInput = {
    set?: bigint | number;
    increment?: bigint | number;
    decrement?: bigint | number;
    multiply?: bigint | number;
    divide?: bigint | number;
};
export type StringFieldUpdateOperationsInput = {
    set?: string;
};
export type CommitteeCreateNestedOneWithoutIntervieweesInput = {
    create?: Prisma.XOR<Prisma.CommitteeCreateWithoutIntervieweesInput, Prisma.CommitteeUncheckedCreateWithoutIntervieweesInput>;
    connectOrCreate?: Prisma.CommitteeCreateOrConnectWithoutIntervieweesInput;
    connect?: Prisma.CommitteeWhereUniqueInput;
};
export type CommitteeCreateNestedOneWithoutInterviewees2Input = {
    create?: Prisma.XOR<Prisma.CommitteeCreateWithoutInterviewees2Input, Prisma.CommitteeUncheckedCreateWithoutInterviewees2Input>;
    connectOrCreate?: Prisma.CommitteeCreateOrConnectWithoutInterviewees2Input;
    connect?: Prisma.CommitteeWhereUniqueInput;
};
export type CommitteeUpdateOneRequiredWithoutIntervieweesNestedInput = {
    create?: Prisma.XOR<Prisma.CommitteeCreateWithoutIntervieweesInput, Prisma.CommitteeUncheckedCreateWithoutIntervieweesInput>;
    connectOrCreate?: Prisma.CommitteeCreateOrConnectWithoutIntervieweesInput;
    upsert?: Prisma.CommitteeUpsertWithoutIntervieweesInput;
    connect?: Prisma.CommitteeWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.CommitteeUpdateToOneWithWhereWithoutIntervieweesInput, Prisma.CommitteeUpdateWithoutIntervieweesInput>, Prisma.CommitteeUncheckedUpdateWithoutIntervieweesInput>;
};
export type CommitteeUpdateOneRequiredWithoutInterviewees2NestedInput = {
    create?: Prisma.XOR<Prisma.CommitteeCreateWithoutInterviewees2Input, Prisma.CommitteeUncheckedCreateWithoutInterviewees2Input>;
    connectOrCreate?: Prisma.CommitteeCreateOrConnectWithoutInterviewees2Input;
    upsert?: Prisma.CommitteeUpsertWithoutInterviewees2Input;
    connect?: Prisma.CommitteeWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.CommitteeUpdateToOneWithWhereWithoutInterviewees2Input, Prisma.CommitteeUpdateWithoutInterviewees2Input>, Prisma.CommitteeUncheckedUpdateWithoutInterviewees2Input>;
};
export type CommitteeCreateNestedOneWithoutOscMembersInput = {
    create?: Prisma.XOR<Prisma.CommitteeCreateWithoutOscMembersInput, Prisma.CommitteeUncheckedCreateWithoutOscMembersInput>;
    connectOrCreate?: Prisma.CommitteeCreateOrConnectWithoutOscMembersInput;
    connect?: Prisma.CommitteeWhereUniqueInput;
};
export type CommitteeUpdateOneRequiredWithoutOscMembersNestedInput = {
    create?: Prisma.XOR<Prisma.CommitteeCreateWithoutOscMembersInput, Prisma.CommitteeUncheckedCreateWithoutOscMembersInput>;
    connectOrCreate?: Prisma.CommitteeCreateOrConnectWithoutOscMembersInput;
    upsert?: Prisma.CommitteeUpsertWithoutOscMembersInput;
    connect?: Prisma.CommitteeWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.CommitteeUpdateToOneWithWhereWithoutOscMembersInput, Prisma.CommitteeUpdateWithoutOscMembersInput>, Prisma.CommitteeUncheckedUpdateWithoutOscMembersInput>;
};
export type CommitteeCreateNestedOneWithoutInterviewsInput = {
    create?: Prisma.XOR<Prisma.CommitteeCreateWithoutInterviewsInput, Prisma.CommitteeUncheckedCreateWithoutInterviewsInput>;
    connectOrCreate?: Prisma.CommitteeCreateOrConnectWithoutInterviewsInput;
    connect?: Prisma.CommitteeWhereUniqueInput;
};
export type CommitteeUpdateOneRequiredWithoutInterviewsNestedInput = {
    create?: Prisma.XOR<Prisma.CommitteeCreateWithoutInterviewsInput, Prisma.CommitteeUncheckedCreateWithoutInterviewsInput>;
    connectOrCreate?: Prisma.CommitteeCreateOrConnectWithoutInterviewsInput;
    upsert?: Prisma.CommitteeUpsertWithoutInterviewsInput;
    connect?: Prisma.CommitteeWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.CommitteeUpdateToOneWithWhereWithoutInterviewsInput, Prisma.CommitteeUpdateWithoutInterviewsInput>, Prisma.CommitteeUncheckedUpdateWithoutInterviewsInput>;
};
export type CommitteeCreateWithoutIntervieweesInput = {
    id?: bigint | number;
    name: string;
    interviewees2?: Prisma.IntervieweeCreateNestedManyWithoutSecondCommitteeInput;
    oscMembers?: Prisma.OscMemberCreateNestedManyWithoutCommitteeInput;
    interviews?: Prisma.InterviewCreateNestedManyWithoutCommitteeInput;
};
export type CommitteeUncheckedCreateWithoutIntervieweesInput = {
    id?: bigint | number;
    name: string;
    interviewees2?: Prisma.IntervieweeUncheckedCreateNestedManyWithoutSecondCommitteeInput;
    oscMembers?: Prisma.OscMemberUncheckedCreateNestedManyWithoutCommitteeInput;
    interviews?: Prisma.InterviewUncheckedCreateNestedManyWithoutCommitteeInput;
};
export type CommitteeCreateOrConnectWithoutIntervieweesInput = {
    where: Prisma.CommitteeWhereUniqueInput;
    create: Prisma.XOR<Prisma.CommitteeCreateWithoutIntervieweesInput, Prisma.CommitteeUncheckedCreateWithoutIntervieweesInput>;
};
export type CommitteeCreateWithoutInterviewees2Input = {
    id?: bigint | number;
    name: string;
    interviewees?: Prisma.IntervieweeCreateNestedManyWithoutFirstCommitteeInput;
    oscMembers?: Prisma.OscMemberCreateNestedManyWithoutCommitteeInput;
    interviews?: Prisma.InterviewCreateNestedManyWithoutCommitteeInput;
};
export type CommitteeUncheckedCreateWithoutInterviewees2Input = {
    id?: bigint | number;
    name: string;
    interviewees?: Prisma.IntervieweeUncheckedCreateNestedManyWithoutFirstCommitteeInput;
    oscMembers?: Prisma.OscMemberUncheckedCreateNestedManyWithoutCommitteeInput;
    interviews?: Prisma.InterviewUncheckedCreateNestedManyWithoutCommitteeInput;
};
export type CommitteeCreateOrConnectWithoutInterviewees2Input = {
    where: Prisma.CommitteeWhereUniqueInput;
    create: Prisma.XOR<Prisma.CommitteeCreateWithoutInterviewees2Input, Prisma.CommitteeUncheckedCreateWithoutInterviewees2Input>;
};
export type CommitteeUpsertWithoutIntervieweesInput = {
    update: Prisma.XOR<Prisma.CommitteeUpdateWithoutIntervieweesInput, Prisma.CommitteeUncheckedUpdateWithoutIntervieweesInput>;
    create: Prisma.XOR<Prisma.CommitteeCreateWithoutIntervieweesInput, Prisma.CommitteeUncheckedCreateWithoutIntervieweesInput>;
    where?: Prisma.CommitteeWhereInput;
};
export type CommitteeUpdateToOneWithWhereWithoutIntervieweesInput = {
    where?: Prisma.CommitteeWhereInput;
    data: Prisma.XOR<Prisma.CommitteeUpdateWithoutIntervieweesInput, Prisma.CommitteeUncheckedUpdateWithoutIntervieweesInput>;
};
export type CommitteeUpdateWithoutIntervieweesInput = {
    id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    interviewees2?: Prisma.IntervieweeUpdateManyWithoutSecondCommitteeNestedInput;
    oscMembers?: Prisma.OscMemberUpdateManyWithoutCommitteeNestedInput;
    interviews?: Prisma.InterviewUpdateManyWithoutCommitteeNestedInput;
};
export type CommitteeUncheckedUpdateWithoutIntervieweesInput = {
    id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    interviewees2?: Prisma.IntervieweeUncheckedUpdateManyWithoutSecondCommitteeNestedInput;
    oscMembers?: Prisma.OscMemberUncheckedUpdateManyWithoutCommitteeNestedInput;
    interviews?: Prisma.InterviewUncheckedUpdateManyWithoutCommitteeNestedInput;
};
export type CommitteeUpsertWithoutInterviewees2Input = {
    update: Prisma.XOR<Prisma.CommitteeUpdateWithoutInterviewees2Input, Prisma.CommitteeUncheckedUpdateWithoutInterviewees2Input>;
    create: Prisma.XOR<Prisma.CommitteeCreateWithoutInterviewees2Input, Prisma.CommitteeUncheckedCreateWithoutInterviewees2Input>;
    where?: Prisma.CommitteeWhereInput;
};
export type CommitteeUpdateToOneWithWhereWithoutInterviewees2Input = {
    where?: Prisma.CommitteeWhereInput;
    data: Prisma.XOR<Prisma.CommitteeUpdateWithoutInterviewees2Input, Prisma.CommitteeUncheckedUpdateWithoutInterviewees2Input>;
};
export type CommitteeUpdateWithoutInterviewees2Input = {
    id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    interviewees?: Prisma.IntervieweeUpdateManyWithoutFirstCommitteeNestedInput;
    oscMembers?: Prisma.OscMemberUpdateManyWithoutCommitteeNestedInput;
    interviews?: Prisma.InterviewUpdateManyWithoutCommitteeNestedInput;
};
export type CommitteeUncheckedUpdateWithoutInterviewees2Input = {
    id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    interviewees?: Prisma.IntervieweeUncheckedUpdateManyWithoutFirstCommitteeNestedInput;
    oscMembers?: Prisma.OscMemberUncheckedUpdateManyWithoutCommitteeNestedInput;
    interviews?: Prisma.InterviewUncheckedUpdateManyWithoutCommitteeNestedInput;
};
export type CommitteeCreateWithoutOscMembersInput = {
    id?: bigint | number;
    name: string;
    interviewees?: Prisma.IntervieweeCreateNestedManyWithoutFirstCommitteeInput;
    interviewees2?: Prisma.IntervieweeCreateNestedManyWithoutSecondCommitteeInput;
    interviews?: Prisma.InterviewCreateNestedManyWithoutCommitteeInput;
};
export type CommitteeUncheckedCreateWithoutOscMembersInput = {
    id?: bigint | number;
    name: string;
    interviewees?: Prisma.IntervieweeUncheckedCreateNestedManyWithoutFirstCommitteeInput;
    interviewees2?: Prisma.IntervieweeUncheckedCreateNestedManyWithoutSecondCommitteeInput;
    interviews?: Prisma.InterviewUncheckedCreateNestedManyWithoutCommitteeInput;
};
export type CommitteeCreateOrConnectWithoutOscMembersInput = {
    where: Prisma.CommitteeWhereUniqueInput;
    create: Prisma.XOR<Prisma.CommitteeCreateWithoutOscMembersInput, Prisma.CommitteeUncheckedCreateWithoutOscMembersInput>;
};
export type CommitteeUpsertWithoutOscMembersInput = {
    update: Prisma.XOR<Prisma.CommitteeUpdateWithoutOscMembersInput, Prisma.CommitteeUncheckedUpdateWithoutOscMembersInput>;
    create: Prisma.XOR<Prisma.CommitteeCreateWithoutOscMembersInput, Prisma.CommitteeUncheckedCreateWithoutOscMembersInput>;
    where?: Prisma.CommitteeWhereInput;
};
export type CommitteeUpdateToOneWithWhereWithoutOscMembersInput = {
    where?: Prisma.CommitteeWhereInput;
    data: Prisma.XOR<Prisma.CommitteeUpdateWithoutOscMembersInput, Prisma.CommitteeUncheckedUpdateWithoutOscMembersInput>;
};
export type CommitteeUpdateWithoutOscMembersInput = {
    id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    interviewees?: Prisma.IntervieweeUpdateManyWithoutFirstCommitteeNestedInput;
    interviewees2?: Prisma.IntervieweeUpdateManyWithoutSecondCommitteeNestedInput;
    interviews?: Prisma.InterviewUpdateManyWithoutCommitteeNestedInput;
};
export type CommitteeUncheckedUpdateWithoutOscMembersInput = {
    id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    interviewees?: Prisma.IntervieweeUncheckedUpdateManyWithoutFirstCommitteeNestedInput;
    interviewees2?: Prisma.IntervieweeUncheckedUpdateManyWithoutSecondCommitteeNestedInput;
    interviews?: Prisma.InterviewUncheckedUpdateManyWithoutCommitteeNestedInput;
};
export type CommitteeCreateWithoutInterviewsInput = {
    id?: bigint | number;
    name: string;
    interviewees?: Prisma.IntervieweeCreateNestedManyWithoutFirstCommitteeInput;
    interviewees2?: Prisma.IntervieweeCreateNestedManyWithoutSecondCommitteeInput;
    oscMembers?: Prisma.OscMemberCreateNestedManyWithoutCommitteeInput;
};
export type CommitteeUncheckedCreateWithoutInterviewsInput = {
    id?: bigint | number;
    name: string;
    interviewees?: Prisma.IntervieweeUncheckedCreateNestedManyWithoutFirstCommitteeInput;
    interviewees2?: Prisma.IntervieweeUncheckedCreateNestedManyWithoutSecondCommitteeInput;
    oscMembers?: Prisma.OscMemberUncheckedCreateNestedManyWithoutCommitteeInput;
};
export type CommitteeCreateOrConnectWithoutInterviewsInput = {
    where: Prisma.CommitteeWhereUniqueInput;
    create: Prisma.XOR<Prisma.CommitteeCreateWithoutInterviewsInput, Prisma.CommitteeUncheckedCreateWithoutInterviewsInput>;
};
export type CommitteeUpsertWithoutInterviewsInput = {
    update: Prisma.XOR<Prisma.CommitteeUpdateWithoutInterviewsInput, Prisma.CommitteeUncheckedUpdateWithoutInterviewsInput>;
    create: Prisma.XOR<Prisma.CommitteeCreateWithoutInterviewsInput, Prisma.CommitteeUncheckedCreateWithoutInterviewsInput>;
    where?: Prisma.CommitteeWhereInput;
};
export type CommitteeUpdateToOneWithWhereWithoutInterviewsInput = {
    where?: Prisma.CommitteeWhereInput;
    data: Prisma.XOR<Prisma.CommitteeUpdateWithoutInterviewsInput, Prisma.CommitteeUncheckedUpdateWithoutInterviewsInput>;
};
export type CommitteeUpdateWithoutInterviewsInput = {
    id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    interviewees?: Prisma.IntervieweeUpdateManyWithoutFirstCommitteeNestedInput;
    interviewees2?: Prisma.IntervieweeUpdateManyWithoutSecondCommitteeNestedInput;
    oscMembers?: Prisma.OscMemberUpdateManyWithoutCommitteeNestedInput;
};
export type CommitteeUncheckedUpdateWithoutInterviewsInput = {
    id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    interviewees?: Prisma.IntervieweeUncheckedUpdateManyWithoutFirstCommitteeNestedInput;
    interviewees2?: Prisma.IntervieweeUncheckedUpdateManyWithoutSecondCommitteeNestedInput;
    oscMembers?: Prisma.OscMemberUncheckedUpdateManyWithoutCommitteeNestedInput;
};
export type CommitteeCountOutputType = {
    interviewees: number;
    interviewees2: number;
    oscMembers: number;
    interviews: number;
};
export type CommitteeCountOutputTypeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    interviewees?: boolean | CommitteeCountOutputTypeCountIntervieweesArgs;
    interviewees2?: boolean | CommitteeCountOutputTypeCountInterviewees2Args;
    oscMembers?: boolean | CommitteeCountOutputTypeCountOscMembersArgs;
    interviews?: boolean | CommitteeCountOutputTypeCountInterviewsArgs;
};
export type CommitteeCountOutputTypeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CommitteeCountOutputTypeSelect<ExtArgs> | null;
};
export type CommitteeCountOutputTypeCountIntervieweesArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.IntervieweeWhereInput;
};
export type CommitteeCountOutputTypeCountInterviewees2Args<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.IntervieweeWhereInput;
};
export type CommitteeCountOutputTypeCountOscMembersArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.OscMemberWhereInput;
};
export type CommitteeCountOutputTypeCountInterviewsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.InterviewWhereInput;
};
export type CommitteeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    name?: boolean;
    interviewees?: boolean | Prisma.Committee$intervieweesArgs<ExtArgs>;
    interviewees2?: boolean | Prisma.Committee$interviewees2Args<ExtArgs>;
    oscMembers?: boolean | Prisma.Committee$oscMembersArgs<ExtArgs>;
    interviews?: boolean | Prisma.Committee$interviewsArgs<ExtArgs>;
    _count?: boolean | Prisma.CommitteeCountOutputTypeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["committee"]>;
export type CommitteeSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    name?: boolean;
}, ExtArgs["result"]["committee"]>;
export type CommitteeSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    name?: boolean;
}, ExtArgs["result"]["committee"]>;
export type CommitteeSelectScalar = {
    id?: boolean;
    name?: boolean;
};
export type CommitteeOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "name", ExtArgs["result"]["committee"]>;
export type CommitteeInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    interviewees?: boolean | Prisma.Committee$intervieweesArgs<ExtArgs>;
    interviewees2?: boolean | Prisma.Committee$interviewees2Args<ExtArgs>;
    oscMembers?: boolean | Prisma.Committee$oscMembersArgs<ExtArgs>;
    interviews?: boolean | Prisma.Committee$interviewsArgs<ExtArgs>;
    _count?: boolean | Prisma.CommitteeCountOutputTypeDefaultArgs<ExtArgs>;
};
export type CommitteeIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {};
export type CommitteeIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {};
export type $CommitteePayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "Committee";
    objects: {
        interviewees: Prisma.$IntervieweePayload<ExtArgs>[];
        interviewees2: Prisma.$IntervieweePayload<ExtArgs>[];
        oscMembers: Prisma.$OscMemberPayload<ExtArgs>[];
        interviews: Prisma.$InterviewPayload<ExtArgs>[];
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: bigint;
        name: string;
    }, ExtArgs["result"]["committee"]>;
    composites: {};
};
export type CommitteeGetPayload<S extends boolean | null | undefined | CommitteeDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$CommitteePayload, S>;
export type CommitteeCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<CommitteeFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: CommitteeCountAggregateInputType | true;
};
export interface CommitteeDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['Committee'];
        meta: {
            name: 'Committee';
        };
    };
    findUnique<T extends CommitteeFindUniqueArgs>(args: Prisma.SelectSubset<T, CommitteeFindUniqueArgs<ExtArgs>>): Prisma.Prisma__CommitteeClient<runtime.Types.Result.GetResult<Prisma.$CommitteePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends CommitteeFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, CommitteeFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__CommitteeClient<runtime.Types.Result.GetResult<Prisma.$CommitteePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends CommitteeFindFirstArgs>(args?: Prisma.SelectSubset<T, CommitteeFindFirstArgs<ExtArgs>>): Prisma.Prisma__CommitteeClient<runtime.Types.Result.GetResult<Prisma.$CommitteePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends CommitteeFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, CommitteeFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__CommitteeClient<runtime.Types.Result.GetResult<Prisma.$CommitteePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends CommitteeFindManyArgs>(args?: Prisma.SelectSubset<T, CommitteeFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$CommitteePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends CommitteeCreateArgs>(args: Prisma.SelectSubset<T, CommitteeCreateArgs<ExtArgs>>): Prisma.Prisma__CommitteeClient<runtime.Types.Result.GetResult<Prisma.$CommitteePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends CommitteeCreateManyArgs>(args?: Prisma.SelectSubset<T, CommitteeCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends CommitteeCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, CommitteeCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$CommitteePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends CommitteeDeleteArgs>(args: Prisma.SelectSubset<T, CommitteeDeleteArgs<ExtArgs>>): Prisma.Prisma__CommitteeClient<runtime.Types.Result.GetResult<Prisma.$CommitteePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends CommitteeUpdateArgs>(args: Prisma.SelectSubset<T, CommitteeUpdateArgs<ExtArgs>>): Prisma.Prisma__CommitteeClient<runtime.Types.Result.GetResult<Prisma.$CommitteePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends CommitteeDeleteManyArgs>(args?: Prisma.SelectSubset<T, CommitteeDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends CommitteeUpdateManyArgs>(args: Prisma.SelectSubset<T, CommitteeUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends CommitteeUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, CommitteeUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$CommitteePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends CommitteeUpsertArgs>(args: Prisma.SelectSubset<T, CommitteeUpsertArgs<ExtArgs>>): Prisma.Prisma__CommitteeClient<runtime.Types.Result.GetResult<Prisma.$CommitteePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends CommitteeCountArgs>(args?: Prisma.Subset<T, CommitteeCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], CommitteeCountAggregateOutputType> : number>;
    aggregate<T extends CommitteeAggregateArgs>(args: Prisma.Subset<T, CommitteeAggregateArgs>): Prisma.PrismaPromise<GetCommitteeAggregateType<T>>;
    groupBy<T extends CommitteeGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: CommitteeGroupByArgs['orderBy'];
    } : {
        orderBy?: CommitteeGroupByArgs['orderBy'];
    }, OrderFields extends Prisma.ExcludeUnderscoreKeys<Prisma.Keys<Prisma.MaybeTupleToUnion<T['orderBy']>>>, ByFields extends Prisma.MaybeTupleToUnion<T['by']>, ByValid extends Prisma.Has<ByFields, OrderFields>, HavingFields extends Prisma.GetHavingFields<T['having']>, HavingValid extends Prisma.Has<ByFields, HavingFields>, ByEmpty extends T['by'] extends never[] ? Prisma.True : Prisma.False, InputErrors extends ByEmpty extends Prisma.True ? `Error: "by" must not be empty.` : HavingValid extends Prisma.False ? {
        [P in HavingFields]: P extends ByFields ? never : P extends string ? `Error: Field "${P}" used in "having" needs to be provided in "by".` : [
            Error,
            'Field ',
            P,
            ` in "having" needs to be provided in "by"`
        ];
    }[HavingFields] : 'take' extends Prisma.Keys<T> ? 'orderBy' extends Prisma.Keys<T> ? ByValid extends Prisma.True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields] : 'Error: If you provide "take", you also need to provide "orderBy"' : 'skip' extends Prisma.Keys<T> ? 'orderBy' extends Prisma.Keys<T> ? ByValid extends Prisma.True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields] : 'Error: If you provide "skip", you also need to provide "orderBy"' : ByValid extends Prisma.True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, CommitteeGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCommitteeGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: CommitteeFieldRefs;
}
export interface Prisma__CommitteeClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    interviewees<T extends Prisma.Committee$intervieweesArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Committee$intervieweesArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$IntervieweePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    interviewees2<T extends Prisma.Committee$interviewees2Args<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Committee$interviewees2Args<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$IntervieweePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    oscMembers<T extends Prisma.Committee$oscMembersArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Committee$oscMembersArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$OscMemberPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    interviews<T extends Prisma.Committee$interviewsArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Committee$interviewsArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$InterviewPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface CommitteeFieldRefs {
    readonly id: Prisma.FieldRef<"Committee", 'BigInt'>;
    readonly name: Prisma.FieldRef<"Committee", 'String'>;
}
export type CommitteeFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CommitteeSelect<ExtArgs> | null;
    omit?: Prisma.CommitteeOmit<ExtArgs> | null;
    include?: Prisma.CommitteeInclude<ExtArgs> | null;
    where: Prisma.CommitteeWhereUniqueInput;
};
export type CommitteeFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CommitteeSelect<ExtArgs> | null;
    omit?: Prisma.CommitteeOmit<ExtArgs> | null;
    include?: Prisma.CommitteeInclude<ExtArgs> | null;
    where: Prisma.CommitteeWhereUniqueInput;
};
export type CommitteeFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CommitteeSelect<ExtArgs> | null;
    omit?: Prisma.CommitteeOmit<ExtArgs> | null;
    include?: Prisma.CommitteeInclude<ExtArgs> | null;
    where?: Prisma.CommitteeWhereInput;
    orderBy?: Prisma.CommitteeOrderByWithRelationInput | Prisma.CommitteeOrderByWithRelationInput[];
    cursor?: Prisma.CommitteeWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.CommitteeScalarFieldEnum | Prisma.CommitteeScalarFieldEnum[];
};
export type CommitteeFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CommitteeSelect<ExtArgs> | null;
    omit?: Prisma.CommitteeOmit<ExtArgs> | null;
    include?: Prisma.CommitteeInclude<ExtArgs> | null;
    where?: Prisma.CommitteeWhereInput;
    orderBy?: Prisma.CommitteeOrderByWithRelationInput | Prisma.CommitteeOrderByWithRelationInput[];
    cursor?: Prisma.CommitteeWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.CommitteeScalarFieldEnum | Prisma.CommitteeScalarFieldEnum[];
};
export type CommitteeFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CommitteeSelect<ExtArgs> | null;
    omit?: Prisma.CommitteeOmit<ExtArgs> | null;
    include?: Prisma.CommitteeInclude<ExtArgs> | null;
    where?: Prisma.CommitteeWhereInput;
    orderBy?: Prisma.CommitteeOrderByWithRelationInput | Prisma.CommitteeOrderByWithRelationInput[];
    cursor?: Prisma.CommitteeWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.CommitteeScalarFieldEnum | Prisma.CommitteeScalarFieldEnum[];
};
export type CommitteeCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CommitteeSelect<ExtArgs> | null;
    omit?: Prisma.CommitteeOmit<ExtArgs> | null;
    include?: Prisma.CommitteeInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.CommitteeCreateInput, Prisma.CommitteeUncheckedCreateInput>;
};
export type CommitteeCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.CommitteeCreateManyInput | Prisma.CommitteeCreateManyInput[];
    skipDuplicates?: boolean;
};
export type CommitteeCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CommitteeSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.CommitteeOmit<ExtArgs> | null;
    data: Prisma.CommitteeCreateManyInput | Prisma.CommitteeCreateManyInput[];
    skipDuplicates?: boolean;
};
export type CommitteeUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CommitteeSelect<ExtArgs> | null;
    omit?: Prisma.CommitteeOmit<ExtArgs> | null;
    include?: Prisma.CommitteeInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.CommitteeUpdateInput, Prisma.CommitteeUncheckedUpdateInput>;
    where: Prisma.CommitteeWhereUniqueInput;
};
export type CommitteeUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.CommitteeUpdateManyMutationInput, Prisma.CommitteeUncheckedUpdateManyInput>;
    where?: Prisma.CommitteeWhereInput;
    limit?: number;
};
export type CommitteeUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CommitteeSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.CommitteeOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.CommitteeUpdateManyMutationInput, Prisma.CommitteeUncheckedUpdateManyInput>;
    where?: Prisma.CommitteeWhereInput;
    limit?: number;
};
export type CommitteeUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CommitteeSelect<ExtArgs> | null;
    omit?: Prisma.CommitteeOmit<ExtArgs> | null;
    include?: Prisma.CommitteeInclude<ExtArgs> | null;
    where: Prisma.CommitteeWhereUniqueInput;
    create: Prisma.XOR<Prisma.CommitteeCreateInput, Prisma.CommitteeUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.CommitteeUpdateInput, Prisma.CommitteeUncheckedUpdateInput>;
};
export type CommitteeDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CommitteeSelect<ExtArgs> | null;
    omit?: Prisma.CommitteeOmit<ExtArgs> | null;
    include?: Prisma.CommitteeInclude<ExtArgs> | null;
    where: Prisma.CommitteeWhereUniqueInput;
};
export type CommitteeDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.CommitteeWhereInput;
    limit?: number;
};
export type Committee$intervieweesArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.IntervieweeSelect<ExtArgs> | null;
    omit?: Prisma.IntervieweeOmit<ExtArgs> | null;
    include?: Prisma.IntervieweeInclude<ExtArgs> | null;
    where?: Prisma.IntervieweeWhereInput;
    orderBy?: Prisma.IntervieweeOrderByWithRelationInput | Prisma.IntervieweeOrderByWithRelationInput[];
    cursor?: Prisma.IntervieweeWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.IntervieweeScalarFieldEnum | Prisma.IntervieweeScalarFieldEnum[];
};
export type Committee$interviewees2Args<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.IntervieweeSelect<ExtArgs> | null;
    omit?: Prisma.IntervieweeOmit<ExtArgs> | null;
    include?: Prisma.IntervieweeInclude<ExtArgs> | null;
    where?: Prisma.IntervieweeWhereInput;
    orderBy?: Prisma.IntervieweeOrderByWithRelationInput | Prisma.IntervieweeOrderByWithRelationInput[];
    cursor?: Prisma.IntervieweeWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.IntervieweeScalarFieldEnum | Prisma.IntervieweeScalarFieldEnum[];
};
export type Committee$oscMembersArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.OscMemberSelect<ExtArgs> | null;
    omit?: Prisma.OscMemberOmit<ExtArgs> | null;
    include?: Prisma.OscMemberInclude<ExtArgs> | null;
    where?: Prisma.OscMemberWhereInput;
    orderBy?: Prisma.OscMemberOrderByWithRelationInput | Prisma.OscMemberOrderByWithRelationInput[];
    cursor?: Prisma.OscMemberWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.OscMemberScalarFieldEnum | Prisma.OscMemberScalarFieldEnum[];
};
export type Committee$interviewsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.InterviewSelect<ExtArgs> | null;
    omit?: Prisma.InterviewOmit<ExtArgs> | null;
    include?: Prisma.InterviewInclude<ExtArgs> | null;
    where?: Prisma.InterviewWhereInput;
    orderBy?: Prisma.InterviewOrderByWithRelationInput | Prisma.InterviewOrderByWithRelationInput[];
    cursor?: Prisma.InterviewWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.InterviewScalarFieldEnum | Prisma.InterviewScalarFieldEnum[];
};
export type CommitteeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CommitteeSelect<ExtArgs> | null;
    omit?: Prisma.CommitteeOmit<ExtArgs> | null;
    include?: Prisma.CommitteeInclude<ExtArgs> | null;
};

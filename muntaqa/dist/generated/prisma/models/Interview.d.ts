import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
export type InterviewModel = runtime.Types.Result.DefaultSelection<Prisma.$InterviewPayload>;
export type AggregateInterview = {
    _count: InterviewCountAggregateOutputType | null;
    _avg: InterviewAvgAggregateOutputType | null;
    _sum: InterviewSumAggregateOutputType | null;
    _min: InterviewMinAggregateOutputType | null;
    _max: InterviewMaxAggregateOutputType | null;
};
export type InterviewAvgAggregateOutputType = {
    id: number | null;
    intervieweeId: number | null;
    result: number | null;
    time: number | null;
    committeeId: number | null;
    date: number | null;
    recruitmentId: number | null;
    notes: number | null;
};
export type InterviewSumAggregateOutputType = {
    id: bigint | null;
    intervieweeId: bigint | null;
    result: bigint | null;
    time: bigint | null;
    committeeId: bigint | null;
    date: bigint | null;
    recruitmentId: bigint | null;
    notes: bigint | null;
};
export type InterviewMinAggregateOutputType = {
    id: bigint | null;
    intervieweeId: bigint | null;
    result: bigint | null;
    time: bigint | null;
    committeeId: bigint | null;
    date: bigint | null;
    recruitmentId: bigint | null;
    notes: bigint | null;
};
export type InterviewMaxAggregateOutputType = {
    id: bigint | null;
    intervieweeId: bigint | null;
    result: bigint | null;
    time: bigint | null;
    committeeId: bigint | null;
    date: bigint | null;
    recruitmentId: bigint | null;
    notes: bigint | null;
};
export type InterviewCountAggregateOutputType = {
    id: number;
    intervieweeId: number;
    result: number;
    time: number;
    committeeId: number;
    date: number;
    recruitmentId: number;
    notes: number;
    _all: number;
};
export type InterviewAvgAggregateInputType = {
    id?: true;
    intervieweeId?: true;
    result?: true;
    time?: true;
    committeeId?: true;
    date?: true;
    recruitmentId?: true;
    notes?: true;
};
export type InterviewSumAggregateInputType = {
    id?: true;
    intervieweeId?: true;
    result?: true;
    time?: true;
    committeeId?: true;
    date?: true;
    recruitmentId?: true;
    notes?: true;
};
export type InterviewMinAggregateInputType = {
    id?: true;
    intervieweeId?: true;
    result?: true;
    time?: true;
    committeeId?: true;
    date?: true;
    recruitmentId?: true;
    notes?: true;
};
export type InterviewMaxAggregateInputType = {
    id?: true;
    intervieweeId?: true;
    result?: true;
    time?: true;
    committeeId?: true;
    date?: true;
    recruitmentId?: true;
    notes?: true;
};
export type InterviewCountAggregateInputType = {
    id?: true;
    intervieweeId?: true;
    result?: true;
    time?: true;
    committeeId?: true;
    date?: true;
    recruitmentId?: true;
    notes?: true;
    _all?: true;
};
export type InterviewAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.InterviewWhereInput;
    orderBy?: Prisma.InterviewOrderByWithRelationInput | Prisma.InterviewOrderByWithRelationInput[];
    cursor?: Prisma.InterviewWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | InterviewCountAggregateInputType;
    _avg?: InterviewAvgAggregateInputType;
    _sum?: InterviewSumAggregateInputType;
    _min?: InterviewMinAggregateInputType;
    _max?: InterviewMaxAggregateInputType;
};
export type GetInterviewAggregateType<T extends InterviewAggregateArgs> = {
    [P in keyof T & keyof AggregateInterview]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateInterview[P]> : Prisma.GetScalarType<T[P], AggregateInterview[P]>;
};
export type InterviewGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.InterviewWhereInput;
    orderBy?: Prisma.InterviewOrderByWithAggregationInput | Prisma.InterviewOrderByWithAggregationInput[];
    by: Prisma.InterviewScalarFieldEnum[] | Prisma.InterviewScalarFieldEnum;
    having?: Prisma.InterviewScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: InterviewCountAggregateInputType | true;
    _avg?: InterviewAvgAggregateInputType;
    _sum?: InterviewSumAggregateInputType;
    _min?: InterviewMinAggregateInputType;
    _max?: InterviewMaxAggregateInputType;
};
export type InterviewGroupByOutputType = {
    id: bigint;
    intervieweeId: bigint;
    result: bigint | null;
    time: bigint;
    committeeId: bigint;
    date: bigint;
    recruitmentId: bigint;
    notes: bigint | null;
    _count: InterviewCountAggregateOutputType | null;
    _avg: InterviewAvgAggregateOutputType | null;
    _sum: InterviewSumAggregateOutputType | null;
    _min: InterviewMinAggregateOutputType | null;
    _max: InterviewMaxAggregateOutputType | null;
};
export type GetInterviewGroupByPayload<T extends InterviewGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<InterviewGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof InterviewGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], InterviewGroupByOutputType[P]> : Prisma.GetScalarType<T[P], InterviewGroupByOutputType[P]>;
}>>;
export type InterviewWhereInput = {
    AND?: Prisma.InterviewWhereInput | Prisma.InterviewWhereInput[];
    OR?: Prisma.InterviewWhereInput[];
    NOT?: Prisma.InterviewWhereInput | Prisma.InterviewWhereInput[];
    id?: Prisma.BigIntFilter<"Interview"> | bigint | number;
    intervieweeId?: Prisma.BigIntFilter<"Interview"> | bigint | number;
    result?: Prisma.BigIntNullableFilter<"Interview"> | bigint | number | null;
    time?: Prisma.BigIntFilter<"Interview"> | bigint | number;
    committeeId?: Prisma.BigIntFilter<"Interview"> | bigint | number;
    date?: Prisma.BigIntFilter<"Interview"> | bigint | number;
    recruitmentId?: Prisma.BigIntFilter<"Interview"> | bigint | number;
    notes?: Prisma.BigIntNullableFilter<"Interview"> | bigint | number | null;
    interviewee?: Prisma.XOR<Prisma.IntervieweeScalarRelationFilter, Prisma.IntervieweeWhereInput>;
    committee?: Prisma.XOR<Prisma.CommitteeScalarRelationFilter, Prisma.CommitteeWhereInput>;
    recruitment?: Prisma.XOR<Prisma.RecruitmentScalarRelationFilter, Prisma.RecruitmentWhereInput>;
    panel?: Prisma.InterviewPanelListRelationFilter;
};
export type InterviewOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    intervieweeId?: Prisma.SortOrder;
    result?: Prisma.SortOrderInput | Prisma.SortOrder;
    time?: Prisma.SortOrder;
    committeeId?: Prisma.SortOrder;
    date?: Prisma.SortOrder;
    recruitmentId?: Prisma.SortOrder;
    notes?: Prisma.SortOrderInput | Prisma.SortOrder;
    interviewee?: Prisma.IntervieweeOrderByWithRelationInput;
    committee?: Prisma.CommitteeOrderByWithRelationInput;
    recruitment?: Prisma.RecruitmentOrderByWithRelationInput;
    panel?: Prisma.InterviewPanelOrderByRelationAggregateInput;
};
export type InterviewWhereUniqueInput = Prisma.AtLeast<{
    id?: bigint | number;
    AND?: Prisma.InterviewWhereInput | Prisma.InterviewWhereInput[];
    OR?: Prisma.InterviewWhereInput[];
    NOT?: Prisma.InterviewWhereInput | Prisma.InterviewWhereInput[];
    intervieweeId?: Prisma.BigIntFilter<"Interview"> | bigint | number;
    result?: Prisma.BigIntNullableFilter<"Interview"> | bigint | number | null;
    time?: Prisma.BigIntFilter<"Interview"> | bigint | number;
    committeeId?: Prisma.BigIntFilter<"Interview"> | bigint | number;
    date?: Prisma.BigIntFilter<"Interview"> | bigint | number;
    recruitmentId?: Prisma.BigIntFilter<"Interview"> | bigint | number;
    notes?: Prisma.BigIntNullableFilter<"Interview"> | bigint | number | null;
    interviewee?: Prisma.XOR<Prisma.IntervieweeScalarRelationFilter, Prisma.IntervieweeWhereInput>;
    committee?: Prisma.XOR<Prisma.CommitteeScalarRelationFilter, Prisma.CommitteeWhereInput>;
    recruitment?: Prisma.XOR<Prisma.RecruitmentScalarRelationFilter, Prisma.RecruitmentWhereInput>;
    panel?: Prisma.InterviewPanelListRelationFilter;
}, "id">;
export type InterviewOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    intervieweeId?: Prisma.SortOrder;
    result?: Prisma.SortOrderInput | Prisma.SortOrder;
    time?: Prisma.SortOrder;
    committeeId?: Prisma.SortOrder;
    date?: Prisma.SortOrder;
    recruitmentId?: Prisma.SortOrder;
    notes?: Prisma.SortOrderInput | Prisma.SortOrder;
    _count?: Prisma.InterviewCountOrderByAggregateInput;
    _avg?: Prisma.InterviewAvgOrderByAggregateInput;
    _max?: Prisma.InterviewMaxOrderByAggregateInput;
    _min?: Prisma.InterviewMinOrderByAggregateInput;
    _sum?: Prisma.InterviewSumOrderByAggregateInput;
};
export type InterviewScalarWhereWithAggregatesInput = {
    AND?: Prisma.InterviewScalarWhereWithAggregatesInput | Prisma.InterviewScalarWhereWithAggregatesInput[];
    OR?: Prisma.InterviewScalarWhereWithAggregatesInput[];
    NOT?: Prisma.InterviewScalarWhereWithAggregatesInput | Prisma.InterviewScalarWhereWithAggregatesInput[];
    id?: Prisma.BigIntWithAggregatesFilter<"Interview"> | bigint | number;
    intervieweeId?: Prisma.BigIntWithAggregatesFilter<"Interview"> | bigint | number;
    result?: Prisma.BigIntNullableWithAggregatesFilter<"Interview"> | bigint | number | null;
    time?: Prisma.BigIntWithAggregatesFilter<"Interview"> | bigint | number;
    committeeId?: Prisma.BigIntWithAggregatesFilter<"Interview"> | bigint | number;
    date?: Prisma.BigIntWithAggregatesFilter<"Interview"> | bigint | number;
    recruitmentId?: Prisma.BigIntWithAggregatesFilter<"Interview"> | bigint | number;
    notes?: Prisma.BigIntNullableWithAggregatesFilter<"Interview"> | bigint | number | null;
};
export type InterviewCreateInput = {
    id?: bigint | number;
    result?: bigint | number | null;
    time: bigint | number;
    date: bigint | number;
    notes?: bigint | number | null;
    interviewee: Prisma.IntervieweeCreateNestedOneWithoutInterviewsInput;
    committee: Prisma.CommitteeCreateNestedOneWithoutInterviewsInput;
    recruitment: Prisma.RecruitmentCreateNestedOneWithoutInterviewsInput;
    panel?: Prisma.InterviewPanelCreateNestedManyWithoutInterviewInput;
};
export type InterviewUncheckedCreateInput = {
    id?: bigint | number;
    intervieweeId: bigint | number;
    result?: bigint | number | null;
    time: bigint | number;
    committeeId: bigint | number;
    date: bigint | number;
    recruitmentId: bigint | number;
    notes?: bigint | number | null;
    panel?: Prisma.InterviewPanelUncheckedCreateNestedManyWithoutInterviewInput;
};
export type InterviewUpdateInput = {
    id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    result?: Prisma.NullableBigIntFieldUpdateOperationsInput | bigint | number | null;
    time?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    date?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    notes?: Prisma.NullableBigIntFieldUpdateOperationsInput | bigint | number | null;
    interviewee?: Prisma.IntervieweeUpdateOneRequiredWithoutInterviewsNestedInput;
    committee?: Prisma.CommitteeUpdateOneRequiredWithoutInterviewsNestedInput;
    recruitment?: Prisma.RecruitmentUpdateOneRequiredWithoutInterviewsNestedInput;
    panel?: Prisma.InterviewPanelUpdateManyWithoutInterviewNestedInput;
};
export type InterviewUncheckedUpdateInput = {
    id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    intervieweeId?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    result?: Prisma.NullableBigIntFieldUpdateOperationsInput | bigint | number | null;
    time?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    committeeId?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    date?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    recruitmentId?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    notes?: Prisma.NullableBigIntFieldUpdateOperationsInput | bigint | number | null;
    panel?: Prisma.InterviewPanelUncheckedUpdateManyWithoutInterviewNestedInput;
};
export type InterviewCreateManyInput = {
    id?: bigint | number;
    intervieweeId: bigint | number;
    result?: bigint | number | null;
    time: bigint | number;
    committeeId: bigint | number;
    date: bigint | number;
    recruitmentId: bigint | number;
    notes?: bigint | number | null;
};
export type InterviewUpdateManyMutationInput = {
    id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    result?: Prisma.NullableBigIntFieldUpdateOperationsInput | bigint | number | null;
    time?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    date?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    notes?: Prisma.NullableBigIntFieldUpdateOperationsInput | bigint | number | null;
};
export type InterviewUncheckedUpdateManyInput = {
    id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    intervieweeId?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    result?: Prisma.NullableBigIntFieldUpdateOperationsInput | bigint | number | null;
    time?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    committeeId?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    date?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    recruitmentId?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    notes?: Prisma.NullableBigIntFieldUpdateOperationsInput | bigint | number | null;
};
export type InterviewListRelationFilter = {
    every?: Prisma.InterviewWhereInput;
    some?: Prisma.InterviewWhereInput;
    none?: Prisma.InterviewWhereInput;
};
export type InterviewOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type InterviewCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    intervieweeId?: Prisma.SortOrder;
    result?: Prisma.SortOrder;
    time?: Prisma.SortOrder;
    committeeId?: Prisma.SortOrder;
    date?: Prisma.SortOrder;
    recruitmentId?: Prisma.SortOrder;
    notes?: Prisma.SortOrder;
};
export type InterviewAvgOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    intervieweeId?: Prisma.SortOrder;
    result?: Prisma.SortOrder;
    time?: Prisma.SortOrder;
    committeeId?: Prisma.SortOrder;
    date?: Prisma.SortOrder;
    recruitmentId?: Prisma.SortOrder;
    notes?: Prisma.SortOrder;
};
export type InterviewMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    intervieweeId?: Prisma.SortOrder;
    result?: Prisma.SortOrder;
    time?: Prisma.SortOrder;
    committeeId?: Prisma.SortOrder;
    date?: Prisma.SortOrder;
    recruitmentId?: Prisma.SortOrder;
    notes?: Prisma.SortOrder;
};
export type InterviewMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    intervieweeId?: Prisma.SortOrder;
    result?: Prisma.SortOrder;
    time?: Prisma.SortOrder;
    committeeId?: Prisma.SortOrder;
    date?: Prisma.SortOrder;
    recruitmentId?: Prisma.SortOrder;
    notes?: Prisma.SortOrder;
};
export type InterviewSumOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    intervieweeId?: Prisma.SortOrder;
    result?: Prisma.SortOrder;
    time?: Prisma.SortOrder;
    committeeId?: Prisma.SortOrder;
    date?: Prisma.SortOrder;
    recruitmentId?: Prisma.SortOrder;
    notes?: Prisma.SortOrder;
};
export type InterviewScalarRelationFilter = {
    is?: Prisma.InterviewWhereInput;
    isNot?: Prisma.InterviewWhereInput;
};
export type InterviewCreateNestedManyWithoutCommitteeInput = {
    create?: Prisma.XOR<Prisma.InterviewCreateWithoutCommitteeInput, Prisma.InterviewUncheckedCreateWithoutCommitteeInput> | Prisma.InterviewCreateWithoutCommitteeInput[] | Prisma.InterviewUncheckedCreateWithoutCommitteeInput[];
    connectOrCreate?: Prisma.InterviewCreateOrConnectWithoutCommitteeInput | Prisma.InterviewCreateOrConnectWithoutCommitteeInput[];
    createMany?: Prisma.InterviewCreateManyCommitteeInputEnvelope;
    connect?: Prisma.InterviewWhereUniqueInput | Prisma.InterviewWhereUniqueInput[];
};
export type InterviewUncheckedCreateNestedManyWithoutCommitteeInput = {
    create?: Prisma.XOR<Prisma.InterviewCreateWithoutCommitteeInput, Prisma.InterviewUncheckedCreateWithoutCommitteeInput> | Prisma.InterviewCreateWithoutCommitteeInput[] | Prisma.InterviewUncheckedCreateWithoutCommitteeInput[];
    connectOrCreate?: Prisma.InterviewCreateOrConnectWithoutCommitteeInput | Prisma.InterviewCreateOrConnectWithoutCommitteeInput[];
    createMany?: Prisma.InterviewCreateManyCommitteeInputEnvelope;
    connect?: Prisma.InterviewWhereUniqueInput | Prisma.InterviewWhereUniqueInput[];
};
export type InterviewUpdateManyWithoutCommitteeNestedInput = {
    create?: Prisma.XOR<Prisma.InterviewCreateWithoutCommitteeInput, Prisma.InterviewUncheckedCreateWithoutCommitteeInput> | Prisma.InterviewCreateWithoutCommitteeInput[] | Prisma.InterviewUncheckedCreateWithoutCommitteeInput[];
    connectOrCreate?: Prisma.InterviewCreateOrConnectWithoutCommitteeInput | Prisma.InterviewCreateOrConnectWithoutCommitteeInput[];
    upsert?: Prisma.InterviewUpsertWithWhereUniqueWithoutCommitteeInput | Prisma.InterviewUpsertWithWhereUniqueWithoutCommitteeInput[];
    createMany?: Prisma.InterviewCreateManyCommitteeInputEnvelope;
    set?: Prisma.InterviewWhereUniqueInput | Prisma.InterviewWhereUniqueInput[];
    disconnect?: Prisma.InterviewWhereUniqueInput | Prisma.InterviewWhereUniqueInput[];
    delete?: Prisma.InterviewWhereUniqueInput | Prisma.InterviewWhereUniqueInput[];
    connect?: Prisma.InterviewWhereUniqueInput | Prisma.InterviewWhereUniqueInput[];
    update?: Prisma.InterviewUpdateWithWhereUniqueWithoutCommitteeInput | Prisma.InterviewUpdateWithWhereUniqueWithoutCommitteeInput[];
    updateMany?: Prisma.InterviewUpdateManyWithWhereWithoutCommitteeInput | Prisma.InterviewUpdateManyWithWhereWithoutCommitteeInput[];
    deleteMany?: Prisma.InterviewScalarWhereInput | Prisma.InterviewScalarWhereInput[];
};
export type InterviewUncheckedUpdateManyWithoutCommitteeNestedInput = {
    create?: Prisma.XOR<Prisma.InterviewCreateWithoutCommitteeInput, Prisma.InterviewUncheckedCreateWithoutCommitteeInput> | Prisma.InterviewCreateWithoutCommitteeInput[] | Prisma.InterviewUncheckedCreateWithoutCommitteeInput[];
    connectOrCreate?: Prisma.InterviewCreateOrConnectWithoutCommitteeInput | Prisma.InterviewCreateOrConnectWithoutCommitteeInput[];
    upsert?: Prisma.InterviewUpsertWithWhereUniqueWithoutCommitteeInput | Prisma.InterviewUpsertWithWhereUniqueWithoutCommitteeInput[];
    createMany?: Prisma.InterviewCreateManyCommitteeInputEnvelope;
    set?: Prisma.InterviewWhereUniqueInput | Prisma.InterviewWhereUniqueInput[];
    disconnect?: Prisma.InterviewWhereUniqueInput | Prisma.InterviewWhereUniqueInput[];
    delete?: Prisma.InterviewWhereUniqueInput | Prisma.InterviewWhereUniqueInput[];
    connect?: Prisma.InterviewWhereUniqueInput | Prisma.InterviewWhereUniqueInput[];
    update?: Prisma.InterviewUpdateWithWhereUniqueWithoutCommitteeInput | Prisma.InterviewUpdateWithWhereUniqueWithoutCommitteeInput[];
    updateMany?: Prisma.InterviewUpdateManyWithWhereWithoutCommitteeInput | Prisma.InterviewUpdateManyWithWhereWithoutCommitteeInput[];
    deleteMany?: Prisma.InterviewScalarWhereInput | Prisma.InterviewScalarWhereInput[];
};
export type InterviewCreateNestedManyWithoutIntervieweeInput = {
    create?: Prisma.XOR<Prisma.InterviewCreateWithoutIntervieweeInput, Prisma.InterviewUncheckedCreateWithoutIntervieweeInput> | Prisma.InterviewCreateWithoutIntervieweeInput[] | Prisma.InterviewUncheckedCreateWithoutIntervieweeInput[];
    connectOrCreate?: Prisma.InterviewCreateOrConnectWithoutIntervieweeInput | Prisma.InterviewCreateOrConnectWithoutIntervieweeInput[];
    createMany?: Prisma.InterviewCreateManyIntervieweeInputEnvelope;
    connect?: Prisma.InterviewWhereUniqueInput | Prisma.InterviewWhereUniqueInput[];
};
export type InterviewUncheckedCreateNestedManyWithoutIntervieweeInput = {
    create?: Prisma.XOR<Prisma.InterviewCreateWithoutIntervieweeInput, Prisma.InterviewUncheckedCreateWithoutIntervieweeInput> | Prisma.InterviewCreateWithoutIntervieweeInput[] | Prisma.InterviewUncheckedCreateWithoutIntervieweeInput[];
    connectOrCreate?: Prisma.InterviewCreateOrConnectWithoutIntervieweeInput | Prisma.InterviewCreateOrConnectWithoutIntervieweeInput[];
    createMany?: Prisma.InterviewCreateManyIntervieweeInputEnvelope;
    connect?: Prisma.InterviewWhereUniqueInput | Prisma.InterviewWhereUniqueInput[];
};
export type InterviewUpdateManyWithoutIntervieweeNestedInput = {
    create?: Prisma.XOR<Prisma.InterviewCreateWithoutIntervieweeInput, Prisma.InterviewUncheckedCreateWithoutIntervieweeInput> | Prisma.InterviewCreateWithoutIntervieweeInput[] | Prisma.InterviewUncheckedCreateWithoutIntervieweeInput[];
    connectOrCreate?: Prisma.InterviewCreateOrConnectWithoutIntervieweeInput | Prisma.InterviewCreateOrConnectWithoutIntervieweeInput[];
    upsert?: Prisma.InterviewUpsertWithWhereUniqueWithoutIntervieweeInput | Prisma.InterviewUpsertWithWhereUniqueWithoutIntervieweeInput[];
    createMany?: Prisma.InterviewCreateManyIntervieweeInputEnvelope;
    set?: Prisma.InterviewWhereUniqueInput | Prisma.InterviewWhereUniqueInput[];
    disconnect?: Prisma.InterviewWhereUniqueInput | Prisma.InterviewWhereUniqueInput[];
    delete?: Prisma.InterviewWhereUniqueInput | Prisma.InterviewWhereUniqueInput[];
    connect?: Prisma.InterviewWhereUniqueInput | Prisma.InterviewWhereUniqueInput[];
    update?: Prisma.InterviewUpdateWithWhereUniqueWithoutIntervieweeInput | Prisma.InterviewUpdateWithWhereUniqueWithoutIntervieweeInput[];
    updateMany?: Prisma.InterviewUpdateManyWithWhereWithoutIntervieweeInput | Prisma.InterviewUpdateManyWithWhereWithoutIntervieweeInput[];
    deleteMany?: Prisma.InterviewScalarWhereInput | Prisma.InterviewScalarWhereInput[];
};
export type InterviewUncheckedUpdateManyWithoutIntervieweeNestedInput = {
    create?: Prisma.XOR<Prisma.InterviewCreateWithoutIntervieweeInput, Prisma.InterviewUncheckedCreateWithoutIntervieweeInput> | Prisma.InterviewCreateWithoutIntervieweeInput[] | Prisma.InterviewUncheckedCreateWithoutIntervieweeInput[];
    connectOrCreate?: Prisma.InterviewCreateOrConnectWithoutIntervieweeInput | Prisma.InterviewCreateOrConnectWithoutIntervieweeInput[];
    upsert?: Prisma.InterviewUpsertWithWhereUniqueWithoutIntervieweeInput | Prisma.InterviewUpsertWithWhereUniqueWithoutIntervieweeInput[];
    createMany?: Prisma.InterviewCreateManyIntervieweeInputEnvelope;
    set?: Prisma.InterviewWhereUniqueInput | Prisma.InterviewWhereUniqueInput[];
    disconnect?: Prisma.InterviewWhereUniqueInput | Prisma.InterviewWhereUniqueInput[];
    delete?: Prisma.InterviewWhereUniqueInput | Prisma.InterviewWhereUniqueInput[];
    connect?: Prisma.InterviewWhereUniqueInput | Prisma.InterviewWhereUniqueInput[];
    update?: Prisma.InterviewUpdateWithWhereUniqueWithoutIntervieweeInput | Prisma.InterviewUpdateWithWhereUniqueWithoutIntervieweeInput[];
    updateMany?: Prisma.InterviewUpdateManyWithWhereWithoutIntervieweeInput | Prisma.InterviewUpdateManyWithWhereWithoutIntervieweeInput[];
    deleteMany?: Prisma.InterviewScalarWhereInput | Prisma.InterviewScalarWhereInput[];
};
export type InterviewCreateNestedManyWithoutRecruitmentInput = {
    create?: Prisma.XOR<Prisma.InterviewCreateWithoutRecruitmentInput, Prisma.InterviewUncheckedCreateWithoutRecruitmentInput> | Prisma.InterviewCreateWithoutRecruitmentInput[] | Prisma.InterviewUncheckedCreateWithoutRecruitmentInput[];
    connectOrCreate?: Prisma.InterviewCreateOrConnectWithoutRecruitmentInput | Prisma.InterviewCreateOrConnectWithoutRecruitmentInput[];
    createMany?: Prisma.InterviewCreateManyRecruitmentInputEnvelope;
    connect?: Prisma.InterviewWhereUniqueInput | Prisma.InterviewWhereUniqueInput[];
};
export type InterviewUncheckedCreateNestedManyWithoutRecruitmentInput = {
    create?: Prisma.XOR<Prisma.InterviewCreateWithoutRecruitmentInput, Prisma.InterviewUncheckedCreateWithoutRecruitmentInput> | Prisma.InterviewCreateWithoutRecruitmentInput[] | Prisma.InterviewUncheckedCreateWithoutRecruitmentInput[];
    connectOrCreate?: Prisma.InterviewCreateOrConnectWithoutRecruitmentInput | Prisma.InterviewCreateOrConnectWithoutRecruitmentInput[];
    createMany?: Prisma.InterviewCreateManyRecruitmentInputEnvelope;
    connect?: Prisma.InterviewWhereUniqueInput | Prisma.InterviewWhereUniqueInput[];
};
export type InterviewUpdateManyWithoutRecruitmentNestedInput = {
    create?: Prisma.XOR<Prisma.InterviewCreateWithoutRecruitmentInput, Prisma.InterviewUncheckedCreateWithoutRecruitmentInput> | Prisma.InterviewCreateWithoutRecruitmentInput[] | Prisma.InterviewUncheckedCreateWithoutRecruitmentInput[];
    connectOrCreate?: Prisma.InterviewCreateOrConnectWithoutRecruitmentInput | Prisma.InterviewCreateOrConnectWithoutRecruitmentInput[];
    upsert?: Prisma.InterviewUpsertWithWhereUniqueWithoutRecruitmentInput | Prisma.InterviewUpsertWithWhereUniqueWithoutRecruitmentInput[];
    createMany?: Prisma.InterviewCreateManyRecruitmentInputEnvelope;
    set?: Prisma.InterviewWhereUniqueInput | Prisma.InterviewWhereUniqueInput[];
    disconnect?: Prisma.InterviewWhereUniqueInput | Prisma.InterviewWhereUniqueInput[];
    delete?: Prisma.InterviewWhereUniqueInput | Prisma.InterviewWhereUniqueInput[];
    connect?: Prisma.InterviewWhereUniqueInput | Prisma.InterviewWhereUniqueInput[];
    update?: Prisma.InterviewUpdateWithWhereUniqueWithoutRecruitmentInput | Prisma.InterviewUpdateWithWhereUniqueWithoutRecruitmentInput[];
    updateMany?: Prisma.InterviewUpdateManyWithWhereWithoutRecruitmentInput | Prisma.InterviewUpdateManyWithWhereWithoutRecruitmentInput[];
    deleteMany?: Prisma.InterviewScalarWhereInput | Prisma.InterviewScalarWhereInput[];
};
export type InterviewUncheckedUpdateManyWithoutRecruitmentNestedInput = {
    create?: Prisma.XOR<Prisma.InterviewCreateWithoutRecruitmentInput, Prisma.InterviewUncheckedCreateWithoutRecruitmentInput> | Prisma.InterviewCreateWithoutRecruitmentInput[] | Prisma.InterviewUncheckedCreateWithoutRecruitmentInput[];
    connectOrCreate?: Prisma.InterviewCreateOrConnectWithoutRecruitmentInput | Prisma.InterviewCreateOrConnectWithoutRecruitmentInput[];
    upsert?: Prisma.InterviewUpsertWithWhereUniqueWithoutRecruitmentInput | Prisma.InterviewUpsertWithWhereUniqueWithoutRecruitmentInput[];
    createMany?: Prisma.InterviewCreateManyRecruitmentInputEnvelope;
    set?: Prisma.InterviewWhereUniqueInput | Prisma.InterviewWhereUniqueInput[];
    disconnect?: Prisma.InterviewWhereUniqueInput | Prisma.InterviewWhereUniqueInput[];
    delete?: Prisma.InterviewWhereUniqueInput | Prisma.InterviewWhereUniqueInput[];
    connect?: Prisma.InterviewWhereUniqueInput | Prisma.InterviewWhereUniqueInput[];
    update?: Prisma.InterviewUpdateWithWhereUniqueWithoutRecruitmentInput | Prisma.InterviewUpdateWithWhereUniqueWithoutRecruitmentInput[];
    updateMany?: Prisma.InterviewUpdateManyWithWhereWithoutRecruitmentInput | Prisma.InterviewUpdateManyWithWhereWithoutRecruitmentInput[];
    deleteMany?: Prisma.InterviewScalarWhereInput | Prisma.InterviewScalarWhereInput[];
};
export type InterviewCreateNestedOneWithoutPanelInput = {
    create?: Prisma.XOR<Prisma.InterviewCreateWithoutPanelInput, Prisma.InterviewUncheckedCreateWithoutPanelInput>;
    connectOrCreate?: Prisma.InterviewCreateOrConnectWithoutPanelInput;
    connect?: Prisma.InterviewWhereUniqueInput;
};
export type InterviewUpdateOneRequiredWithoutPanelNestedInput = {
    create?: Prisma.XOR<Prisma.InterviewCreateWithoutPanelInput, Prisma.InterviewUncheckedCreateWithoutPanelInput>;
    connectOrCreate?: Prisma.InterviewCreateOrConnectWithoutPanelInput;
    upsert?: Prisma.InterviewUpsertWithoutPanelInput;
    connect?: Prisma.InterviewWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.InterviewUpdateToOneWithWhereWithoutPanelInput, Prisma.InterviewUpdateWithoutPanelInput>, Prisma.InterviewUncheckedUpdateWithoutPanelInput>;
};
export type InterviewCreateWithoutCommitteeInput = {
    id?: bigint | number;
    result?: bigint | number | null;
    time: bigint | number;
    date: bigint | number;
    notes?: bigint | number | null;
    interviewee: Prisma.IntervieweeCreateNestedOneWithoutInterviewsInput;
    recruitment: Prisma.RecruitmentCreateNestedOneWithoutInterviewsInput;
    panel?: Prisma.InterviewPanelCreateNestedManyWithoutInterviewInput;
};
export type InterviewUncheckedCreateWithoutCommitteeInput = {
    id?: bigint | number;
    intervieweeId: bigint | number;
    result?: bigint | number | null;
    time: bigint | number;
    date: bigint | number;
    recruitmentId: bigint | number;
    notes?: bigint | number | null;
    panel?: Prisma.InterviewPanelUncheckedCreateNestedManyWithoutInterviewInput;
};
export type InterviewCreateOrConnectWithoutCommitteeInput = {
    where: Prisma.InterviewWhereUniqueInput;
    create: Prisma.XOR<Prisma.InterviewCreateWithoutCommitteeInput, Prisma.InterviewUncheckedCreateWithoutCommitteeInput>;
};
export type InterviewCreateManyCommitteeInputEnvelope = {
    data: Prisma.InterviewCreateManyCommitteeInput | Prisma.InterviewCreateManyCommitteeInput[];
    skipDuplicates?: boolean;
};
export type InterviewUpsertWithWhereUniqueWithoutCommitteeInput = {
    where: Prisma.InterviewWhereUniqueInput;
    update: Prisma.XOR<Prisma.InterviewUpdateWithoutCommitteeInput, Prisma.InterviewUncheckedUpdateWithoutCommitteeInput>;
    create: Prisma.XOR<Prisma.InterviewCreateWithoutCommitteeInput, Prisma.InterviewUncheckedCreateWithoutCommitteeInput>;
};
export type InterviewUpdateWithWhereUniqueWithoutCommitteeInput = {
    where: Prisma.InterviewWhereUniqueInput;
    data: Prisma.XOR<Prisma.InterviewUpdateWithoutCommitteeInput, Prisma.InterviewUncheckedUpdateWithoutCommitteeInput>;
};
export type InterviewUpdateManyWithWhereWithoutCommitteeInput = {
    where: Prisma.InterviewScalarWhereInput;
    data: Prisma.XOR<Prisma.InterviewUpdateManyMutationInput, Prisma.InterviewUncheckedUpdateManyWithoutCommitteeInput>;
};
export type InterviewScalarWhereInput = {
    AND?: Prisma.InterviewScalarWhereInput | Prisma.InterviewScalarWhereInput[];
    OR?: Prisma.InterviewScalarWhereInput[];
    NOT?: Prisma.InterviewScalarWhereInput | Prisma.InterviewScalarWhereInput[];
    id?: Prisma.BigIntFilter<"Interview"> | bigint | number;
    intervieweeId?: Prisma.BigIntFilter<"Interview"> | bigint | number;
    result?: Prisma.BigIntNullableFilter<"Interview"> | bigint | number | null;
    time?: Prisma.BigIntFilter<"Interview"> | bigint | number;
    committeeId?: Prisma.BigIntFilter<"Interview"> | bigint | number;
    date?: Prisma.BigIntFilter<"Interview"> | bigint | number;
    recruitmentId?: Prisma.BigIntFilter<"Interview"> | bigint | number;
    notes?: Prisma.BigIntNullableFilter<"Interview"> | bigint | number | null;
};
export type InterviewCreateWithoutIntervieweeInput = {
    id?: bigint | number;
    result?: bigint | number | null;
    time: bigint | number;
    date: bigint | number;
    notes?: bigint | number | null;
    committee: Prisma.CommitteeCreateNestedOneWithoutInterviewsInput;
    recruitment: Prisma.RecruitmentCreateNestedOneWithoutInterviewsInput;
    panel?: Prisma.InterviewPanelCreateNestedManyWithoutInterviewInput;
};
export type InterviewUncheckedCreateWithoutIntervieweeInput = {
    id?: bigint | number;
    result?: bigint | number | null;
    time: bigint | number;
    committeeId: bigint | number;
    date: bigint | number;
    recruitmentId: bigint | number;
    notes?: bigint | number | null;
    panel?: Prisma.InterviewPanelUncheckedCreateNestedManyWithoutInterviewInput;
};
export type InterviewCreateOrConnectWithoutIntervieweeInput = {
    where: Prisma.InterviewWhereUniqueInput;
    create: Prisma.XOR<Prisma.InterviewCreateWithoutIntervieweeInput, Prisma.InterviewUncheckedCreateWithoutIntervieweeInput>;
};
export type InterviewCreateManyIntervieweeInputEnvelope = {
    data: Prisma.InterviewCreateManyIntervieweeInput | Prisma.InterviewCreateManyIntervieweeInput[];
    skipDuplicates?: boolean;
};
export type InterviewUpsertWithWhereUniqueWithoutIntervieweeInput = {
    where: Prisma.InterviewWhereUniqueInput;
    update: Prisma.XOR<Prisma.InterviewUpdateWithoutIntervieweeInput, Prisma.InterviewUncheckedUpdateWithoutIntervieweeInput>;
    create: Prisma.XOR<Prisma.InterviewCreateWithoutIntervieweeInput, Prisma.InterviewUncheckedCreateWithoutIntervieweeInput>;
};
export type InterviewUpdateWithWhereUniqueWithoutIntervieweeInput = {
    where: Prisma.InterviewWhereUniqueInput;
    data: Prisma.XOR<Prisma.InterviewUpdateWithoutIntervieweeInput, Prisma.InterviewUncheckedUpdateWithoutIntervieweeInput>;
};
export type InterviewUpdateManyWithWhereWithoutIntervieweeInput = {
    where: Prisma.InterviewScalarWhereInput;
    data: Prisma.XOR<Prisma.InterviewUpdateManyMutationInput, Prisma.InterviewUncheckedUpdateManyWithoutIntervieweeInput>;
};
export type InterviewCreateWithoutRecruitmentInput = {
    id?: bigint | number;
    result?: bigint | number | null;
    time: bigint | number;
    date: bigint | number;
    notes?: bigint | number | null;
    interviewee: Prisma.IntervieweeCreateNestedOneWithoutInterviewsInput;
    committee: Prisma.CommitteeCreateNestedOneWithoutInterviewsInput;
    panel?: Prisma.InterviewPanelCreateNestedManyWithoutInterviewInput;
};
export type InterviewUncheckedCreateWithoutRecruitmentInput = {
    id?: bigint | number;
    intervieweeId: bigint | number;
    result?: bigint | number | null;
    time: bigint | number;
    committeeId: bigint | number;
    date: bigint | number;
    notes?: bigint | number | null;
    panel?: Prisma.InterviewPanelUncheckedCreateNestedManyWithoutInterviewInput;
};
export type InterviewCreateOrConnectWithoutRecruitmentInput = {
    where: Prisma.InterviewWhereUniqueInput;
    create: Prisma.XOR<Prisma.InterviewCreateWithoutRecruitmentInput, Prisma.InterviewUncheckedCreateWithoutRecruitmentInput>;
};
export type InterviewCreateManyRecruitmentInputEnvelope = {
    data: Prisma.InterviewCreateManyRecruitmentInput | Prisma.InterviewCreateManyRecruitmentInput[];
    skipDuplicates?: boolean;
};
export type InterviewUpsertWithWhereUniqueWithoutRecruitmentInput = {
    where: Prisma.InterviewWhereUniqueInput;
    update: Prisma.XOR<Prisma.InterviewUpdateWithoutRecruitmentInput, Prisma.InterviewUncheckedUpdateWithoutRecruitmentInput>;
    create: Prisma.XOR<Prisma.InterviewCreateWithoutRecruitmentInput, Prisma.InterviewUncheckedCreateWithoutRecruitmentInput>;
};
export type InterviewUpdateWithWhereUniqueWithoutRecruitmentInput = {
    where: Prisma.InterviewWhereUniqueInput;
    data: Prisma.XOR<Prisma.InterviewUpdateWithoutRecruitmentInput, Prisma.InterviewUncheckedUpdateWithoutRecruitmentInput>;
};
export type InterviewUpdateManyWithWhereWithoutRecruitmentInput = {
    where: Prisma.InterviewScalarWhereInput;
    data: Prisma.XOR<Prisma.InterviewUpdateManyMutationInput, Prisma.InterviewUncheckedUpdateManyWithoutRecruitmentInput>;
};
export type InterviewCreateWithoutPanelInput = {
    id?: bigint | number;
    result?: bigint | number | null;
    time: bigint | number;
    date: bigint | number;
    notes?: bigint | number | null;
    interviewee: Prisma.IntervieweeCreateNestedOneWithoutInterviewsInput;
    committee: Prisma.CommitteeCreateNestedOneWithoutInterviewsInput;
    recruitment: Prisma.RecruitmentCreateNestedOneWithoutInterviewsInput;
};
export type InterviewUncheckedCreateWithoutPanelInput = {
    id?: bigint | number;
    intervieweeId: bigint | number;
    result?: bigint | number | null;
    time: bigint | number;
    committeeId: bigint | number;
    date: bigint | number;
    recruitmentId: bigint | number;
    notes?: bigint | number | null;
};
export type InterviewCreateOrConnectWithoutPanelInput = {
    where: Prisma.InterviewWhereUniqueInput;
    create: Prisma.XOR<Prisma.InterviewCreateWithoutPanelInput, Prisma.InterviewUncheckedCreateWithoutPanelInput>;
};
export type InterviewUpsertWithoutPanelInput = {
    update: Prisma.XOR<Prisma.InterviewUpdateWithoutPanelInput, Prisma.InterviewUncheckedUpdateWithoutPanelInput>;
    create: Prisma.XOR<Prisma.InterviewCreateWithoutPanelInput, Prisma.InterviewUncheckedCreateWithoutPanelInput>;
    where?: Prisma.InterviewWhereInput;
};
export type InterviewUpdateToOneWithWhereWithoutPanelInput = {
    where?: Prisma.InterviewWhereInput;
    data: Prisma.XOR<Prisma.InterviewUpdateWithoutPanelInput, Prisma.InterviewUncheckedUpdateWithoutPanelInput>;
};
export type InterviewUpdateWithoutPanelInput = {
    id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    result?: Prisma.NullableBigIntFieldUpdateOperationsInput | bigint | number | null;
    time?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    date?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    notes?: Prisma.NullableBigIntFieldUpdateOperationsInput | bigint | number | null;
    interviewee?: Prisma.IntervieweeUpdateOneRequiredWithoutInterviewsNestedInput;
    committee?: Prisma.CommitteeUpdateOneRequiredWithoutInterviewsNestedInput;
    recruitment?: Prisma.RecruitmentUpdateOneRequiredWithoutInterviewsNestedInput;
};
export type InterviewUncheckedUpdateWithoutPanelInput = {
    id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    intervieweeId?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    result?: Prisma.NullableBigIntFieldUpdateOperationsInput | bigint | number | null;
    time?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    committeeId?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    date?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    recruitmentId?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    notes?: Prisma.NullableBigIntFieldUpdateOperationsInput | bigint | number | null;
};
export type InterviewCreateManyCommitteeInput = {
    id?: bigint | number;
    intervieweeId: bigint | number;
    result?: bigint | number | null;
    time: bigint | number;
    date: bigint | number;
    recruitmentId: bigint | number;
    notes?: bigint | number | null;
};
export type InterviewUpdateWithoutCommitteeInput = {
    id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    result?: Prisma.NullableBigIntFieldUpdateOperationsInput | bigint | number | null;
    time?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    date?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    notes?: Prisma.NullableBigIntFieldUpdateOperationsInput | bigint | number | null;
    interviewee?: Prisma.IntervieweeUpdateOneRequiredWithoutInterviewsNestedInput;
    recruitment?: Prisma.RecruitmentUpdateOneRequiredWithoutInterviewsNestedInput;
    panel?: Prisma.InterviewPanelUpdateManyWithoutInterviewNestedInput;
};
export type InterviewUncheckedUpdateWithoutCommitteeInput = {
    id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    intervieweeId?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    result?: Prisma.NullableBigIntFieldUpdateOperationsInput | bigint | number | null;
    time?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    date?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    recruitmentId?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    notes?: Prisma.NullableBigIntFieldUpdateOperationsInput | bigint | number | null;
    panel?: Prisma.InterviewPanelUncheckedUpdateManyWithoutInterviewNestedInput;
};
export type InterviewUncheckedUpdateManyWithoutCommitteeInput = {
    id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    intervieweeId?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    result?: Prisma.NullableBigIntFieldUpdateOperationsInput | bigint | number | null;
    time?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    date?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    recruitmentId?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    notes?: Prisma.NullableBigIntFieldUpdateOperationsInput | bigint | number | null;
};
export type InterviewCreateManyIntervieweeInput = {
    id?: bigint | number;
    result?: bigint | number | null;
    time: bigint | number;
    committeeId: bigint | number;
    date: bigint | number;
    recruitmentId: bigint | number;
    notes?: bigint | number | null;
};
export type InterviewUpdateWithoutIntervieweeInput = {
    id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    result?: Prisma.NullableBigIntFieldUpdateOperationsInput | bigint | number | null;
    time?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    date?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    notes?: Prisma.NullableBigIntFieldUpdateOperationsInput | bigint | number | null;
    committee?: Prisma.CommitteeUpdateOneRequiredWithoutInterviewsNestedInput;
    recruitment?: Prisma.RecruitmentUpdateOneRequiredWithoutInterviewsNestedInput;
    panel?: Prisma.InterviewPanelUpdateManyWithoutInterviewNestedInput;
};
export type InterviewUncheckedUpdateWithoutIntervieweeInput = {
    id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    result?: Prisma.NullableBigIntFieldUpdateOperationsInput | bigint | number | null;
    time?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    committeeId?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    date?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    recruitmentId?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    notes?: Prisma.NullableBigIntFieldUpdateOperationsInput | bigint | number | null;
    panel?: Prisma.InterviewPanelUncheckedUpdateManyWithoutInterviewNestedInput;
};
export type InterviewUncheckedUpdateManyWithoutIntervieweeInput = {
    id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    result?: Prisma.NullableBigIntFieldUpdateOperationsInput | bigint | number | null;
    time?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    committeeId?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    date?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    recruitmentId?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    notes?: Prisma.NullableBigIntFieldUpdateOperationsInput | bigint | number | null;
};
export type InterviewCreateManyRecruitmentInput = {
    id?: bigint | number;
    intervieweeId: bigint | number;
    result?: bigint | number | null;
    time: bigint | number;
    committeeId: bigint | number;
    date: bigint | number;
    notes?: bigint | number | null;
};
export type InterviewUpdateWithoutRecruitmentInput = {
    id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    result?: Prisma.NullableBigIntFieldUpdateOperationsInput | bigint | number | null;
    time?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    date?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    notes?: Prisma.NullableBigIntFieldUpdateOperationsInput | bigint | number | null;
    interviewee?: Prisma.IntervieweeUpdateOneRequiredWithoutInterviewsNestedInput;
    committee?: Prisma.CommitteeUpdateOneRequiredWithoutInterviewsNestedInput;
    panel?: Prisma.InterviewPanelUpdateManyWithoutInterviewNestedInput;
};
export type InterviewUncheckedUpdateWithoutRecruitmentInput = {
    id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    intervieweeId?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    result?: Prisma.NullableBigIntFieldUpdateOperationsInput | bigint | number | null;
    time?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    committeeId?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    date?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    notes?: Prisma.NullableBigIntFieldUpdateOperationsInput | bigint | number | null;
    panel?: Prisma.InterviewPanelUncheckedUpdateManyWithoutInterviewNestedInput;
};
export type InterviewUncheckedUpdateManyWithoutRecruitmentInput = {
    id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    intervieweeId?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    result?: Prisma.NullableBigIntFieldUpdateOperationsInput | bigint | number | null;
    time?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    committeeId?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    date?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    notes?: Prisma.NullableBigIntFieldUpdateOperationsInput | bigint | number | null;
};
export type InterviewCountOutputType = {
    panel: number;
};
export type InterviewCountOutputTypeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    panel?: boolean | InterviewCountOutputTypeCountPanelArgs;
};
export type InterviewCountOutputTypeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.InterviewCountOutputTypeSelect<ExtArgs> | null;
};
export type InterviewCountOutputTypeCountPanelArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.InterviewPanelWhereInput;
};
export type InterviewSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    intervieweeId?: boolean;
    result?: boolean;
    time?: boolean;
    committeeId?: boolean;
    date?: boolean;
    recruitmentId?: boolean;
    notes?: boolean;
    interviewee?: boolean | Prisma.IntervieweeDefaultArgs<ExtArgs>;
    committee?: boolean | Prisma.CommitteeDefaultArgs<ExtArgs>;
    recruitment?: boolean | Prisma.RecruitmentDefaultArgs<ExtArgs>;
    panel?: boolean | Prisma.Interview$panelArgs<ExtArgs>;
    _count?: boolean | Prisma.InterviewCountOutputTypeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["interview"]>;
export type InterviewSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    intervieweeId?: boolean;
    result?: boolean;
    time?: boolean;
    committeeId?: boolean;
    date?: boolean;
    recruitmentId?: boolean;
    notes?: boolean;
    interviewee?: boolean | Prisma.IntervieweeDefaultArgs<ExtArgs>;
    committee?: boolean | Prisma.CommitteeDefaultArgs<ExtArgs>;
    recruitment?: boolean | Prisma.RecruitmentDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["interview"]>;
export type InterviewSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    intervieweeId?: boolean;
    result?: boolean;
    time?: boolean;
    committeeId?: boolean;
    date?: boolean;
    recruitmentId?: boolean;
    notes?: boolean;
    interviewee?: boolean | Prisma.IntervieweeDefaultArgs<ExtArgs>;
    committee?: boolean | Prisma.CommitteeDefaultArgs<ExtArgs>;
    recruitment?: boolean | Prisma.RecruitmentDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["interview"]>;
export type InterviewSelectScalar = {
    id?: boolean;
    intervieweeId?: boolean;
    result?: boolean;
    time?: boolean;
    committeeId?: boolean;
    date?: boolean;
    recruitmentId?: boolean;
    notes?: boolean;
};
export type InterviewOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "intervieweeId" | "result" | "time" | "committeeId" | "date" | "recruitmentId" | "notes", ExtArgs["result"]["interview"]>;
export type InterviewInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    interviewee?: boolean | Prisma.IntervieweeDefaultArgs<ExtArgs>;
    committee?: boolean | Prisma.CommitteeDefaultArgs<ExtArgs>;
    recruitment?: boolean | Prisma.RecruitmentDefaultArgs<ExtArgs>;
    panel?: boolean | Prisma.Interview$panelArgs<ExtArgs>;
    _count?: boolean | Prisma.InterviewCountOutputTypeDefaultArgs<ExtArgs>;
};
export type InterviewIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    interviewee?: boolean | Prisma.IntervieweeDefaultArgs<ExtArgs>;
    committee?: boolean | Prisma.CommitteeDefaultArgs<ExtArgs>;
    recruitment?: boolean | Prisma.RecruitmentDefaultArgs<ExtArgs>;
};
export type InterviewIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    interviewee?: boolean | Prisma.IntervieweeDefaultArgs<ExtArgs>;
    committee?: boolean | Prisma.CommitteeDefaultArgs<ExtArgs>;
    recruitment?: boolean | Prisma.RecruitmentDefaultArgs<ExtArgs>;
};
export type $InterviewPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "Interview";
    objects: {
        interviewee: Prisma.$IntervieweePayload<ExtArgs>;
        committee: Prisma.$CommitteePayload<ExtArgs>;
        recruitment: Prisma.$RecruitmentPayload<ExtArgs>;
        panel: Prisma.$InterviewPanelPayload<ExtArgs>[];
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: bigint;
        intervieweeId: bigint;
        result: bigint | null;
        time: bigint;
        committeeId: bigint;
        date: bigint;
        recruitmentId: bigint;
        notes: bigint | null;
    }, ExtArgs["result"]["interview"]>;
    composites: {};
};
export type InterviewGetPayload<S extends boolean | null | undefined | InterviewDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$InterviewPayload, S>;
export type InterviewCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<InterviewFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: InterviewCountAggregateInputType | true;
};
export interface InterviewDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['Interview'];
        meta: {
            name: 'Interview';
        };
    };
    findUnique<T extends InterviewFindUniqueArgs>(args: Prisma.SelectSubset<T, InterviewFindUniqueArgs<ExtArgs>>): Prisma.Prisma__InterviewClient<runtime.Types.Result.GetResult<Prisma.$InterviewPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends InterviewFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, InterviewFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__InterviewClient<runtime.Types.Result.GetResult<Prisma.$InterviewPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends InterviewFindFirstArgs>(args?: Prisma.SelectSubset<T, InterviewFindFirstArgs<ExtArgs>>): Prisma.Prisma__InterviewClient<runtime.Types.Result.GetResult<Prisma.$InterviewPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends InterviewFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, InterviewFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__InterviewClient<runtime.Types.Result.GetResult<Prisma.$InterviewPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends InterviewFindManyArgs>(args?: Prisma.SelectSubset<T, InterviewFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$InterviewPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends InterviewCreateArgs>(args: Prisma.SelectSubset<T, InterviewCreateArgs<ExtArgs>>): Prisma.Prisma__InterviewClient<runtime.Types.Result.GetResult<Prisma.$InterviewPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends InterviewCreateManyArgs>(args?: Prisma.SelectSubset<T, InterviewCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends InterviewCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, InterviewCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$InterviewPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends InterviewDeleteArgs>(args: Prisma.SelectSubset<T, InterviewDeleteArgs<ExtArgs>>): Prisma.Prisma__InterviewClient<runtime.Types.Result.GetResult<Prisma.$InterviewPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends InterviewUpdateArgs>(args: Prisma.SelectSubset<T, InterviewUpdateArgs<ExtArgs>>): Prisma.Prisma__InterviewClient<runtime.Types.Result.GetResult<Prisma.$InterviewPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends InterviewDeleteManyArgs>(args?: Prisma.SelectSubset<T, InterviewDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends InterviewUpdateManyArgs>(args: Prisma.SelectSubset<T, InterviewUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends InterviewUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, InterviewUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$InterviewPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends InterviewUpsertArgs>(args: Prisma.SelectSubset<T, InterviewUpsertArgs<ExtArgs>>): Prisma.Prisma__InterviewClient<runtime.Types.Result.GetResult<Prisma.$InterviewPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends InterviewCountArgs>(args?: Prisma.Subset<T, InterviewCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], InterviewCountAggregateOutputType> : number>;
    aggregate<T extends InterviewAggregateArgs>(args: Prisma.Subset<T, InterviewAggregateArgs>): Prisma.PrismaPromise<GetInterviewAggregateType<T>>;
    groupBy<T extends InterviewGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: InterviewGroupByArgs['orderBy'];
    } : {
        orderBy?: InterviewGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, InterviewGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetInterviewGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: InterviewFieldRefs;
}
export interface Prisma__InterviewClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    interviewee<T extends Prisma.IntervieweeDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.IntervieweeDefaultArgs<ExtArgs>>): Prisma.Prisma__IntervieweeClient<runtime.Types.Result.GetResult<Prisma.$IntervieweePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    committee<T extends Prisma.CommitteeDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.CommitteeDefaultArgs<ExtArgs>>): Prisma.Prisma__CommitteeClient<runtime.Types.Result.GetResult<Prisma.$CommitteePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    recruitment<T extends Prisma.RecruitmentDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.RecruitmentDefaultArgs<ExtArgs>>): Prisma.Prisma__RecruitmentClient<runtime.Types.Result.GetResult<Prisma.$RecruitmentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    panel<T extends Prisma.Interview$panelArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Interview$panelArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$InterviewPanelPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface InterviewFieldRefs {
    readonly id: Prisma.FieldRef<"Interview", 'BigInt'>;
    readonly intervieweeId: Prisma.FieldRef<"Interview", 'BigInt'>;
    readonly result: Prisma.FieldRef<"Interview", 'BigInt'>;
    readonly time: Prisma.FieldRef<"Interview", 'BigInt'>;
    readonly committeeId: Prisma.FieldRef<"Interview", 'BigInt'>;
    readonly date: Prisma.FieldRef<"Interview", 'BigInt'>;
    readonly recruitmentId: Prisma.FieldRef<"Interview", 'BigInt'>;
    readonly notes: Prisma.FieldRef<"Interview", 'BigInt'>;
}
export type InterviewFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.InterviewSelect<ExtArgs> | null;
    omit?: Prisma.InterviewOmit<ExtArgs> | null;
    include?: Prisma.InterviewInclude<ExtArgs> | null;
    where: Prisma.InterviewWhereUniqueInput;
};
export type InterviewFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.InterviewSelect<ExtArgs> | null;
    omit?: Prisma.InterviewOmit<ExtArgs> | null;
    include?: Prisma.InterviewInclude<ExtArgs> | null;
    where: Prisma.InterviewWhereUniqueInput;
};
export type InterviewFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type InterviewFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type InterviewFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type InterviewCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.InterviewSelect<ExtArgs> | null;
    omit?: Prisma.InterviewOmit<ExtArgs> | null;
    include?: Prisma.InterviewInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.InterviewCreateInput, Prisma.InterviewUncheckedCreateInput>;
};
export type InterviewCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.InterviewCreateManyInput | Prisma.InterviewCreateManyInput[];
    skipDuplicates?: boolean;
};
export type InterviewCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.InterviewSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.InterviewOmit<ExtArgs> | null;
    data: Prisma.InterviewCreateManyInput | Prisma.InterviewCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.InterviewIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type InterviewUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.InterviewSelect<ExtArgs> | null;
    omit?: Prisma.InterviewOmit<ExtArgs> | null;
    include?: Prisma.InterviewInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.InterviewUpdateInput, Prisma.InterviewUncheckedUpdateInput>;
    where: Prisma.InterviewWhereUniqueInput;
};
export type InterviewUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.InterviewUpdateManyMutationInput, Prisma.InterviewUncheckedUpdateManyInput>;
    where?: Prisma.InterviewWhereInput;
    limit?: number;
};
export type InterviewUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.InterviewSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.InterviewOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.InterviewUpdateManyMutationInput, Prisma.InterviewUncheckedUpdateManyInput>;
    where?: Prisma.InterviewWhereInput;
    limit?: number;
    include?: Prisma.InterviewIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type InterviewUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.InterviewSelect<ExtArgs> | null;
    omit?: Prisma.InterviewOmit<ExtArgs> | null;
    include?: Prisma.InterviewInclude<ExtArgs> | null;
    where: Prisma.InterviewWhereUniqueInput;
    create: Prisma.XOR<Prisma.InterviewCreateInput, Prisma.InterviewUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.InterviewUpdateInput, Prisma.InterviewUncheckedUpdateInput>;
};
export type InterviewDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.InterviewSelect<ExtArgs> | null;
    omit?: Prisma.InterviewOmit<ExtArgs> | null;
    include?: Prisma.InterviewInclude<ExtArgs> | null;
    where: Prisma.InterviewWhereUniqueInput;
};
export type InterviewDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.InterviewWhereInput;
    limit?: number;
};
export type Interview$panelArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.InterviewPanelSelect<ExtArgs> | null;
    omit?: Prisma.InterviewPanelOmit<ExtArgs> | null;
    include?: Prisma.InterviewPanelInclude<ExtArgs> | null;
    where?: Prisma.InterviewPanelWhereInput;
    orderBy?: Prisma.InterviewPanelOrderByWithRelationInput | Prisma.InterviewPanelOrderByWithRelationInput[];
    cursor?: Prisma.InterviewPanelWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.InterviewPanelScalarFieldEnum | Prisma.InterviewPanelScalarFieldEnum[];
};
export type InterviewDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.InterviewSelect<ExtArgs> | null;
    omit?: Prisma.InterviewOmit<ExtArgs> | null;
    include?: Prisma.InterviewInclude<ExtArgs> | null;
};

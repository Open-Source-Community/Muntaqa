import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
export type InterviewPanelModel = runtime.Types.Result.DefaultSelection<Prisma.$InterviewPanelPayload>;
export type AggregateInterviewPanel = {
    _count: InterviewPanelCountAggregateOutputType | null;
    _avg: InterviewPanelAvgAggregateOutputType | null;
    _sum: InterviewPanelSumAggregateOutputType | null;
    _min: InterviewPanelMinAggregateOutputType | null;
    _max: InterviewPanelMaxAggregateOutputType | null;
};
export type InterviewPanelAvgAggregateOutputType = {
    oscMemberId: number | null;
    interviewId: number | null;
};
export type InterviewPanelSumAggregateOutputType = {
    oscMemberId: bigint | null;
    interviewId: bigint | null;
};
export type InterviewPanelMinAggregateOutputType = {
    oscMemberId: bigint | null;
    interviewId: bigint | null;
};
export type InterviewPanelMaxAggregateOutputType = {
    oscMemberId: bigint | null;
    interviewId: bigint | null;
};
export type InterviewPanelCountAggregateOutputType = {
    oscMemberId: number;
    interviewId: number;
    _all: number;
};
export type InterviewPanelAvgAggregateInputType = {
    oscMemberId?: true;
    interviewId?: true;
};
export type InterviewPanelSumAggregateInputType = {
    oscMemberId?: true;
    interviewId?: true;
};
export type InterviewPanelMinAggregateInputType = {
    oscMemberId?: true;
    interviewId?: true;
};
export type InterviewPanelMaxAggregateInputType = {
    oscMemberId?: true;
    interviewId?: true;
};
export type InterviewPanelCountAggregateInputType = {
    oscMemberId?: true;
    interviewId?: true;
    _all?: true;
};
export type InterviewPanelAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.InterviewPanelWhereInput;
    orderBy?: Prisma.InterviewPanelOrderByWithRelationInput | Prisma.InterviewPanelOrderByWithRelationInput[];
    cursor?: Prisma.InterviewPanelWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | InterviewPanelCountAggregateInputType;
    _avg?: InterviewPanelAvgAggregateInputType;
    _sum?: InterviewPanelSumAggregateInputType;
    _min?: InterviewPanelMinAggregateInputType;
    _max?: InterviewPanelMaxAggregateInputType;
};
export type GetInterviewPanelAggregateType<T extends InterviewPanelAggregateArgs> = {
    [P in keyof T & keyof AggregateInterviewPanel]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateInterviewPanel[P]> : Prisma.GetScalarType<T[P], AggregateInterviewPanel[P]>;
};
export type InterviewPanelGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.InterviewPanelWhereInput;
    orderBy?: Prisma.InterviewPanelOrderByWithAggregationInput | Prisma.InterviewPanelOrderByWithAggregationInput[];
    by: Prisma.InterviewPanelScalarFieldEnum[] | Prisma.InterviewPanelScalarFieldEnum;
    having?: Prisma.InterviewPanelScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: InterviewPanelCountAggregateInputType | true;
    _avg?: InterviewPanelAvgAggregateInputType;
    _sum?: InterviewPanelSumAggregateInputType;
    _min?: InterviewPanelMinAggregateInputType;
    _max?: InterviewPanelMaxAggregateInputType;
};
export type InterviewPanelGroupByOutputType = {
    oscMemberId: bigint;
    interviewId: bigint;
    _count: InterviewPanelCountAggregateOutputType | null;
    _avg: InterviewPanelAvgAggregateOutputType | null;
    _sum: InterviewPanelSumAggregateOutputType | null;
    _min: InterviewPanelMinAggregateOutputType | null;
    _max: InterviewPanelMaxAggregateOutputType | null;
};
export type GetInterviewPanelGroupByPayload<T extends InterviewPanelGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<InterviewPanelGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof InterviewPanelGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], InterviewPanelGroupByOutputType[P]> : Prisma.GetScalarType<T[P], InterviewPanelGroupByOutputType[P]>;
}>>;
export type InterviewPanelWhereInput = {
    AND?: Prisma.InterviewPanelWhereInput | Prisma.InterviewPanelWhereInput[];
    OR?: Prisma.InterviewPanelWhereInput[];
    NOT?: Prisma.InterviewPanelWhereInput | Prisma.InterviewPanelWhereInput[];
    oscMemberId?: Prisma.BigIntFilter<"InterviewPanel"> | bigint | number;
    interviewId?: Prisma.BigIntFilter<"InterviewPanel"> | bigint | number;
    oscMember?: Prisma.XOR<Prisma.OscMemberScalarRelationFilter, Prisma.OscMemberWhereInput>;
    interview?: Prisma.XOR<Prisma.InterviewScalarRelationFilter, Prisma.InterviewWhereInput>;
};
export type InterviewPanelOrderByWithRelationInput = {
    oscMemberId?: Prisma.SortOrder;
    interviewId?: Prisma.SortOrder;
    oscMember?: Prisma.OscMemberOrderByWithRelationInput;
    interview?: Prisma.InterviewOrderByWithRelationInput;
};
export type InterviewPanelWhereUniqueInput = Prisma.AtLeast<{
    oscMemberId_interviewId?: Prisma.InterviewPanelOscMemberIdInterviewIdCompoundUniqueInput;
    AND?: Prisma.InterviewPanelWhereInput | Prisma.InterviewPanelWhereInput[];
    OR?: Prisma.InterviewPanelWhereInput[];
    NOT?: Prisma.InterviewPanelWhereInput | Prisma.InterviewPanelWhereInput[];
    oscMemberId?: Prisma.BigIntFilter<"InterviewPanel"> | bigint | number;
    interviewId?: Prisma.BigIntFilter<"InterviewPanel"> | bigint | number;
    oscMember?: Prisma.XOR<Prisma.OscMemberScalarRelationFilter, Prisma.OscMemberWhereInput>;
    interview?: Prisma.XOR<Prisma.InterviewScalarRelationFilter, Prisma.InterviewWhereInput>;
}, "oscMemberId_interviewId">;
export type InterviewPanelOrderByWithAggregationInput = {
    oscMemberId?: Prisma.SortOrder;
    interviewId?: Prisma.SortOrder;
    _count?: Prisma.InterviewPanelCountOrderByAggregateInput;
    _avg?: Prisma.InterviewPanelAvgOrderByAggregateInput;
    _max?: Prisma.InterviewPanelMaxOrderByAggregateInput;
    _min?: Prisma.InterviewPanelMinOrderByAggregateInput;
    _sum?: Prisma.InterviewPanelSumOrderByAggregateInput;
};
export type InterviewPanelScalarWhereWithAggregatesInput = {
    AND?: Prisma.InterviewPanelScalarWhereWithAggregatesInput | Prisma.InterviewPanelScalarWhereWithAggregatesInput[];
    OR?: Prisma.InterviewPanelScalarWhereWithAggregatesInput[];
    NOT?: Prisma.InterviewPanelScalarWhereWithAggregatesInput | Prisma.InterviewPanelScalarWhereWithAggregatesInput[];
    oscMemberId?: Prisma.BigIntWithAggregatesFilter<"InterviewPanel"> | bigint | number;
    interviewId?: Prisma.BigIntWithAggregatesFilter<"InterviewPanel"> | bigint | number;
};
export type InterviewPanelCreateInput = {
    oscMember: Prisma.OscMemberCreateNestedOneWithoutPanelMemberInput;
    interview: Prisma.InterviewCreateNestedOneWithoutPanelInput;
};
export type InterviewPanelUncheckedCreateInput = {
    oscMemberId: bigint | number;
    interviewId: bigint | number;
};
export type InterviewPanelUpdateInput = {
    oscMember?: Prisma.OscMemberUpdateOneRequiredWithoutPanelMemberNestedInput;
    interview?: Prisma.InterviewUpdateOneRequiredWithoutPanelNestedInput;
};
export type InterviewPanelUncheckedUpdateInput = {
    oscMemberId?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    interviewId?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
};
export type InterviewPanelCreateManyInput = {
    oscMemberId: bigint | number;
    interviewId: bigint | number;
};
export type InterviewPanelUpdateManyMutationInput = {};
export type InterviewPanelUncheckedUpdateManyInput = {
    oscMemberId?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    interviewId?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
};
export type InterviewPanelListRelationFilter = {
    every?: Prisma.InterviewPanelWhereInput;
    some?: Prisma.InterviewPanelWhereInput;
    none?: Prisma.InterviewPanelWhereInput;
};
export type InterviewPanelOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type InterviewPanelOscMemberIdInterviewIdCompoundUniqueInput = {
    oscMemberId: bigint | number;
    interviewId: bigint | number;
};
export type InterviewPanelCountOrderByAggregateInput = {
    oscMemberId?: Prisma.SortOrder;
    interviewId?: Prisma.SortOrder;
};
export type InterviewPanelAvgOrderByAggregateInput = {
    oscMemberId?: Prisma.SortOrder;
    interviewId?: Prisma.SortOrder;
};
export type InterviewPanelMaxOrderByAggregateInput = {
    oscMemberId?: Prisma.SortOrder;
    interviewId?: Prisma.SortOrder;
};
export type InterviewPanelMinOrderByAggregateInput = {
    oscMemberId?: Prisma.SortOrder;
    interviewId?: Prisma.SortOrder;
};
export type InterviewPanelSumOrderByAggregateInput = {
    oscMemberId?: Prisma.SortOrder;
    interviewId?: Prisma.SortOrder;
};
export type InterviewPanelCreateNestedManyWithoutOscMemberInput = {
    create?: Prisma.XOR<Prisma.InterviewPanelCreateWithoutOscMemberInput, Prisma.InterviewPanelUncheckedCreateWithoutOscMemberInput> | Prisma.InterviewPanelCreateWithoutOscMemberInput[] | Prisma.InterviewPanelUncheckedCreateWithoutOscMemberInput[];
    connectOrCreate?: Prisma.InterviewPanelCreateOrConnectWithoutOscMemberInput | Prisma.InterviewPanelCreateOrConnectWithoutOscMemberInput[];
    createMany?: Prisma.InterviewPanelCreateManyOscMemberInputEnvelope;
    connect?: Prisma.InterviewPanelWhereUniqueInput | Prisma.InterviewPanelWhereUniqueInput[];
};
export type InterviewPanelUncheckedCreateNestedManyWithoutOscMemberInput = {
    create?: Prisma.XOR<Prisma.InterviewPanelCreateWithoutOscMemberInput, Prisma.InterviewPanelUncheckedCreateWithoutOscMemberInput> | Prisma.InterviewPanelCreateWithoutOscMemberInput[] | Prisma.InterviewPanelUncheckedCreateWithoutOscMemberInput[];
    connectOrCreate?: Prisma.InterviewPanelCreateOrConnectWithoutOscMemberInput | Prisma.InterviewPanelCreateOrConnectWithoutOscMemberInput[];
    createMany?: Prisma.InterviewPanelCreateManyOscMemberInputEnvelope;
    connect?: Prisma.InterviewPanelWhereUniqueInput | Prisma.InterviewPanelWhereUniqueInput[];
};
export type InterviewPanelUpdateManyWithoutOscMemberNestedInput = {
    create?: Prisma.XOR<Prisma.InterviewPanelCreateWithoutOscMemberInput, Prisma.InterviewPanelUncheckedCreateWithoutOscMemberInput> | Prisma.InterviewPanelCreateWithoutOscMemberInput[] | Prisma.InterviewPanelUncheckedCreateWithoutOscMemberInput[];
    connectOrCreate?: Prisma.InterviewPanelCreateOrConnectWithoutOscMemberInput | Prisma.InterviewPanelCreateOrConnectWithoutOscMemberInput[];
    upsert?: Prisma.InterviewPanelUpsertWithWhereUniqueWithoutOscMemberInput | Prisma.InterviewPanelUpsertWithWhereUniqueWithoutOscMemberInput[];
    createMany?: Prisma.InterviewPanelCreateManyOscMemberInputEnvelope;
    set?: Prisma.InterviewPanelWhereUniqueInput | Prisma.InterviewPanelWhereUniqueInput[];
    disconnect?: Prisma.InterviewPanelWhereUniqueInput | Prisma.InterviewPanelWhereUniqueInput[];
    delete?: Prisma.InterviewPanelWhereUniqueInput | Prisma.InterviewPanelWhereUniqueInput[];
    connect?: Prisma.InterviewPanelWhereUniqueInput | Prisma.InterviewPanelWhereUniqueInput[];
    update?: Prisma.InterviewPanelUpdateWithWhereUniqueWithoutOscMemberInput | Prisma.InterviewPanelUpdateWithWhereUniqueWithoutOscMemberInput[];
    updateMany?: Prisma.InterviewPanelUpdateManyWithWhereWithoutOscMemberInput | Prisma.InterviewPanelUpdateManyWithWhereWithoutOscMemberInput[];
    deleteMany?: Prisma.InterviewPanelScalarWhereInput | Prisma.InterviewPanelScalarWhereInput[];
};
export type InterviewPanelUncheckedUpdateManyWithoutOscMemberNestedInput = {
    create?: Prisma.XOR<Prisma.InterviewPanelCreateWithoutOscMemberInput, Prisma.InterviewPanelUncheckedCreateWithoutOscMemberInput> | Prisma.InterviewPanelCreateWithoutOscMemberInput[] | Prisma.InterviewPanelUncheckedCreateWithoutOscMemberInput[];
    connectOrCreate?: Prisma.InterviewPanelCreateOrConnectWithoutOscMemberInput | Prisma.InterviewPanelCreateOrConnectWithoutOscMemberInput[];
    upsert?: Prisma.InterviewPanelUpsertWithWhereUniqueWithoutOscMemberInput | Prisma.InterviewPanelUpsertWithWhereUniqueWithoutOscMemberInput[];
    createMany?: Prisma.InterviewPanelCreateManyOscMemberInputEnvelope;
    set?: Prisma.InterviewPanelWhereUniqueInput | Prisma.InterviewPanelWhereUniqueInput[];
    disconnect?: Prisma.InterviewPanelWhereUniqueInput | Prisma.InterviewPanelWhereUniqueInput[];
    delete?: Prisma.InterviewPanelWhereUniqueInput | Prisma.InterviewPanelWhereUniqueInput[];
    connect?: Prisma.InterviewPanelWhereUniqueInput | Prisma.InterviewPanelWhereUniqueInput[];
    update?: Prisma.InterviewPanelUpdateWithWhereUniqueWithoutOscMemberInput | Prisma.InterviewPanelUpdateWithWhereUniqueWithoutOscMemberInput[];
    updateMany?: Prisma.InterviewPanelUpdateManyWithWhereWithoutOscMemberInput | Prisma.InterviewPanelUpdateManyWithWhereWithoutOscMemberInput[];
    deleteMany?: Prisma.InterviewPanelScalarWhereInput | Prisma.InterviewPanelScalarWhereInput[];
};
export type InterviewPanelCreateNestedManyWithoutInterviewInput = {
    create?: Prisma.XOR<Prisma.InterviewPanelCreateWithoutInterviewInput, Prisma.InterviewPanelUncheckedCreateWithoutInterviewInput> | Prisma.InterviewPanelCreateWithoutInterviewInput[] | Prisma.InterviewPanelUncheckedCreateWithoutInterviewInput[];
    connectOrCreate?: Prisma.InterviewPanelCreateOrConnectWithoutInterviewInput | Prisma.InterviewPanelCreateOrConnectWithoutInterviewInput[];
    createMany?: Prisma.InterviewPanelCreateManyInterviewInputEnvelope;
    connect?: Prisma.InterviewPanelWhereUniqueInput | Prisma.InterviewPanelWhereUniqueInput[];
};
export type InterviewPanelUncheckedCreateNestedManyWithoutInterviewInput = {
    create?: Prisma.XOR<Prisma.InterviewPanelCreateWithoutInterviewInput, Prisma.InterviewPanelUncheckedCreateWithoutInterviewInput> | Prisma.InterviewPanelCreateWithoutInterviewInput[] | Prisma.InterviewPanelUncheckedCreateWithoutInterviewInput[];
    connectOrCreate?: Prisma.InterviewPanelCreateOrConnectWithoutInterviewInput | Prisma.InterviewPanelCreateOrConnectWithoutInterviewInput[];
    createMany?: Prisma.InterviewPanelCreateManyInterviewInputEnvelope;
    connect?: Prisma.InterviewPanelWhereUniqueInput | Prisma.InterviewPanelWhereUniqueInput[];
};
export type InterviewPanelUpdateManyWithoutInterviewNestedInput = {
    create?: Prisma.XOR<Prisma.InterviewPanelCreateWithoutInterviewInput, Prisma.InterviewPanelUncheckedCreateWithoutInterviewInput> | Prisma.InterviewPanelCreateWithoutInterviewInput[] | Prisma.InterviewPanelUncheckedCreateWithoutInterviewInput[];
    connectOrCreate?: Prisma.InterviewPanelCreateOrConnectWithoutInterviewInput | Prisma.InterviewPanelCreateOrConnectWithoutInterviewInput[];
    upsert?: Prisma.InterviewPanelUpsertWithWhereUniqueWithoutInterviewInput | Prisma.InterviewPanelUpsertWithWhereUniqueWithoutInterviewInput[];
    createMany?: Prisma.InterviewPanelCreateManyInterviewInputEnvelope;
    set?: Prisma.InterviewPanelWhereUniqueInput | Prisma.InterviewPanelWhereUniqueInput[];
    disconnect?: Prisma.InterviewPanelWhereUniqueInput | Prisma.InterviewPanelWhereUniqueInput[];
    delete?: Prisma.InterviewPanelWhereUniqueInput | Prisma.InterviewPanelWhereUniqueInput[];
    connect?: Prisma.InterviewPanelWhereUniqueInput | Prisma.InterviewPanelWhereUniqueInput[];
    update?: Prisma.InterviewPanelUpdateWithWhereUniqueWithoutInterviewInput | Prisma.InterviewPanelUpdateWithWhereUniqueWithoutInterviewInput[];
    updateMany?: Prisma.InterviewPanelUpdateManyWithWhereWithoutInterviewInput | Prisma.InterviewPanelUpdateManyWithWhereWithoutInterviewInput[];
    deleteMany?: Prisma.InterviewPanelScalarWhereInput | Prisma.InterviewPanelScalarWhereInput[];
};
export type InterviewPanelUncheckedUpdateManyWithoutInterviewNestedInput = {
    create?: Prisma.XOR<Prisma.InterviewPanelCreateWithoutInterviewInput, Prisma.InterviewPanelUncheckedCreateWithoutInterviewInput> | Prisma.InterviewPanelCreateWithoutInterviewInput[] | Prisma.InterviewPanelUncheckedCreateWithoutInterviewInput[];
    connectOrCreate?: Prisma.InterviewPanelCreateOrConnectWithoutInterviewInput | Prisma.InterviewPanelCreateOrConnectWithoutInterviewInput[];
    upsert?: Prisma.InterviewPanelUpsertWithWhereUniqueWithoutInterviewInput | Prisma.InterviewPanelUpsertWithWhereUniqueWithoutInterviewInput[];
    createMany?: Prisma.InterviewPanelCreateManyInterviewInputEnvelope;
    set?: Prisma.InterviewPanelWhereUniqueInput | Prisma.InterviewPanelWhereUniqueInput[];
    disconnect?: Prisma.InterviewPanelWhereUniqueInput | Prisma.InterviewPanelWhereUniqueInput[];
    delete?: Prisma.InterviewPanelWhereUniqueInput | Prisma.InterviewPanelWhereUniqueInput[];
    connect?: Prisma.InterviewPanelWhereUniqueInput | Prisma.InterviewPanelWhereUniqueInput[];
    update?: Prisma.InterviewPanelUpdateWithWhereUniqueWithoutInterviewInput | Prisma.InterviewPanelUpdateWithWhereUniqueWithoutInterviewInput[];
    updateMany?: Prisma.InterviewPanelUpdateManyWithWhereWithoutInterviewInput | Prisma.InterviewPanelUpdateManyWithWhereWithoutInterviewInput[];
    deleteMany?: Prisma.InterviewPanelScalarWhereInput | Prisma.InterviewPanelScalarWhereInput[];
};
export type InterviewPanelCreateWithoutOscMemberInput = {
    interview: Prisma.InterviewCreateNestedOneWithoutPanelInput;
};
export type InterviewPanelUncheckedCreateWithoutOscMemberInput = {
    interviewId: bigint | number;
};
export type InterviewPanelCreateOrConnectWithoutOscMemberInput = {
    where: Prisma.InterviewPanelWhereUniqueInput;
    create: Prisma.XOR<Prisma.InterviewPanelCreateWithoutOscMemberInput, Prisma.InterviewPanelUncheckedCreateWithoutOscMemberInput>;
};
export type InterviewPanelCreateManyOscMemberInputEnvelope = {
    data: Prisma.InterviewPanelCreateManyOscMemberInput | Prisma.InterviewPanelCreateManyOscMemberInput[];
    skipDuplicates?: boolean;
};
export type InterviewPanelUpsertWithWhereUniqueWithoutOscMemberInput = {
    where: Prisma.InterviewPanelWhereUniqueInput;
    update: Prisma.XOR<Prisma.InterviewPanelUpdateWithoutOscMemberInput, Prisma.InterviewPanelUncheckedUpdateWithoutOscMemberInput>;
    create: Prisma.XOR<Prisma.InterviewPanelCreateWithoutOscMemberInput, Prisma.InterviewPanelUncheckedCreateWithoutOscMemberInput>;
};
export type InterviewPanelUpdateWithWhereUniqueWithoutOscMemberInput = {
    where: Prisma.InterviewPanelWhereUniqueInput;
    data: Prisma.XOR<Prisma.InterviewPanelUpdateWithoutOscMemberInput, Prisma.InterviewPanelUncheckedUpdateWithoutOscMemberInput>;
};
export type InterviewPanelUpdateManyWithWhereWithoutOscMemberInput = {
    where: Prisma.InterviewPanelScalarWhereInput;
    data: Prisma.XOR<Prisma.InterviewPanelUpdateManyMutationInput, Prisma.InterviewPanelUncheckedUpdateManyWithoutOscMemberInput>;
};
export type InterviewPanelScalarWhereInput = {
    AND?: Prisma.InterviewPanelScalarWhereInput | Prisma.InterviewPanelScalarWhereInput[];
    OR?: Prisma.InterviewPanelScalarWhereInput[];
    NOT?: Prisma.InterviewPanelScalarWhereInput | Prisma.InterviewPanelScalarWhereInput[];
    oscMemberId?: Prisma.BigIntFilter<"InterviewPanel"> | bigint | number;
    interviewId?: Prisma.BigIntFilter<"InterviewPanel"> | bigint | number;
};
export type InterviewPanelCreateWithoutInterviewInput = {
    oscMember: Prisma.OscMemberCreateNestedOneWithoutPanelMemberInput;
};
export type InterviewPanelUncheckedCreateWithoutInterviewInput = {
    oscMemberId: bigint | number;
};
export type InterviewPanelCreateOrConnectWithoutInterviewInput = {
    where: Prisma.InterviewPanelWhereUniqueInput;
    create: Prisma.XOR<Prisma.InterviewPanelCreateWithoutInterviewInput, Prisma.InterviewPanelUncheckedCreateWithoutInterviewInput>;
};
export type InterviewPanelCreateManyInterviewInputEnvelope = {
    data: Prisma.InterviewPanelCreateManyInterviewInput | Prisma.InterviewPanelCreateManyInterviewInput[];
    skipDuplicates?: boolean;
};
export type InterviewPanelUpsertWithWhereUniqueWithoutInterviewInput = {
    where: Prisma.InterviewPanelWhereUniqueInput;
    update: Prisma.XOR<Prisma.InterviewPanelUpdateWithoutInterviewInput, Prisma.InterviewPanelUncheckedUpdateWithoutInterviewInput>;
    create: Prisma.XOR<Prisma.InterviewPanelCreateWithoutInterviewInput, Prisma.InterviewPanelUncheckedCreateWithoutInterviewInput>;
};
export type InterviewPanelUpdateWithWhereUniqueWithoutInterviewInput = {
    where: Prisma.InterviewPanelWhereUniqueInput;
    data: Prisma.XOR<Prisma.InterviewPanelUpdateWithoutInterviewInput, Prisma.InterviewPanelUncheckedUpdateWithoutInterviewInput>;
};
export type InterviewPanelUpdateManyWithWhereWithoutInterviewInput = {
    where: Prisma.InterviewPanelScalarWhereInput;
    data: Prisma.XOR<Prisma.InterviewPanelUpdateManyMutationInput, Prisma.InterviewPanelUncheckedUpdateManyWithoutInterviewInput>;
};
export type InterviewPanelCreateManyOscMemberInput = {
    interviewId: bigint | number;
};
export type InterviewPanelUpdateWithoutOscMemberInput = {
    interview?: Prisma.InterviewUpdateOneRequiredWithoutPanelNestedInput;
};
export type InterviewPanelUncheckedUpdateWithoutOscMemberInput = {
    interviewId?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
};
export type InterviewPanelUncheckedUpdateManyWithoutOscMemberInput = {
    interviewId?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
};
export type InterviewPanelCreateManyInterviewInput = {
    oscMemberId: bigint | number;
};
export type InterviewPanelUpdateWithoutInterviewInput = {
    oscMember?: Prisma.OscMemberUpdateOneRequiredWithoutPanelMemberNestedInput;
};
export type InterviewPanelUncheckedUpdateWithoutInterviewInput = {
    oscMemberId?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
};
export type InterviewPanelUncheckedUpdateManyWithoutInterviewInput = {
    oscMemberId?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
};
export type InterviewPanelSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    oscMemberId?: boolean;
    interviewId?: boolean;
    oscMember?: boolean | Prisma.OscMemberDefaultArgs<ExtArgs>;
    interview?: boolean | Prisma.InterviewDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["interviewPanel"]>;
export type InterviewPanelSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    oscMemberId?: boolean;
    interviewId?: boolean;
    oscMember?: boolean | Prisma.OscMemberDefaultArgs<ExtArgs>;
    interview?: boolean | Prisma.InterviewDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["interviewPanel"]>;
export type InterviewPanelSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    oscMemberId?: boolean;
    interviewId?: boolean;
    oscMember?: boolean | Prisma.OscMemberDefaultArgs<ExtArgs>;
    interview?: boolean | Prisma.InterviewDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["interviewPanel"]>;
export type InterviewPanelSelectScalar = {
    oscMemberId?: boolean;
    interviewId?: boolean;
};
export type InterviewPanelOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"oscMemberId" | "interviewId", ExtArgs["result"]["interviewPanel"]>;
export type InterviewPanelInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    oscMember?: boolean | Prisma.OscMemberDefaultArgs<ExtArgs>;
    interview?: boolean | Prisma.InterviewDefaultArgs<ExtArgs>;
};
export type InterviewPanelIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    oscMember?: boolean | Prisma.OscMemberDefaultArgs<ExtArgs>;
    interview?: boolean | Prisma.InterviewDefaultArgs<ExtArgs>;
};
export type InterviewPanelIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    oscMember?: boolean | Prisma.OscMemberDefaultArgs<ExtArgs>;
    interview?: boolean | Prisma.InterviewDefaultArgs<ExtArgs>;
};
export type $InterviewPanelPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "InterviewPanel";
    objects: {
        oscMember: Prisma.$OscMemberPayload<ExtArgs>;
        interview: Prisma.$InterviewPayload<ExtArgs>;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        oscMemberId: bigint;
        interviewId: bigint;
    }, ExtArgs["result"]["interviewPanel"]>;
    composites: {};
};
export type InterviewPanelGetPayload<S extends boolean | null | undefined | InterviewPanelDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$InterviewPanelPayload, S>;
export type InterviewPanelCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<InterviewPanelFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: InterviewPanelCountAggregateInputType | true;
};
export interface InterviewPanelDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['InterviewPanel'];
        meta: {
            name: 'InterviewPanel';
        };
    };
    findUnique<T extends InterviewPanelFindUniqueArgs>(args: Prisma.SelectSubset<T, InterviewPanelFindUniqueArgs<ExtArgs>>): Prisma.Prisma__InterviewPanelClient<runtime.Types.Result.GetResult<Prisma.$InterviewPanelPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends InterviewPanelFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, InterviewPanelFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__InterviewPanelClient<runtime.Types.Result.GetResult<Prisma.$InterviewPanelPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends InterviewPanelFindFirstArgs>(args?: Prisma.SelectSubset<T, InterviewPanelFindFirstArgs<ExtArgs>>): Prisma.Prisma__InterviewPanelClient<runtime.Types.Result.GetResult<Prisma.$InterviewPanelPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends InterviewPanelFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, InterviewPanelFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__InterviewPanelClient<runtime.Types.Result.GetResult<Prisma.$InterviewPanelPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends InterviewPanelFindManyArgs>(args?: Prisma.SelectSubset<T, InterviewPanelFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$InterviewPanelPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends InterviewPanelCreateArgs>(args: Prisma.SelectSubset<T, InterviewPanelCreateArgs<ExtArgs>>): Prisma.Prisma__InterviewPanelClient<runtime.Types.Result.GetResult<Prisma.$InterviewPanelPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends InterviewPanelCreateManyArgs>(args?: Prisma.SelectSubset<T, InterviewPanelCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends InterviewPanelCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, InterviewPanelCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$InterviewPanelPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends InterviewPanelDeleteArgs>(args: Prisma.SelectSubset<T, InterviewPanelDeleteArgs<ExtArgs>>): Prisma.Prisma__InterviewPanelClient<runtime.Types.Result.GetResult<Prisma.$InterviewPanelPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends InterviewPanelUpdateArgs>(args: Prisma.SelectSubset<T, InterviewPanelUpdateArgs<ExtArgs>>): Prisma.Prisma__InterviewPanelClient<runtime.Types.Result.GetResult<Prisma.$InterviewPanelPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends InterviewPanelDeleteManyArgs>(args?: Prisma.SelectSubset<T, InterviewPanelDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends InterviewPanelUpdateManyArgs>(args: Prisma.SelectSubset<T, InterviewPanelUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends InterviewPanelUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, InterviewPanelUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$InterviewPanelPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends InterviewPanelUpsertArgs>(args: Prisma.SelectSubset<T, InterviewPanelUpsertArgs<ExtArgs>>): Prisma.Prisma__InterviewPanelClient<runtime.Types.Result.GetResult<Prisma.$InterviewPanelPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends InterviewPanelCountArgs>(args?: Prisma.Subset<T, InterviewPanelCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], InterviewPanelCountAggregateOutputType> : number>;
    aggregate<T extends InterviewPanelAggregateArgs>(args: Prisma.Subset<T, InterviewPanelAggregateArgs>): Prisma.PrismaPromise<GetInterviewPanelAggregateType<T>>;
    groupBy<T extends InterviewPanelGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: InterviewPanelGroupByArgs['orderBy'];
    } : {
        orderBy?: InterviewPanelGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, InterviewPanelGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetInterviewPanelGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: InterviewPanelFieldRefs;
}
export interface Prisma__InterviewPanelClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    oscMember<T extends Prisma.OscMemberDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.OscMemberDefaultArgs<ExtArgs>>): Prisma.Prisma__OscMemberClient<runtime.Types.Result.GetResult<Prisma.$OscMemberPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    interview<T extends Prisma.InterviewDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.InterviewDefaultArgs<ExtArgs>>): Prisma.Prisma__InterviewClient<runtime.Types.Result.GetResult<Prisma.$InterviewPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface InterviewPanelFieldRefs {
    readonly oscMemberId: Prisma.FieldRef<"InterviewPanel", 'BigInt'>;
    readonly interviewId: Prisma.FieldRef<"InterviewPanel", 'BigInt'>;
}
export type InterviewPanelFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.InterviewPanelSelect<ExtArgs> | null;
    omit?: Prisma.InterviewPanelOmit<ExtArgs> | null;
    include?: Prisma.InterviewPanelInclude<ExtArgs> | null;
    where: Prisma.InterviewPanelWhereUniqueInput;
};
export type InterviewPanelFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.InterviewPanelSelect<ExtArgs> | null;
    omit?: Prisma.InterviewPanelOmit<ExtArgs> | null;
    include?: Prisma.InterviewPanelInclude<ExtArgs> | null;
    where: Prisma.InterviewPanelWhereUniqueInput;
};
export type InterviewPanelFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type InterviewPanelFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type InterviewPanelFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type InterviewPanelCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.InterviewPanelSelect<ExtArgs> | null;
    omit?: Prisma.InterviewPanelOmit<ExtArgs> | null;
    include?: Prisma.InterviewPanelInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.InterviewPanelCreateInput, Prisma.InterviewPanelUncheckedCreateInput>;
};
export type InterviewPanelCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.InterviewPanelCreateManyInput | Prisma.InterviewPanelCreateManyInput[];
    skipDuplicates?: boolean;
};
export type InterviewPanelCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.InterviewPanelSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.InterviewPanelOmit<ExtArgs> | null;
    data: Prisma.InterviewPanelCreateManyInput | Prisma.InterviewPanelCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.InterviewPanelIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type InterviewPanelUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.InterviewPanelSelect<ExtArgs> | null;
    omit?: Prisma.InterviewPanelOmit<ExtArgs> | null;
    include?: Prisma.InterviewPanelInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.InterviewPanelUpdateInput, Prisma.InterviewPanelUncheckedUpdateInput>;
    where: Prisma.InterviewPanelWhereUniqueInput;
};
export type InterviewPanelUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.InterviewPanelUpdateManyMutationInput, Prisma.InterviewPanelUncheckedUpdateManyInput>;
    where?: Prisma.InterviewPanelWhereInput;
    limit?: number;
};
export type InterviewPanelUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.InterviewPanelSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.InterviewPanelOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.InterviewPanelUpdateManyMutationInput, Prisma.InterviewPanelUncheckedUpdateManyInput>;
    where?: Prisma.InterviewPanelWhereInput;
    limit?: number;
    include?: Prisma.InterviewPanelIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type InterviewPanelUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.InterviewPanelSelect<ExtArgs> | null;
    omit?: Prisma.InterviewPanelOmit<ExtArgs> | null;
    include?: Prisma.InterviewPanelInclude<ExtArgs> | null;
    where: Prisma.InterviewPanelWhereUniqueInput;
    create: Prisma.XOR<Prisma.InterviewPanelCreateInput, Prisma.InterviewPanelUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.InterviewPanelUpdateInput, Prisma.InterviewPanelUncheckedUpdateInput>;
};
export type InterviewPanelDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.InterviewPanelSelect<ExtArgs> | null;
    omit?: Prisma.InterviewPanelOmit<ExtArgs> | null;
    include?: Prisma.InterviewPanelInclude<ExtArgs> | null;
    where: Prisma.InterviewPanelWhereUniqueInput;
};
export type InterviewPanelDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.InterviewPanelWhereInput;
    limit?: number;
};
export type InterviewPanelDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.InterviewPanelSelect<ExtArgs> | null;
    omit?: Prisma.InterviewPanelOmit<ExtArgs> | null;
    include?: Prisma.InterviewPanelInclude<ExtArgs> | null;
};

import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
export type IntervieweeModel = runtime.Types.Result.DefaultSelection<Prisma.$IntervieweePayload>;
export type AggregateInterviewee = {
    _count: IntervieweeCountAggregateOutputType | null;
    _avg: IntervieweeAvgAggregateOutputType | null;
    _sum: IntervieweeSumAggregateOutputType | null;
    _min: IntervieweeMinAggregateOutputType | null;
    _max: IntervieweeMaxAggregateOutputType | null;
};
export type IntervieweeAvgAggregateOutputType = {
    id: number | null;
    seatId: number | null;
    firstCommitteeId: number | null;
    secondCommitteeId: number | null;
};
export type IntervieweeSumAggregateOutputType = {
    id: bigint | null;
    seatId: bigint | null;
    firstCommitteeId: bigint | null;
    secondCommitteeId: bigint | null;
};
export type IntervieweeMinAggregateOutputType = {
    id: bigint | null;
    email: string | null;
    university: string | null;
    name: string | null;
    seatId: bigint | null;
    firstCommitteeId: bigint | null;
    secondCommitteeId: bigint | null;
    faculty: string | null;
    phone: string | null;
};
export type IntervieweeMaxAggregateOutputType = {
    id: bigint | null;
    email: string | null;
    university: string | null;
    name: string | null;
    seatId: bigint | null;
    firstCommitteeId: bigint | null;
    secondCommitteeId: bigint | null;
    faculty: string | null;
    phone: string | null;
};
export type IntervieweeCountAggregateOutputType = {
    id: number;
    email: number;
    university: number;
    name: number;
    seatId: number;
    firstCommitteeId: number;
    secondCommitteeId: number;
    faculty: number;
    phone: number;
    _all: number;
};
export type IntervieweeAvgAggregateInputType = {
    id?: true;
    seatId?: true;
    firstCommitteeId?: true;
    secondCommitteeId?: true;
};
export type IntervieweeSumAggregateInputType = {
    id?: true;
    seatId?: true;
    firstCommitteeId?: true;
    secondCommitteeId?: true;
};
export type IntervieweeMinAggregateInputType = {
    id?: true;
    email?: true;
    university?: true;
    name?: true;
    seatId?: true;
    firstCommitteeId?: true;
    secondCommitteeId?: true;
    faculty?: true;
    phone?: true;
};
export type IntervieweeMaxAggregateInputType = {
    id?: true;
    email?: true;
    university?: true;
    name?: true;
    seatId?: true;
    firstCommitteeId?: true;
    secondCommitteeId?: true;
    faculty?: true;
    phone?: true;
};
export type IntervieweeCountAggregateInputType = {
    id?: true;
    email?: true;
    university?: true;
    name?: true;
    seatId?: true;
    firstCommitteeId?: true;
    secondCommitteeId?: true;
    faculty?: true;
    phone?: true;
    _all?: true;
};
export type IntervieweeAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.IntervieweeWhereInput;
    orderBy?: Prisma.IntervieweeOrderByWithRelationInput | Prisma.IntervieweeOrderByWithRelationInput[];
    cursor?: Prisma.IntervieweeWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | IntervieweeCountAggregateInputType;
    _avg?: IntervieweeAvgAggregateInputType;
    _sum?: IntervieweeSumAggregateInputType;
    _min?: IntervieweeMinAggregateInputType;
    _max?: IntervieweeMaxAggregateInputType;
};
export type GetIntervieweeAggregateType<T extends IntervieweeAggregateArgs> = {
    [P in keyof T & keyof AggregateInterviewee]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateInterviewee[P]> : Prisma.GetScalarType<T[P], AggregateInterviewee[P]>;
};
export type IntervieweeGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.IntervieweeWhereInput;
    orderBy?: Prisma.IntervieweeOrderByWithAggregationInput | Prisma.IntervieweeOrderByWithAggregationInput[];
    by: Prisma.IntervieweeScalarFieldEnum[] | Prisma.IntervieweeScalarFieldEnum;
    having?: Prisma.IntervieweeScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: IntervieweeCountAggregateInputType | true;
    _avg?: IntervieweeAvgAggregateInputType;
    _sum?: IntervieweeSumAggregateInputType;
    _min?: IntervieweeMinAggregateInputType;
    _max?: IntervieweeMaxAggregateInputType;
};
export type IntervieweeGroupByOutputType = {
    id: bigint;
    email: string;
    university: string;
    name: string;
    seatId: bigint;
    firstCommitteeId: bigint;
    secondCommitteeId: bigint;
    faculty: string;
    phone: string;
    _count: IntervieweeCountAggregateOutputType | null;
    _avg: IntervieweeAvgAggregateOutputType | null;
    _sum: IntervieweeSumAggregateOutputType | null;
    _min: IntervieweeMinAggregateOutputType | null;
    _max: IntervieweeMaxAggregateOutputType | null;
};
export type GetIntervieweeGroupByPayload<T extends IntervieweeGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<IntervieweeGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof IntervieweeGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], IntervieweeGroupByOutputType[P]> : Prisma.GetScalarType<T[P], IntervieweeGroupByOutputType[P]>;
}>>;
export type IntervieweeWhereInput = {
    AND?: Prisma.IntervieweeWhereInput | Prisma.IntervieweeWhereInput[];
    OR?: Prisma.IntervieweeWhereInput[];
    NOT?: Prisma.IntervieweeWhereInput | Prisma.IntervieweeWhereInput[];
    id?: Prisma.BigIntFilter<"Interviewee"> | bigint | number;
    email?: Prisma.StringFilter<"Interviewee"> | string;
    university?: Prisma.StringFilter<"Interviewee"> | string;
    name?: Prisma.StringFilter<"Interviewee"> | string;
    seatId?: Prisma.BigIntFilter<"Interviewee"> | bigint | number;
    firstCommitteeId?: Prisma.BigIntFilter<"Interviewee"> | bigint | number;
    secondCommitteeId?: Prisma.BigIntFilter<"Interviewee"> | bigint | number;
    faculty?: Prisma.StringFilter<"Interviewee"> | string;
    phone?: Prisma.StringFilter<"Interviewee"> | string;
    firstCommittee?: Prisma.XOR<Prisma.CommitteeScalarRelationFilter, Prisma.CommitteeWhereInput>;
    secondCommittee?: Prisma.XOR<Prisma.CommitteeScalarRelationFilter, Prisma.CommitteeWhereInput>;
    interviews?: Prisma.InterviewListRelationFilter;
};
export type IntervieweeOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    email?: Prisma.SortOrder;
    university?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    seatId?: Prisma.SortOrder;
    firstCommitteeId?: Prisma.SortOrder;
    secondCommitteeId?: Prisma.SortOrder;
    faculty?: Prisma.SortOrder;
    phone?: Prisma.SortOrder;
    firstCommittee?: Prisma.CommitteeOrderByWithRelationInput;
    secondCommittee?: Prisma.CommitteeOrderByWithRelationInput;
    interviews?: Prisma.InterviewOrderByRelationAggregateInput;
};
export type IntervieweeWhereUniqueInput = Prisma.AtLeast<{
    id?: bigint | number;
    AND?: Prisma.IntervieweeWhereInput | Prisma.IntervieweeWhereInput[];
    OR?: Prisma.IntervieweeWhereInput[];
    NOT?: Prisma.IntervieweeWhereInput | Prisma.IntervieweeWhereInput[];
    email?: Prisma.StringFilter<"Interviewee"> | string;
    university?: Prisma.StringFilter<"Interviewee"> | string;
    name?: Prisma.StringFilter<"Interviewee"> | string;
    seatId?: Prisma.BigIntFilter<"Interviewee"> | bigint | number;
    firstCommitteeId?: Prisma.BigIntFilter<"Interviewee"> | bigint | number;
    secondCommitteeId?: Prisma.BigIntFilter<"Interviewee"> | bigint | number;
    faculty?: Prisma.StringFilter<"Interviewee"> | string;
    phone?: Prisma.StringFilter<"Interviewee"> | string;
    firstCommittee?: Prisma.XOR<Prisma.CommitteeScalarRelationFilter, Prisma.CommitteeWhereInput>;
    secondCommittee?: Prisma.XOR<Prisma.CommitteeScalarRelationFilter, Prisma.CommitteeWhereInput>;
    interviews?: Prisma.InterviewListRelationFilter;
}, "id">;
export type IntervieweeOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    email?: Prisma.SortOrder;
    university?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    seatId?: Prisma.SortOrder;
    firstCommitteeId?: Prisma.SortOrder;
    secondCommitteeId?: Prisma.SortOrder;
    faculty?: Prisma.SortOrder;
    phone?: Prisma.SortOrder;
    _count?: Prisma.IntervieweeCountOrderByAggregateInput;
    _avg?: Prisma.IntervieweeAvgOrderByAggregateInput;
    _max?: Prisma.IntervieweeMaxOrderByAggregateInput;
    _min?: Prisma.IntervieweeMinOrderByAggregateInput;
    _sum?: Prisma.IntervieweeSumOrderByAggregateInput;
};
export type IntervieweeScalarWhereWithAggregatesInput = {
    AND?: Prisma.IntervieweeScalarWhereWithAggregatesInput | Prisma.IntervieweeScalarWhereWithAggregatesInput[];
    OR?: Prisma.IntervieweeScalarWhereWithAggregatesInput[];
    NOT?: Prisma.IntervieweeScalarWhereWithAggregatesInput | Prisma.IntervieweeScalarWhereWithAggregatesInput[];
    id?: Prisma.BigIntWithAggregatesFilter<"Interviewee"> | bigint | number;
    email?: Prisma.StringWithAggregatesFilter<"Interviewee"> | string;
    university?: Prisma.StringWithAggregatesFilter<"Interviewee"> | string;
    name?: Prisma.StringWithAggregatesFilter<"Interviewee"> | string;
    seatId?: Prisma.BigIntWithAggregatesFilter<"Interviewee"> | bigint | number;
    firstCommitteeId?: Prisma.BigIntWithAggregatesFilter<"Interviewee"> | bigint | number;
    secondCommitteeId?: Prisma.BigIntWithAggregatesFilter<"Interviewee"> | bigint | number;
    faculty?: Prisma.StringWithAggregatesFilter<"Interviewee"> | string;
    phone?: Prisma.StringWithAggregatesFilter<"Interviewee"> | string;
};
export type IntervieweeCreateInput = {
    id?: bigint | number;
    email: string;
    university: string;
    name: string;
    seatId: bigint | number;
    faculty: string;
    phone: string;
    firstCommittee: Prisma.CommitteeCreateNestedOneWithoutIntervieweesInput;
    secondCommittee: Prisma.CommitteeCreateNestedOneWithoutInterviewees2Input;
    interviews?: Prisma.InterviewCreateNestedManyWithoutIntervieweeInput;
};
export type IntervieweeUncheckedCreateInput = {
    id?: bigint | number;
    email: string;
    university: string;
    name: string;
    seatId: bigint | number;
    firstCommitteeId: bigint | number;
    secondCommitteeId: bigint | number;
    faculty: string;
    phone: string;
    interviews?: Prisma.InterviewUncheckedCreateNestedManyWithoutIntervieweeInput;
};
export type IntervieweeUpdateInput = {
    id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    university?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    seatId?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    faculty?: Prisma.StringFieldUpdateOperationsInput | string;
    phone?: Prisma.StringFieldUpdateOperationsInput | string;
    firstCommittee?: Prisma.CommitteeUpdateOneRequiredWithoutIntervieweesNestedInput;
    secondCommittee?: Prisma.CommitteeUpdateOneRequiredWithoutInterviewees2NestedInput;
    interviews?: Prisma.InterviewUpdateManyWithoutIntervieweeNestedInput;
};
export type IntervieweeUncheckedUpdateInput = {
    id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    university?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    seatId?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    firstCommitteeId?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    secondCommitteeId?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    faculty?: Prisma.StringFieldUpdateOperationsInput | string;
    phone?: Prisma.StringFieldUpdateOperationsInput | string;
    interviews?: Prisma.InterviewUncheckedUpdateManyWithoutIntervieweeNestedInput;
};
export type IntervieweeCreateManyInput = {
    id?: bigint | number;
    email: string;
    university: string;
    name: string;
    seatId: bigint | number;
    firstCommitteeId: bigint | number;
    secondCommitteeId: bigint | number;
    faculty: string;
    phone: string;
};
export type IntervieweeUpdateManyMutationInput = {
    id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    university?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    seatId?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    faculty?: Prisma.StringFieldUpdateOperationsInput | string;
    phone?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type IntervieweeUncheckedUpdateManyInput = {
    id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    university?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    seatId?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    firstCommitteeId?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    secondCommitteeId?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    faculty?: Prisma.StringFieldUpdateOperationsInput | string;
    phone?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type IntervieweeListRelationFilter = {
    every?: Prisma.IntervieweeWhereInput;
    some?: Prisma.IntervieweeWhereInput;
    none?: Prisma.IntervieweeWhereInput;
};
export type IntervieweeOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type IntervieweeCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    email?: Prisma.SortOrder;
    university?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    seatId?: Prisma.SortOrder;
    firstCommitteeId?: Prisma.SortOrder;
    secondCommitteeId?: Prisma.SortOrder;
    faculty?: Prisma.SortOrder;
    phone?: Prisma.SortOrder;
};
export type IntervieweeAvgOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    seatId?: Prisma.SortOrder;
    firstCommitteeId?: Prisma.SortOrder;
    secondCommitteeId?: Prisma.SortOrder;
};
export type IntervieweeMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    email?: Prisma.SortOrder;
    university?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    seatId?: Prisma.SortOrder;
    firstCommitteeId?: Prisma.SortOrder;
    secondCommitteeId?: Prisma.SortOrder;
    faculty?: Prisma.SortOrder;
    phone?: Prisma.SortOrder;
};
export type IntervieweeMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    email?: Prisma.SortOrder;
    university?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    seatId?: Prisma.SortOrder;
    firstCommitteeId?: Prisma.SortOrder;
    secondCommitteeId?: Prisma.SortOrder;
    faculty?: Prisma.SortOrder;
    phone?: Prisma.SortOrder;
};
export type IntervieweeSumOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    seatId?: Prisma.SortOrder;
    firstCommitteeId?: Prisma.SortOrder;
    secondCommitteeId?: Prisma.SortOrder;
};
export type IntervieweeScalarRelationFilter = {
    is?: Prisma.IntervieweeWhereInput;
    isNot?: Prisma.IntervieweeWhereInput;
};
export type IntervieweeCreateNestedManyWithoutFirstCommitteeInput = {
    create?: Prisma.XOR<Prisma.IntervieweeCreateWithoutFirstCommitteeInput, Prisma.IntervieweeUncheckedCreateWithoutFirstCommitteeInput> | Prisma.IntervieweeCreateWithoutFirstCommitteeInput[] | Prisma.IntervieweeUncheckedCreateWithoutFirstCommitteeInput[];
    connectOrCreate?: Prisma.IntervieweeCreateOrConnectWithoutFirstCommitteeInput | Prisma.IntervieweeCreateOrConnectWithoutFirstCommitteeInput[];
    createMany?: Prisma.IntervieweeCreateManyFirstCommitteeInputEnvelope;
    connect?: Prisma.IntervieweeWhereUniqueInput | Prisma.IntervieweeWhereUniqueInput[];
};
export type IntervieweeCreateNestedManyWithoutSecondCommitteeInput = {
    create?: Prisma.XOR<Prisma.IntervieweeCreateWithoutSecondCommitteeInput, Prisma.IntervieweeUncheckedCreateWithoutSecondCommitteeInput> | Prisma.IntervieweeCreateWithoutSecondCommitteeInput[] | Prisma.IntervieweeUncheckedCreateWithoutSecondCommitteeInput[];
    connectOrCreate?: Prisma.IntervieweeCreateOrConnectWithoutSecondCommitteeInput | Prisma.IntervieweeCreateOrConnectWithoutSecondCommitteeInput[];
    createMany?: Prisma.IntervieweeCreateManySecondCommitteeInputEnvelope;
    connect?: Prisma.IntervieweeWhereUniqueInput | Prisma.IntervieweeWhereUniqueInput[];
};
export type IntervieweeUncheckedCreateNestedManyWithoutFirstCommitteeInput = {
    create?: Prisma.XOR<Prisma.IntervieweeCreateWithoutFirstCommitteeInput, Prisma.IntervieweeUncheckedCreateWithoutFirstCommitteeInput> | Prisma.IntervieweeCreateWithoutFirstCommitteeInput[] | Prisma.IntervieweeUncheckedCreateWithoutFirstCommitteeInput[];
    connectOrCreate?: Prisma.IntervieweeCreateOrConnectWithoutFirstCommitteeInput | Prisma.IntervieweeCreateOrConnectWithoutFirstCommitteeInput[];
    createMany?: Prisma.IntervieweeCreateManyFirstCommitteeInputEnvelope;
    connect?: Prisma.IntervieweeWhereUniqueInput | Prisma.IntervieweeWhereUniqueInput[];
};
export type IntervieweeUncheckedCreateNestedManyWithoutSecondCommitteeInput = {
    create?: Prisma.XOR<Prisma.IntervieweeCreateWithoutSecondCommitteeInput, Prisma.IntervieweeUncheckedCreateWithoutSecondCommitteeInput> | Prisma.IntervieweeCreateWithoutSecondCommitteeInput[] | Prisma.IntervieweeUncheckedCreateWithoutSecondCommitteeInput[];
    connectOrCreate?: Prisma.IntervieweeCreateOrConnectWithoutSecondCommitteeInput | Prisma.IntervieweeCreateOrConnectWithoutSecondCommitteeInput[];
    createMany?: Prisma.IntervieweeCreateManySecondCommitteeInputEnvelope;
    connect?: Prisma.IntervieweeWhereUniqueInput | Prisma.IntervieweeWhereUniqueInput[];
};
export type IntervieweeUpdateManyWithoutFirstCommitteeNestedInput = {
    create?: Prisma.XOR<Prisma.IntervieweeCreateWithoutFirstCommitteeInput, Prisma.IntervieweeUncheckedCreateWithoutFirstCommitteeInput> | Prisma.IntervieweeCreateWithoutFirstCommitteeInput[] | Prisma.IntervieweeUncheckedCreateWithoutFirstCommitteeInput[];
    connectOrCreate?: Prisma.IntervieweeCreateOrConnectWithoutFirstCommitteeInput | Prisma.IntervieweeCreateOrConnectWithoutFirstCommitteeInput[];
    upsert?: Prisma.IntervieweeUpsertWithWhereUniqueWithoutFirstCommitteeInput | Prisma.IntervieweeUpsertWithWhereUniqueWithoutFirstCommitteeInput[];
    createMany?: Prisma.IntervieweeCreateManyFirstCommitteeInputEnvelope;
    set?: Prisma.IntervieweeWhereUniqueInput | Prisma.IntervieweeWhereUniqueInput[];
    disconnect?: Prisma.IntervieweeWhereUniqueInput | Prisma.IntervieweeWhereUniqueInput[];
    delete?: Prisma.IntervieweeWhereUniqueInput | Prisma.IntervieweeWhereUniqueInput[];
    connect?: Prisma.IntervieweeWhereUniqueInput | Prisma.IntervieweeWhereUniqueInput[];
    update?: Prisma.IntervieweeUpdateWithWhereUniqueWithoutFirstCommitteeInput | Prisma.IntervieweeUpdateWithWhereUniqueWithoutFirstCommitteeInput[];
    updateMany?: Prisma.IntervieweeUpdateManyWithWhereWithoutFirstCommitteeInput | Prisma.IntervieweeUpdateManyWithWhereWithoutFirstCommitteeInput[];
    deleteMany?: Prisma.IntervieweeScalarWhereInput | Prisma.IntervieweeScalarWhereInput[];
};
export type IntervieweeUpdateManyWithoutSecondCommitteeNestedInput = {
    create?: Prisma.XOR<Prisma.IntervieweeCreateWithoutSecondCommitteeInput, Prisma.IntervieweeUncheckedCreateWithoutSecondCommitteeInput> | Prisma.IntervieweeCreateWithoutSecondCommitteeInput[] | Prisma.IntervieweeUncheckedCreateWithoutSecondCommitteeInput[];
    connectOrCreate?: Prisma.IntervieweeCreateOrConnectWithoutSecondCommitteeInput | Prisma.IntervieweeCreateOrConnectWithoutSecondCommitteeInput[];
    upsert?: Prisma.IntervieweeUpsertWithWhereUniqueWithoutSecondCommitteeInput | Prisma.IntervieweeUpsertWithWhereUniqueWithoutSecondCommitteeInput[];
    createMany?: Prisma.IntervieweeCreateManySecondCommitteeInputEnvelope;
    set?: Prisma.IntervieweeWhereUniqueInput | Prisma.IntervieweeWhereUniqueInput[];
    disconnect?: Prisma.IntervieweeWhereUniqueInput | Prisma.IntervieweeWhereUniqueInput[];
    delete?: Prisma.IntervieweeWhereUniqueInput | Prisma.IntervieweeWhereUniqueInput[];
    connect?: Prisma.IntervieweeWhereUniqueInput | Prisma.IntervieweeWhereUniqueInput[];
    update?: Prisma.IntervieweeUpdateWithWhereUniqueWithoutSecondCommitteeInput | Prisma.IntervieweeUpdateWithWhereUniqueWithoutSecondCommitteeInput[];
    updateMany?: Prisma.IntervieweeUpdateManyWithWhereWithoutSecondCommitteeInput | Prisma.IntervieweeUpdateManyWithWhereWithoutSecondCommitteeInput[];
    deleteMany?: Prisma.IntervieweeScalarWhereInput | Prisma.IntervieweeScalarWhereInput[];
};
export type IntervieweeUncheckedUpdateManyWithoutFirstCommitteeNestedInput = {
    create?: Prisma.XOR<Prisma.IntervieweeCreateWithoutFirstCommitteeInput, Prisma.IntervieweeUncheckedCreateWithoutFirstCommitteeInput> | Prisma.IntervieweeCreateWithoutFirstCommitteeInput[] | Prisma.IntervieweeUncheckedCreateWithoutFirstCommitteeInput[];
    connectOrCreate?: Prisma.IntervieweeCreateOrConnectWithoutFirstCommitteeInput | Prisma.IntervieweeCreateOrConnectWithoutFirstCommitteeInput[];
    upsert?: Prisma.IntervieweeUpsertWithWhereUniqueWithoutFirstCommitteeInput | Prisma.IntervieweeUpsertWithWhereUniqueWithoutFirstCommitteeInput[];
    createMany?: Prisma.IntervieweeCreateManyFirstCommitteeInputEnvelope;
    set?: Prisma.IntervieweeWhereUniqueInput | Prisma.IntervieweeWhereUniqueInput[];
    disconnect?: Prisma.IntervieweeWhereUniqueInput | Prisma.IntervieweeWhereUniqueInput[];
    delete?: Prisma.IntervieweeWhereUniqueInput | Prisma.IntervieweeWhereUniqueInput[];
    connect?: Prisma.IntervieweeWhereUniqueInput | Prisma.IntervieweeWhereUniqueInput[];
    update?: Prisma.IntervieweeUpdateWithWhereUniqueWithoutFirstCommitteeInput | Prisma.IntervieweeUpdateWithWhereUniqueWithoutFirstCommitteeInput[];
    updateMany?: Prisma.IntervieweeUpdateManyWithWhereWithoutFirstCommitteeInput | Prisma.IntervieweeUpdateManyWithWhereWithoutFirstCommitteeInput[];
    deleteMany?: Prisma.IntervieweeScalarWhereInput | Prisma.IntervieweeScalarWhereInput[];
};
export type IntervieweeUncheckedUpdateManyWithoutSecondCommitteeNestedInput = {
    create?: Prisma.XOR<Prisma.IntervieweeCreateWithoutSecondCommitteeInput, Prisma.IntervieweeUncheckedCreateWithoutSecondCommitteeInput> | Prisma.IntervieweeCreateWithoutSecondCommitteeInput[] | Prisma.IntervieweeUncheckedCreateWithoutSecondCommitteeInput[];
    connectOrCreate?: Prisma.IntervieweeCreateOrConnectWithoutSecondCommitteeInput | Prisma.IntervieweeCreateOrConnectWithoutSecondCommitteeInput[];
    upsert?: Prisma.IntervieweeUpsertWithWhereUniqueWithoutSecondCommitteeInput | Prisma.IntervieweeUpsertWithWhereUniqueWithoutSecondCommitteeInput[];
    createMany?: Prisma.IntervieweeCreateManySecondCommitteeInputEnvelope;
    set?: Prisma.IntervieweeWhereUniqueInput | Prisma.IntervieweeWhereUniqueInput[];
    disconnect?: Prisma.IntervieweeWhereUniqueInput | Prisma.IntervieweeWhereUniqueInput[];
    delete?: Prisma.IntervieweeWhereUniqueInput | Prisma.IntervieweeWhereUniqueInput[];
    connect?: Prisma.IntervieweeWhereUniqueInput | Prisma.IntervieweeWhereUniqueInput[];
    update?: Prisma.IntervieweeUpdateWithWhereUniqueWithoutSecondCommitteeInput | Prisma.IntervieweeUpdateWithWhereUniqueWithoutSecondCommitteeInput[];
    updateMany?: Prisma.IntervieweeUpdateManyWithWhereWithoutSecondCommitteeInput | Prisma.IntervieweeUpdateManyWithWhereWithoutSecondCommitteeInput[];
    deleteMany?: Prisma.IntervieweeScalarWhereInput | Prisma.IntervieweeScalarWhereInput[];
};
export type IntervieweeCreateNestedOneWithoutInterviewsInput = {
    create?: Prisma.XOR<Prisma.IntervieweeCreateWithoutInterviewsInput, Prisma.IntervieweeUncheckedCreateWithoutInterviewsInput>;
    connectOrCreate?: Prisma.IntervieweeCreateOrConnectWithoutInterviewsInput;
    connect?: Prisma.IntervieweeWhereUniqueInput;
};
export type IntervieweeUpdateOneRequiredWithoutInterviewsNestedInput = {
    create?: Prisma.XOR<Prisma.IntervieweeCreateWithoutInterviewsInput, Prisma.IntervieweeUncheckedCreateWithoutInterviewsInput>;
    connectOrCreate?: Prisma.IntervieweeCreateOrConnectWithoutInterviewsInput;
    upsert?: Prisma.IntervieweeUpsertWithoutInterviewsInput;
    connect?: Prisma.IntervieweeWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.IntervieweeUpdateToOneWithWhereWithoutInterviewsInput, Prisma.IntervieweeUpdateWithoutInterviewsInput>, Prisma.IntervieweeUncheckedUpdateWithoutInterviewsInput>;
};
export type IntervieweeCreateWithoutFirstCommitteeInput = {
    id?: bigint | number;
    email: string;
    university: string;
    name: string;
    seatId: bigint | number;
    faculty: string;
    phone: string;
    secondCommittee: Prisma.CommitteeCreateNestedOneWithoutInterviewees2Input;
    interviews?: Prisma.InterviewCreateNestedManyWithoutIntervieweeInput;
};
export type IntervieweeUncheckedCreateWithoutFirstCommitteeInput = {
    id?: bigint | number;
    email: string;
    university: string;
    name: string;
    seatId: bigint | number;
    secondCommitteeId: bigint | number;
    faculty: string;
    phone: string;
    interviews?: Prisma.InterviewUncheckedCreateNestedManyWithoutIntervieweeInput;
};
export type IntervieweeCreateOrConnectWithoutFirstCommitteeInput = {
    where: Prisma.IntervieweeWhereUniqueInput;
    create: Prisma.XOR<Prisma.IntervieweeCreateWithoutFirstCommitteeInput, Prisma.IntervieweeUncheckedCreateWithoutFirstCommitteeInput>;
};
export type IntervieweeCreateManyFirstCommitteeInputEnvelope = {
    data: Prisma.IntervieweeCreateManyFirstCommitteeInput | Prisma.IntervieweeCreateManyFirstCommitteeInput[];
    skipDuplicates?: boolean;
};
export type IntervieweeCreateWithoutSecondCommitteeInput = {
    id?: bigint | number;
    email: string;
    university: string;
    name: string;
    seatId: bigint | number;
    faculty: string;
    phone: string;
    firstCommittee: Prisma.CommitteeCreateNestedOneWithoutIntervieweesInput;
    interviews?: Prisma.InterviewCreateNestedManyWithoutIntervieweeInput;
};
export type IntervieweeUncheckedCreateWithoutSecondCommitteeInput = {
    id?: bigint | number;
    email: string;
    university: string;
    name: string;
    seatId: bigint | number;
    firstCommitteeId: bigint | number;
    faculty: string;
    phone: string;
    interviews?: Prisma.InterviewUncheckedCreateNestedManyWithoutIntervieweeInput;
};
export type IntervieweeCreateOrConnectWithoutSecondCommitteeInput = {
    where: Prisma.IntervieweeWhereUniqueInput;
    create: Prisma.XOR<Prisma.IntervieweeCreateWithoutSecondCommitteeInput, Prisma.IntervieweeUncheckedCreateWithoutSecondCommitteeInput>;
};
export type IntervieweeCreateManySecondCommitteeInputEnvelope = {
    data: Prisma.IntervieweeCreateManySecondCommitteeInput | Prisma.IntervieweeCreateManySecondCommitteeInput[];
    skipDuplicates?: boolean;
};
export type IntervieweeUpsertWithWhereUniqueWithoutFirstCommitteeInput = {
    where: Prisma.IntervieweeWhereUniqueInput;
    update: Prisma.XOR<Prisma.IntervieweeUpdateWithoutFirstCommitteeInput, Prisma.IntervieweeUncheckedUpdateWithoutFirstCommitteeInput>;
    create: Prisma.XOR<Prisma.IntervieweeCreateWithoutFirstCommitteeInput, Prisma.IntervieweeUncheckedCreateWithoutFirstCommitteeInput>;
};
export type IntervieweeUpdateWithWhereUniqueWithoutFirstCommitteeInput = {
    where: Prisma.IntervieweeWhereUniqueInput;
    data: Prisma.XOR<Prisma.IntervieweeUpdateWithoutFirstCommitteeInput, Prisma.IntervieweeUncheckedUpdateWithoutFirstCommitteeInput>;
};
export type IntervieweeUpdateManyWithWhereWithoutFirstCommitteeInput = {
    where: Prisma.IntervieweeScalarWhereInput;
    data: Prisma.XOR<Prisma.IntervieweeUpdateManyMutationInput, Prisma.IntervieweeUncheckedUpdateManyWithoutFirstCommitteeInput>;
};
export type IntervieweeScalarWhereInput = {
    AND?: Prisma.IntervieweeScalarWhereInput | Prisma.IntervieweeScalarWhereInput[];
    OR?: Prisma.IntervieweeScalarWhereInput[];
    NOT?: Prisma.IntervieweeScalarWhereInput | Prisma.IntervieweeScalarWhereInput[];
    id?: Prisma.BigIntFilter<"Interviewee"> | bigint | number;
    email?: Prisma.StringFilter<"Interviewee"> | string;
    university?: Prisma.StringFilter<"Interviewee"> | string;
    name?: Prisma.StringFilter<"Interviewee"> | string;
    seatId?: Prisma.BigIntFilter<"Interviewee"> | bigint | number;
    firstCommitteeId?: Prisma.BigIntFilter<"Interviewee"> | bigint | number;
    secondCommitteeId?: Prisma.BigIntFilter<"Interviewee"> | bigint | number;
    faculty?: Prisma.StringFilter<"Interviewee"> | string;
    phone?: Prisma.StringFilter<"Interviewee"> | string;
};
export type IntervieweeUpsertWithWhereUniqueWithoutSecondCommitteeInput = {
    where: Prisma.IntervieweeWhereUniqueInput;
    update: Prisma.XOR<Prisma.IntervieweeUpdateWithoutSecondCommitteeInput, Prisma.IntervieweeUncheckedUpdateWithoutSecondCommitteeInput>;
    create: Prisma.XOR<Prisma.IntervieweeCreateWithoutSecondCommitteeInput, Prisma.IntervieweeUncheckedCreateWithoutSecondCommitteeInput>;
};
export type IntervieweeUpdateWithWhereUniqueWithoutSecondCommitteeInput = {
    where: Prisma.IntervieweeWhereUniqueInput;
    data: Prisma.XOR<Prisma.IntervieweeUpdateWithoutSecondCommitteeInput, Prisma.IntervieweeUncheckedUpdateWithoutSecondCommitteeInput>;
};
export type IntervieweeUpdateManyWithWhereWithoutSecondCommitteeInput = {
    where: Prisma.IntervieweeScalarWhereInput;
    data: Prisma.XOR<Prisma.IntervieweeUpdateManyMutationInput, Prisma.IntervieweeUncheckedUpdateManyWithoutSecondCommitteeInput>;
};
export type IntervieweeCreateWithoutInterviewsInput = {
    id?: bigint | number;
    email: string;
    university: string;
    name: string;
    seatId: bigint | number;
    faculty: string;
    phone: string;
    firstCommittee: Prisma.CommitteeCreateNestedOneWithoutIntervieweesInput;
    secondCommittee: Prisma.CommitteeCreateNestedOneWithoutInterviewees2Input;
};
export type IntervieweeUncheckedCreateWithoutInterviewsInput = {
    id?: bigint | number;
    email: string;
    university: string;
    name: string;
    seatId: bigint | number;
    firstCommitteeId: bigint | number;
    secondCommitteeId: bigint | number;
    faculty: string;
    phone: string;
};
export type IntervieweeCreateOrConnectWithoutInterviewsInput = {
    where: Prisma.IntervieweeWhereUniqueInput;
    create: Prisma.XOR<Prisma.IntervieweeCreateWithoutInterviewsInput, Prisma.IntervieweeUncheckedCreateWithoutInterviewsInput>;
};
export type IntervieweeUpsertWithoutInterviewsInput = {
    update: Prisma.XOR<Prisma.IntervieweeUpdateWithoutInterviewsInput, Prisma.IntervieweeUncheckedUpdateWithoutInterviewsInput>;
    create: Prisma.XOR<Prisma.IntervieweeCreateWithoutInterviewsInput, Prisma.IntervieweeUncheckedCreateWithoutInterviewsInput>;
    where?: Prisma.IntervieweeWhereInput;
};
export type IntervieweeUpdateToOneWithWhereWithoutInterviewsInput = {
    where?: Prisma.IntervieweeWhereInput;
    data: Prisma.XOR<Prisma.IntervieweeUpdateWithoutInterviewsInput, Prisma.IntervieweeUncheckedUpdateWithoutInterviewsInput>;
};
export type IntervieweeUpdateWithoutInterviewsInput = {
    id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    university?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    seatId?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    faculty?: Prisma.StringFieldUpdateOperationsInput | string;
    phone?: Prisma.StringFieldUpdateOperationsInput | string;
    firstCommittee?: Prisma.CommitteeUpdateOneRequiredWithoutIntervieweesNestedInput;
    secondCommittee?: Prisma.CommitteeUpdateOneRequiredWithoutInterviewees2NestedInput;
};
export type IntervieweeUncheckedUpdateWithoutInterviewsInput = {
    id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    university?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    seatId?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    firstCommitteeId?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    secondCommitteeId?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    faculty?: Prisma.StringFieldUpdateOperationsInput | string;
    phone?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type IntervieweeCreateManyFirstCommitteeInput = {
    id?: bigint | number;
    email: string;
    university: string;
    name: string;
    seatId: bigint | number;
    secondCommitteeId: bigint | number;
    faculty: string;
    phone: string;
};
export type IntervieweeCreateManySecondCommitteeInput = {
    id?: bigint | number;
    email: string;
    university: string;
    name: string;
    seatId: bigint | number;
    firstCommitteeId: bigint | number;
    faculty: string;
    phone: string;
};
export type IntervieweeUpdateWithoutFirstCommitteeInput = {
    id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    university?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    seatId?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    faculty?: Prisma.StringFieldUpdateOperationsInput | string;
    phone?: Prisma.StringFieldUpdateOperationsInput | string;
    secondCommittee?: Prisma.CommitteeUpdateOneRequiredWithoutInterviewees2NestedInput;
    interviews?: Prisma.InterviewUpdateManyWithoutIntervieweeNestedInput;
};
export type IntervieweeUncheckedUpdateWithoutFirstCommitteeInput = {
    id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    university?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    seatId?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    secondCommitteeId?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    faculty?: Prisma.StringFieldUpdateOperationsInput | string;
    phone?: Prisma.StringFieldUpdateOperationsInput | string;
    interviews?: Prisma.InterviewUncheckedUpdateManyWithoutIntervieweeNestedInput;
};
export type IntervieweeUncheckedUpdateManyWithoutFirstCommitteeInput = {
    id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    university?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    seatId?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    secondCommitteeId?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    faculty?: Prisma.StringFieldUpdateOperationsInput | string;
    phone?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type IntervieweeUpdateWithoutSecondCommitteeInput = {
    id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    university?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    seatId?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    faculty?: Prisma.StringFieldUpdateOperationsInput | string;
    phone?: Prisma.StringFieldUpdateOperationsInput | string;
    firstCommittee?: Prisma.CommitteeUpdateOneRequiredWithoutIntervieweesNestedInput;
    interviews?: Prisma.InterviewUpdateManyWithoutIntervieweeNestedInput;
};
export type IntervieweeUncheckedUpdateWithoutSecondCommitteeInput = {
    id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    university?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    seatId?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    firstCommitteeId?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    faculty?: Prisma.StringFieldUpdateOperationsInput | string;
    phone?: Prisma.StringFieldUpdateOperationsInput | string;
    interviews?: Prisma.InterviewUncheckedUpdateManyWithoutIntervieweeNestedInput;
};
export type IntervieweeUncheckedUpdateManyWithoutSecondCommitteeInput = {
    id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    university?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    seatId?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    firstCommitteeId?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    faculty?: Prisma.StringFieldUpdateOperationsInput | string;
    phone?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type IntervieweeCountOutputType = {
    interviews: number;
};
export type IntervieweeCountOutputTypeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    interviews?: boolean | IntervieweeCountOutputTypeCountInterviewsArgs;
};
export type IntervieweeCountOutputTypeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.IntervieweeCountOutputTypeSelect<ExtArgs> | null;
};
export type IntervieweeCountOutputTypeCountInterviewsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.InterviewWhereInput;
};
export type IntervieweeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    email?: boolean;
    university?: boolean;
    name?: boolean;
    seatId?: boolean;
    firstCommitteeId?: boolean;
    secondCommitteeId?: boolean;
    faculty?: boolean;
    phone?: boolean;
    firstCommittee?: boolean | Prisma.CommitteeDefaultArgs<ExtArgs>;
    secondCommittee?: boolean | Prisma.CommitteeDefaultArgs<ExtArgs>;
    interviews?: boolean | Prisma.Interviewee$interviewsArgs<ExtArgs>;
    _count?: boolean | Prisma.IntervieweeCountOutputTypeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["interviewee"]>;
export type IntervieweeSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    email?: boolean;
    university?: boolean;
    name?: boolean;
    seatId?: boolean;
    firstCommitteeId?: boolean;
    secondCommitteeId?: boolean;
    faculty?: boolean;
    phone?: boolean;
    firstCommittee?: boolean | Prisma.CommitteeDefaultArgs<ExtArgs>;
    secondCommittee?: boolean | Prisma.CommitteeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["interviewee"]>;
export type IntervieweeSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    email?: boolean;
    university?: boolean;
    name?: boolean;
    seatId?: boolean;
    firstCommitteeId?: boolean;
    secondCommitteeId?: boolean;
    faculty?: boolean;
    phone?: boolean;
    firstCommittee?: boolean | Prisma.CommitteeDefaultArgs<ExtArgs>;
    secondCommittee?: boolean | Prisma.CommitteeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["interviewee"]>;
export type IntervieweeSelectScalar = {
    id?: boolean;
    email?: boolean;
    university?: boolean;
    name?: boolean;
    seatId?: boolean;
    firstCommitteeId?: boolean;
    secondCommitteeId?: boolean;
    faculty?: boolean;
    phone?: boolean;
};
export type IntervieweeOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "email" | "university" | "name" | "seatId" | "firstCommitteeId" | "secondCommitteeId" | "faculty" | "phone", ExtArgs["result"]["interviewee"]>;
export type IntervieweeInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    firstCommittee?: boolean | Prisma.CommitteeDefaultArgs<ExtArgs>;
    secondCommittee?: boolean | Prisma.CommitteeDefaultArgs<ExtArgs>;
    interviews?: boolean | Prisma.Interviewee$interviewsArgs<ExtArgs>;
    _count?: boolean | Prisma.IntervieweeCountOutputTypeDefaultArgs<ExtArgs>;
};
export type IntervieweeIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    firstCommittee?: boolean | Prisma.CommitteeDefaultArgs<ExtArgs>;
    secondCommittee?: boolean | Prisma.CommitteeDefaultArgs<ExtArgs>;
};
export type IntervieweeIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    firstCommittee?: boolean | Prisma.CommitteeDefaultArgs<ExtArgs>;
    secondCommittee?: boolean | Prisma.CommitteeDefaultArgs<ExtArgs>;
};
export type $IntervieweePayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "Interviewee";
    objects: {
        firstCommittee: Prisma.$CommitteePayload<ExtArgs>;
        secondCommittee: Prisma.$CommitteePayload<ExtArgs>;
        interviews: Prisma.$InterviewPayload<ExtArgs>[];
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: bigint;
        email: string;
        university: string;
        name: string;
        seatId: bigint;
        firstCommitteeId: bigint;
        secondCommitteeId: bigint;
        faculty: string;
        phone: string;
    }, ExtArgs["result"]["interviewee"]>;
    composites: {};
};
export type IntervieweeGetPayload<S extends boolean | null | undefined | IntervieweeDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$IntervieweePayload, S>;
export type IntervieweeCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<IntervieweeFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: IntervieweeCountAggregateInputType | true;
};
export interface IntervieweeDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['Interviewee'];
        meta: {
            name: 'Interviewee';
        };
    };
    findUnique<T extends IntervieweeFindUniqueArgs>(args: Prisma.SelectSubset<T, IntervieweeFindUniqueArgs<ExtArgs>>): Prisma.Prisma__IntervieweeClient<runtime.Types.Result.GetResult<Prisma.$IntervieweePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends IntervieweeFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, IntervieweeFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__IntervieweeClient<runtime.Types.Result.GetResult<Prisma.$IntervieweePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends IntervieweeFindFirstArgs>(args?: Prisma.SelectSubset<T, IntervieweeFindFirstArgs<ExtArgs>>): Prisma.Prisma__IntervieweeClient<runtime.Types.Result.GetResult<Prisma.$IntervieweePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends IntervieweeFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, IntervieweeFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__IntervieweeClient<runtime.Types.Result.GetResult<Prisma.$IntervieweePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends IntervieweeFindManyArgs>(args?: Prisma.SelectSubset<T, IntervieweeFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$IntervieweePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends IntervieweeCreateArgs>(args: Prisma.SelectSubset<T, IntervieweeCreateArgs<ExtArgs>>): Prisma.Prisma__IntervieweeClient<runtime.Types.Result.GetResult<Prisma.$IntervieweePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends IntervieweeCreateManyArgs>(args?: Prisma.SelectSubset<T, IntervieweeCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends IntervieweeCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, IntervieweeCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$IntervieweePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends IntervieweeDeleteArgs>(args: Prisma.SelectSubset<T, IntervieweeDeleteArgs<ExtArgs>>): Prisma.Prisma__IntervieweeClient<runtime.Types.Result.GetResult<Prisma.$IntervieweePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends IntervieweeUpdateArgs>(args: Prisma.SelectSubset<T, IntervieweeUpdateArgs<ExtArgs>>): Prisma.Prisma__IntervieweeClient<runtime.Types.Result.GetResult<Prisma.$IntervieweePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends IntervieweeDeleteManyArgs>(args?: Prisma.SelectSubset<T, IntervieweeDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends IntervieweeUpdateManyArgs>(args: Prisma.SelectSubset<T, IntervieweeUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends IntervieweeUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, IntervieweeUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$IntervieweePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends IntervieweeUpsertArgs>(args: Prisma.SelectSubset<T, IntervieweeUpsertArgs<ExtArgs>>): Prisma.Prisma__IntervieweeClient<runtime.Types.Result.GetResult<Prisma.$IntervieweePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends IntervieweeCountArgs>(args?: Prisma.Subset<T, IntervieweeCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], IntervieweeCountAggregateOutputType> : number>;
    aggregate<T extends IntervieweeAggregateArgs>(args: Prisma.Subset<T, IntervieweeAggregateArgs>): Prisma.PrismaPromise<GetIntervieweeAggregateType<T>>;
    groupBy<T extends IntervieweeGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: IntervieweeGroupByArgs['orderBy'];
    } : {
        orderBy?: IntervieweeGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, IntervieweeGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetIntervieweeGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: IntervieweeFieldRefs;
}
export interface Prisma__IntervieweeClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    firstCommittee<T extends Prisma.CommitteeDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.CommitteeDefaultArgs<ExtArgs>>): Prisma.Prisma__CommitteeClient<runtime.Types.Result.GetResult<Prisma.$CommitteePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    secondCommittee<T extends Prisma.CommitteeDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.CommitteeDefaultArgs<ExtArgs>>): Prisma.Prisma__CommitteeClient<runtime.Types.Result.GetResult<Prisma.$CommitteePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    interviews<T extends Prisma.Interviewee$interviewsArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Interviewee$interviewsArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$InterviewPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface IntervieweeFieldRefs {
    readonly id: Prisma.FieldRef<"Interviewee", 'BigInt'>;
    readonly email: Prisma.FieldRef<"Interviewee", 'String'>;
    readonly university: Prisma.FieldRef<"Interviewee", 'String'>;
    readonly name: Prisma.FieldRef<"Interviewee", 'String'>;
    readonly seatId: Prisma.FieldRef<"Interviewee", 'BigInt'>;
    readonly firstCommitteeId: Prisma.FieldRef<"Interviewee", 'BigInt'>;
    readonly secondCommitteeId: Prisma.FieldRef<"Interviewee", 'BigInt'>;
    readonly faculty: Prisma.FieldRef<"Interviewee", 'String'>;
    readonly phone: Prisma.FieldRef<"Interviewee", 'String'>;
}
export type IntervieweeFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.IntervieweeSelect<ExtArgs> | null;
    omit?: Prisma.IntervieweeOmit<ExtArgs> | null;
    include?: Prisma.IntervieweeInclude<ExtArgs> | null;
    where: Prisma.IntervieweeWhereUniqueInput;
};
export type IntervieweeFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.IntervieweeSelect<ExtArgs> | null;
    omit?: Prisma.IntervieweeOmit<ExtArgs> | null;
    include?: Prisma.IntervieweeInclude<ExtArgs> | null;
    where: Prisma.IntervieweeWhereUniqueInput;
};
export type IntervieweeFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type IntervieweeFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type IntervieweeFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type IntervieweeCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.IntervieweeSelect<ExtArgs> | null;
    omit?: Prisma.IntervieweeOmit<ExtArgs> | null;
    include?: Prisma.IntervieweeInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.IntervieweeCreateInput, Prisma.IntervieweeUncheckedCreateInput>;
};
export type IntervieweeCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.IntervieweeCreateManyInput | Prisma.IntervieweeCreateManyInput[];
    skipDuplicates?: boolean;
};
export type IntervieweeCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.IntervieweeSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.IntervieweeOmit<ExtArgs> | null;
    data: Prisma.IntervieweeCreateManyInput | Prisma.IntervieweeCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.IntervieweeIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type IntervieweeUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.IntervieweeSelect<ExtArgs> | null;
    omit?: Prisma.IntervieweeOmit<ExtArgs> | null;
    include?: Prisma.IntervieweeInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.IntervieweeUpdateInput, Prisma.IntervieweeUncheckedUpdateInput>;
    where: Prisma.IntervieweeWhereUniqueInput;
};
export type IntervieweeUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.IntervieweeUpdateManyMutationInput, Prisma.IntervieweeUncheckedUpdateManyInput>;
    where?: Prisma.IntervieweeWhereInput;
    limit?: number;
};
export type IntervieweeUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.IntervieweeSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.IntervieweeOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.IntervieweeUpdateManyMutationInput, Prisma.IntervieweeUncheckedUpdateManyInput>;
    where?: Prisma.IntervieweeWhereInput;
    limit?: number;
    include?: Prisma.IntervieweeIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type IntervieweeUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.IntervieweeSelect<ExtArgs> | null;
    omit?: Prisma.IntervieweeOmit<ExtArgs> | null;
    include?: Prisma.IntervieweeInclude<ExtArgs> | null;
    where: Prisma.IntervieweeWhereUniqueInput;
    create: Prisma.XOR<Prisma.IntervieweeCreateInput, Prisma.IntervieweeUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.IntervieweeUpdateInput, Prisma.IntervieweeUncheckedUpdateInput>;
};
export type IntervieweeDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.IntervieweeSelect<ExtArgs> | null;
    omit?: Prisma.IntervieweeOmit<ExtArgs> | null;
    include?: Prisma.IntervieweeInclude<ExtArgs> | null;
    where: Prisma.IntervieweeWhereUniqueInput;
};
export type IntervieweeDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.IntervieweeWhereInput;
    limit?: number;
};
export type Interviewee$interviewsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type IntervieweeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.IntervieweeSelect<ExtArgs> | null;
    omit?: Prisma.IntervieweeOmit<ExtArgs> | null;
    include?: Prisma.IntervieweeInclude<ExtArgs> | null;
};

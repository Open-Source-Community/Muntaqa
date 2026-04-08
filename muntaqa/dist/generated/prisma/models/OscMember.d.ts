import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
export type OscMemberModel = runtime.Types.Result.DefaultSelection<Prisma.$OscMemberPayload>;
export type AggregateOscMember = {
    _count: OscMemberCountAggregateOutputType | null;
    _avg: OscMemberAvgAggregateOutputType | null;
    _sum: OscMemberSumAggregateOutputType | null;
    _min: OscMemberMinAggregateOutputType | null;
    _max: OscMemberMaxAggregateOutputType | null;
};
export type OscMemberAvgAggregateOutputType = {
    id: number | null;
    committeeId: number | null;
    seatId: number | null;
    newColumn: number | null;
};
export type OscMemberSumAggregateOutputType = {
    id: bigint | null;
    committeeId: bigint | null;
    seatId: bigint | null;
    newColumn: bigint | null;
};
export type OscMemberMinAggregateOutputType = {
    id: bigint | null;
    email: string | null;
    name: string | null;
    committeeId: bigint | null;
    seatId: bigint | null;
    newColumn: bigint | null;
    phone: string | null;
    role: string | null;
};
export type OscMemberMaxAggregateOutputType = {
    id: bigint | null;
    email: string | null;
    name: string | null;
    committeeId: bigint | null;
    seatId: bigint | null;
    newColumn: bigint | null;
    phone: string | null;
    role: string | null;
};
export type OscMemberCountAggregateOutputType = {
    id: number;
    email: number;
    name: number;
    committeeId: number;
    seatId: number;
    newColumn: number;
    phone: number;
    role: number;
    _all: number;
};
export type OscMemberAvgAggregateInputType = {
    id?: true;
    committeeId?: true;
    seatId?: true;
    newColumn?: true;
};
export type OscMemberSumAggregateInputType = {
    id?: true;
    committeeId?: true;
    seatId?: true;
    newColumn?: true;
};
export type OscMemberMinAggregateInputType = {
    id?: true;
    email?: true;
    name?: true;
    committeeId?: true;
    seatId?: true;
    newColumn?: true;
    phone?: true;
    role?: true;
};
export type OscMemberMaxAggregateInputType = {
    id?: true;
    email?: true;
    name?: true;
    committeeId?: true;
    seatId?: true;
    newColumn?: true;
    phone?: true;
    role?: true;
};
export type OscMemberCountAggregateInputType = {
    id?: true;
    email?: true;
    name?: true;
    committeeId?: true;
    seatId?: true;
    newColumn?: true;
    phone?: true;
    role?: true;
    _all?: true;
};
export type OscMemberAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.OscMemberWhereInput;
    orderBy?: Prisma.OscMemberOrderByWithRelationInput | Prisma.OscMemberOrderByWithRelationInput[];
    cursor?: Prisma.OscMemberWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | OscMemberCountAggregateInputType;
    _avg?: OscMemberAvgAggregateInputType;
    _sum?: OscMemberSumAggregateInputType;
    _min?: OscMemberMinAggregateInputType;
    _max?: OscMemberMaxAggregateInputType;
};
export type GetOscMemberAggregateType<T extends OscMemberAggregateArgs> = {
    [P in keyof T & keyof AggregateOscMember]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateOscMember[P]> : Prisma.GetScalarType<T[P], AggregateOscMember[P]>;
};
export type OscMemberGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.OscMemberWhereInput;
    orderBy?: Prisma.OscMemberOrderByWithAggregationInput | Prisma.OscMemberOrderByWithAggregationInput[];
    by: Prisma.OscMemberScalarFieldEnum[] | Prisma.OscMemberScalarFieldEnum;
    having?: Prisma.OscMemberScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: OscMemberCountAggregateInputType | true;
    _avg?: OscMemberAvgAggregateInputType;
    _sum?: OscMemberSumAggregateInputType;
    _min?: OscMemberMinAggregateInputType;
    _max?: OscMemberMaxAggregateInputType;
};
export type OscMemberGroupByOutputType = {
    id: bigint;
    email: string;
    name: string;
    committeeId: bigint;
    seatId: bigint;
    newColumn: bigint | null;
    phone: string;
    role: string;
    _count: OscMemberCountAggregateOutputType | null;
    _avg: OscMemberAvgAggregateOutputType | null;
    _sum: OscMemberSumAggregateOutputType | null;
    _min: OscMemberMinAggregateOutputType | null;
    _max: OscMemberMaxAggregateOutputType | null;
};
export type GetOscMemberGroupByPayload<T extends OscMemberGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<OscMemberGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof OscMemberGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], OscMemberGroupByOutputType[P]> : Prisma.GetScalarType<T[P], OscMemberGroupByOutputType[P]>;
}>>;
export type OscMemberWhereInput = {
    AND?: Prisma.OscMemberWhereInput | Prisma.OscMemberWhereInput[];
    OR?: Prisma.OscMemberWhereInput[];
    NOT?: Prisma.OscMemberWhereInput | Prisma.OscMemberWhereInput[];
    id?: Prisma.BigIntFilter<"OscMember"> | bigint | number;
    email?: Prisma.StringFilter<"OscMember"> | string;
    name?: Prisma.StringFilter<"OscMember"> | string;
    committeeId?: Prisma.BigIntFilter<"OscMember"> | bigint | number;
    seatId?: Prisma.BigIntFilter<"OscMember"> | bigint | number;
    newColumn?: Prisma.BigIntNullableFilter<"OscMember"> | bigint | number | null;
    phone?: Prisma.StringFilter<"OscMember"> | string;
    role?: Prisma.StringFilter<"OscMember"> | string;
    committee?: Prisma.XOR<Prisma.CommitteeScalarRelationFilter, Prisma.CommitteeWhereInput>;
    phones?: Prisma.OscMemberPhoneListRelationFilter;
    panelMember?: Prisma.InterviewPanelListRelationFilter;
    schedule?: Prisma.InterviewScheduleListRelationFilter;
};
export type OscMemberOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    email?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    committeeId?: Prisma.SortOrder;
    seatId?: Prisma.SortOrder;
    newColumn?: Prisma.SortOrderInput | Prisma.SortOrder;
    phone?: Prisma.SortOrder;
    role?: Prisma.SortOrder;
    committee?: Prisma.CommitteeOrderByWithRelationInput;
    phones?: Prisma.OscMemberPhoneOrderByRelationAggregateInput;
    panelMember?: Prisma.InterviewPanelOrderByRelationAggregateInput;
    schedule?: Prisma.InterviewScheduleOrderByRelationAggregateInput;
};
export type OscMemberWhereUniqueInput = Prisma.AtLeast<{
    id?: bigint | number;
    AND?: Prisma.OscMemberWhereInput | Prisma.OscMemberWhereInput[];
    OR?: Prisma.OscMemberWhereInput[];
    NOT?: Prisma.OscMemberWhereInput | Prisma.OscMemberWhereInput[];
    email?: Prisma.StringFilter<"OscMember"> | string;
    name?: Prisma.StringFilter<"OscMember"> | string;
    committeeId?: Prisma.BigIntFilter<"OscMember"> | bigint | number;
    seatId?: Prisma.BigIntFilter<"OscMember"> | bigint | number;
    newColumn?: Prisma.BigIntNullableFilter<"OscMember"> | bigint | number | null;
    phone?: Prisma.StringFilter<"OscMember"> | string;
    role?: Prisma.StringFilter<"OscMember"> | string;
    committee?: Prisma.XOR<Prisma.CommitteeScalarRelationFilter, Prisma.CommitteeWhereInput>;
    phones?: Prisma.OscMemberPhoneListRelationFilter;
    panelMember?: Prisma.InterviewPanelListRelationFilter;
    schedule?: Prisma.InterviewScheduleListRelationFilter;
}, "id">;
export type OscMemberOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    email?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    committeeId?: Prisma.SortOrder;
    seatId?: Prisma.SortOrder;
    newColumn?: Prisma.SortOrderInput | Prisma.SortOrder;
    phone?: Prisma.SortOrder;
    role?: Prisma.SortOrder;
    _count?: Prisma.OscMemberCountOrderByAggregateInput;
    _avg?: Prisma.OscMemberAvgOrderByAggregateInput;
    _max?: Prisma.OscMemberMaxOrderByAggregateInput;
    _min?: Prisma.OscMemberMinOrderByAggregateInput;
    _sum?: Prisma.OscMemberSumOrderByAggregateInput;
};
export type OscMemberScalarWhereWithAggregatesInput = {
    AND?: Prisma.OscMemberScalarWhereWithAggregatesInput | Prisma.OscMemberScalarWhereWithAggregatesInput[];
    OR?: Prisma.OscMemberScalarWhereWithAggregatesInput[];
    NOT?: Prisma.OscMemberScalarWhereWithAggregatesInput | Prisma.OscMemberScalarWhereWithAggregatesInput[];
    id?: Prisma.BigIntWithAggregatesFilter<"OscMember"> | bigint | number;
    email?: Prisma.StringWithAggregatesFilter<"OscMember"> | string;
    name?: Prisma.StringWithAggregatesFilter<"OscMember"> | string;
    committeeId?: Prisma.BigIntWithAggregatesFilter<"OscMember"> | bigint | number;
    seatId?: Prisma.BigIntWithAggregatesFilter<"OscMember"> | bigint | number;
    newColumn?: Prisma.BigIntNullableWithAggregatesFilter<"OscMember"> | bigint | number | null;
    phone?: Prisma.StringWithAggregatesFilter<"OscMember"> | string;
    role?: Prisma.StringWithAggregatesFilter<"OscMember"> | string;
};
export type OscMemberCreateInput = {
    id?: bigint | number;
    email: string;
    name: string;
    seatId: bigint | number;
    newColumn?: bigint | number | null;
    phone: string;
    role: string;
    committee: Prisma.CommitteeCreateNestedOneWithoutOscMembersInput;
    phones?: Prisma.OscMemberPhoneCreateNestedManyWithoutOscMemberInput;
    panelMember?: Prisma.InterviewPanelCreateNestedManyWithoutOscMemberInput;
    schedule?: Prisma.InterviewScheduleCreateNestedManyWithoutOscMemberInput;
};
export type OscMemberUncheckedCreateInput = {
    id?: bigint | number;
    email: string;
    name: string;
    committeeId: bigint | number;
    seatId: bigint | number;
    newColumn?: bigint | number | null;
    phone: string;
    role: string;
    phones?: Prisma.OscMemberPhoneUncheckedCreateNestedManyWithoutOscMemberInput;
    panelMember?: Prisma.InterviewPanelUncheckedCreateNestedManyWithoutOscMemberInput;
    schedule?: Prisma.InterviewScheduleUncheckedCreateNestedManyWithoutOscMemberInput;
};
export type OscMemberUpdateInput = {
    id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    seatId?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    newColumn?: Prisma.NullableBigIntFieldUpdateOperationsInput | bigint | number | null;
    phone?: Prisma.StringFieldUpdateOperationsInput | string;
    role?: Prisma.StringFieldUpdateOperationsInput | string;
    committee?: Prisma.CommitteeUpdateOneRequiredWithoutOscMembersNestedInput;
    phones?: Prisma.OscMemberPhoneUpdateManyWithoutOscMemberNestedInput;
    panelMember?: Prisma.InterviewPanelUpdateManyWithoutOscMemberNestedInput;
    schedule?: Prisma.InterviewScheduleUpdateManyWithoutOscMemberNestedInput;
};
export type OscMemberUncheckedUpdateInput = {
    id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    committeeId?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    seatId?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    newColumn?: Prisma.NullableBigIntFieldUpdateOperationsInput | bigint | number | null;
    phone?: Prisma.StringFieldUpdateOperationsInput | string;
    role?: Prisma.StringFieldUpdateOperationsInput | string;
    phones?: Prisma.OscMemberPhoneUncheckedUpdateManyWithoutOscMemberNestedInput;
    panelMember?: Prisma.InterviewPanelUncheckedUpdateManyWithoutOscMemberNestedInput;
    schedule?: Prisma.InterviewScheduleUncheckedUpdateManyWithoutOscMemberNestedInput;
};
export type OscMemberCreateManyInput = {
    id?: bigint | number;
    email: string;
    name: string;
    committeeId: bigint | number;
    seatId: bigint | number;
    newColumn?: bigint | number | null;
    phone: string;
    role: string;
};
export type OscMemberUpdateManyMutationInput = {
    id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    seatId?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    newColumn?: Prisma.NullableBigIntFieldUpdateOperationsInput | bigint | number | null;
    phone?: Prisma.StringFieldUpdateOperationsInput | string;
    role?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type OscMemberUncheckedUpdateManyInput = {
    id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    committeeId?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    seatId?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    newColumn?: Prisma.NullableBigIntFieldUpdateOperationsInput | bigint | number | null;
    phone?: Prisma.StringFieldUpdateOperationsInput | string;
    role?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type OscMemberListRelationFilter = {
    every?: Prisma.OscMemberWhereInput;
    some?: Prisma.OscMemberWhereInput;
    none?: Prisma.OscMemberWhereInput;
};
export type OscMemberOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type OscMemberCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    email?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    committeeId?: Prisma.SortOrder;
    seatId?: Prisma.SortOrder;
    newColumn?: Prisma.SortOrder;
    phone?: Prisma.SortOrder;
    role?: Prisma.SortOrder;
};
export type OscMemberAvgOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    committeeId?: Prisma.SortOrder;
    seatId?: Prisma.SortOrder;
    newColumn?: Prisma.SortOrder;
};
export type OscMemberMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    email?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    committeeId?: Prisma.SortOrder;
    seatId?: Prisma.SortOrder;
    newColumn?: Prisma.SortOrder;
    phone?: Prisma.SortOrder;
    role?: Prisma.SortOrder;
};
export type OscMemberMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    email?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    committeeId?: Prisma.SortOrder;
    seatId?: Prisma.SortOrder;
    newColumn?: Prisma.SortOrder;
    phone?: Prisma.SortOrder;
    role?: Prisma.SortOrder;
};
export type OscMemberSumOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    committeeId?: Prisma.SortOrder;
    seatId?: Prisma.SortOrder;
    newColumn?: Prisma.SortOrder;
};
export type OscMemberScalarRelationFilter = {
    is?: Prisma.OscMemberWhereInput;
    isNot?: Prisma.OscMemberWhereInput;
};
export type OscMemberCreateNestedManyWithoutCommitteeInput = {
    create?: Prisma.XOR<Prisma.OscMemberCreateWithoutCommitteeInput, Prisma.OscMemberUncheckedCreateWithoutCommitteeInput> | Prisma.OscMemberCreateWithoutCommitteeInput[] | Prisma.OscMemberUncheckedCreateWithoutCommitteeInput[];
    connectOrCreate?: Prisma.OscMemberCreateOrConnectWithoutCommitteeInput | Prisma.OscMemberCreateOrConnectWithoutCommitteeInput[];
    createMany?: Prisma.OscMemberCreateManyCommitteeInputEnvelope;
    connect?: Prisma.OscMemberWhereUniqueInput | Prisma.OscMemberWhereUniqueInput[];
};
export type OscMemberUncheckedCreateNestedManyWithoutCommitteeInput = {
    create?: Prisma.XOR<Prisma.OscMemberCreateWithoutCommitteeInput, Prisma.OscMemberUncheckedCreateWithoutCommitteeInput> | Prisma.OscMemberCreateWithoutCommitteeInput[] | Prisma.OscMemberUncheckedCreateWithoutCommitteeInput[];
    connectOrCreate?: Prisma.OscMemberCreateOrConnectWithoutCommitteeInput | Prisma.OscMemberCreateOrConnectWithoutCommitteeInput[];
    createMany?: Prisma.OscMemberCreateManyCommitteeInputEnvelope;
    connect?: Prisma.OscMemberWhereUniqueInput | Prisma.OscMemberWhereUniqueInput[];
};
export type OscMemberUpdateManyWithoutCommitteeNestedInput = {
    create?: Prisma.XOR<Prisma.OscMemberCreateWithoutCommitteeInput, Prisma.OscMemberUncheckedCreateWithoutCommitteeInput> | Prisma.OscMemberCreateWithoutCommitteeInput[] | Prisma.OscMemberUncheckedCreateWithoutCommitteeInput[];
    connectOrCreate?: Prisma.OscMemberCreateOrConnectWithoutCommitteeInput | Prisma.OscMemberCreateOrConnectWithoutCommitteeInput[];
    upsert?: Prisma.OscMemberUpsertWithWhereUniqueWithoutCommitteeInput | Prisma.OscMemberUpsertWithWhereUniqueWithoutCommitteeInput[];
    createMany?: Prisma.OscMemberCreateManyCommitteeInputEnvelope;
    set?: Prisma.OscMemberWhereUniqueInput | Prisma.OscMemberWhereUniqueInput[];
    disconnect?: Prisma.OscMemberWhereUniqueInput | Prisma.OscMemberWhereUniqueInput[];
    delete?: Prisma.OscMemberWhereUniqueInput | Prisma.OscMemberWhereUniqueInput[];
    connect?: Prisma.OscMemberWhereUniqueInput | Prisma.OscMemberWhereUniqueInput[];
    update?: Prisma.OscMemberUpdateWithWhereUniqueWithoutCommitteeInput | Prisma.OscMemberUpdateWithWhereUniqueWithoutCommitteeInput[];
    updateMany?: Prisma.OscMemberUpdateManyWithWhereWithoutCommitteeInput | Prisma.OscMemberUpdateManyWithWhereWithoutCommitteeInput[];
    deleteMany?: Prisma.OscMemberScalarWhereInput | Prisma.OscMemberScalarWhereInput[];
};
export type OscMemberUncheckedUpdateManyWithoutCommitteeNestedInput = {
    create?: Prisma.XOR<Prisma.OscMemberCreateWithoutCommitteeInput, Prisma.OscMemberUncheckedCreateWithoutCommitteeInput> | Prisma.OscMemberCreateWithoutCommitteeInput[] | Prisma.OscMemberUncheckedCreateWithoutCommitteeInput[];
    connectOrCreate?: Prisma.OscMemberCreateOrConnectWithoutCommitteeInput | Prisma.OscMemberCreateOrConnectWithoutCommitteeInput[];
    upsert?: Prisma.OscMemberUpsertWithWhereUniqueWithoutCommitteeInput | Prisma.OscMemberUpsertWithWhereUniqueWithoutCommitteeInput[];
    createMany?: Prisma.OscMemberCreateManyCommitteeInputEnvelope;
    set?: Prisma.OscMemberWhereUniqueInput | Prisma.OscMemberWhereUniqueInput[];
    disconnect?: Prisma.OscMemberWhereUniqueInput | Prisma.OscMemberWhereUniqueInput[];
    delete?: Prisma.OscMemberWhereUniqueInput | Prisma.OscMemberWhereUniqueInput[];
    connect?: Prisma.OscMemberWhereUniqueInput | Prisma.OscMemberWhereUniqueInput[];
    update?: Prisma.OscMemberUpdateWithWhereUniqueWithoutCommitteeInput | Prisma.OscMemberUpdateWithWhereUniqueWithoutCommitteeInput[];
    updateMany?: Prisma.OscMemberUpdateManyWithWhereWithoutCommitteeInput | Prisma.OscMemberUpdateManyWithWhereWithoutCommitteeInput[];
    deleteMany?: Prisma.OscMemberScalarWhereInput | Prisma.OscMemberScalarWhereInput[];
};
export type NullableBigIntFieldUpdateOperationsInput = {
    set?: bigint | number | null;
    increment?: bigint | number;
    decrement?: bigint | number;
    multiply?: bigint | number;
    divide?: bigint | number;
};
export type OscMemberCreateNestedOneWithoutPhonesInput = {
    create?: Prisma.XOR<Prisma.OscMemberCreateWithoutPhonesInput, Prisma.OscMemberUncheckedCreateWithoutPhonesInput>;
    connectOrCreate?: Prisma.OscMemberCreateOrConnectWithoutPhonesInput;
    connect?: Prisma.OscMemberWhereUniqueInput;
};
export type OscMemberUpdateOneRequiredWithoutPhonesNestedInput = {
    create?: Prisma.XOR<Prisma.OscMemberCreateWithoutPhonesInput, Prisma.OscMemberUncheckedCreateWithoutPhonesInput>;
    connectOrCreate?: Prisma.OscMemberCreateOrConnectWithoutPhonesInput;
    upsert?: Prisma.OscMemberUpsertWithoutPhonesInput;
    connect?: Prisma.OscMemberWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.OscMemberUpdateToOneWithWhereWithoutPhonesInput, Prisma.OscMemberUpdateWithoutPhonesInput>, Prisma.OscMemberUncheckedUpdateWithoutPhonesInput>;
};
export type OscMemberCreateNestedOneWithoutPanelMemberInput = {
    create?: Prisma.XOR<Prisma.OscMemberCreateWithoutPanelMemberInput, Prisma.OscMemberUncheckedCreateWithoutPanelMemberInput>;
    connectOrCreate?: Prisma.OscMemberCreateOrConnectWithoutPanelMemberInput;
    connect?: Prisma.OscMemberWhereUniqueInput;
};
export type OscMemberUpdateOneRequiredWithoutPanelMemberNestedInput = {
    create?: Prisma.XOR<Prisma.OscMemberCreateWithoutPanelMemberInput, Prisma.OscMemberUncheckedCreateWithoutPanelMemberInput>;
    connectOrCreate?: Prisma.OscMemberCreateOrConnectWithoutPanelMemberInput;
    upsert?: Prisma.OscMemberUpsertWithoutPanelMemberInput;
    connect?: Prisma.OscMemberWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.OscMemberUpdateToOneWithWhereWithoutPanelMemberInput, Prisma.OscMemberUpdateWithoutPanelMemberInput>, Prisma.OscMemberUncheckedUpdateWithoutPanelMemberInput>;
};
export type OscMemberCreateNestedOneWithoutScheduleInput = {
    create?: Prisma.XOR<Prisma.OscMemberCreateWithoutScheduleInput, Prisma.OscMemberUncheckedCreateWithoutScheduleInput>;
    connectOrCreate?: Prisma.OscMemberCreateOrConnectWithoutScheduleInput;
    connect?: Prisma.OscMemberWhereUniqueInput;
};
export type OscMemberUpdateOneRequiredWithoutScheduleNestedInput = {
    create?: Prisma.XOR<Prisma.OscMemberCreateWithoutScheduleInput, Prisma.OscMemberUncheckedCreateWithoutScheduleInput>;
    connectOrCreate?: Prisma.OscMemberCreateOrConnectWithoutScheduleInput;
    upsert?: Prisma.OscMemberUpsertWithoutScheduleInput;
    connect?: Prisma.OscMemberWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.OscMemberUpdateToOneWithWhereWithoutScheduleInput, Prisma.OscMemberUpdateWithoutScheduleInput>, Prisma.OscMemberUncheckedUpdateWithoutScheduleInput>;
};
export type OscMemberCreateWithoutCommitteeInput = {
    id?: bigint | number;
    email: string;
    name: string;
    seatId: bigint | number;
    newColumn?: bigint | number | null;
    phone: string;
    role: string;
    phones?: Prisma.OscMemberPhoneCreateNestedManyWithoutOscMemberInput;
    panelMember?: Prisma.InterviewPanelCreateNestedManyWithoutOscMemberInput;
    schedule?: Prisma.InterviewScheduleCreateNestedManyWithoutOscMemberInput;
};
export type OscMemberUncheckedCreateWithoutCommitteeInput = {
    id?: bigint | number;
    email: string;
    name: string;
    seatId: bigint | number;
    newColumn?: bigint | number | null;
    phone: string;
    role: string;
    phones?: Prisma.OscMemberPhoneUncheckedCreateNestedManyWithoutOscMemberInput;
    panelMember?: Prisma.InterviewPanelUncheckedCreateNestedManyWithoutOscMemberInput;
    schedule?: Prisma.InterviewScheduleUncheckedCreateNestedManyWithoutOscMemberInput;
};
export type OscMemberCreateOrConnectWithoutCommitteeInput = {
    where: Prisma.OscMemberWhereUniqueInput;
    create: Prisma.XOR<Prisma.OscMemberCreateWithoutCommitteeInput, Prisma.OscMemberUncheckedCreateWithoutCommitteeInput>;
};
export type OscMemberCreateManyCommitteeInputEnvelope = {
    data: Prisma.OscMemberCreateManyCommitteeInput | Prisma.OscMemberCreateManyCommitteeInput[];
    skipDuplicates?: boolean;
};
export type OscMemberUpsertWithWhereUniqueWithoutCommitteeInput = {
    where: Prisma.OscMemberWhereUniqueInput;
    update: Prisma.XOR<Prisma.OscMemberUpdateWithoutCommitteeInput, Prisma.OscMemberUncheckedUpdateWithoutCommitteeInput>;
    create: Prisma.XOR<Prisma.OscMemberCreateWithoutCommitteeInput, Prisma.OscMemberUncheckedCreateWithoutCommitteeInput>;
};
export type OscMemberUpdateWithWhereUniqueWithoutCommitteeInput = {
    where: Prisma.OscMemberWhereUniqueInput;
    data: Prisma.XOR<Prisma.OscMemberUpdateWithoutCommitteeInput, Prisma.OscMemberUncheckedUpdateWithoutCommitteeInput>;
};
export type OscMemberUpdateManyWithWhereWithoutCommitteeInput = {
    where: Prisma.OscMemberScalarWhereInput;
    data: Prisma.XOR<Prisma.OscMemberUpdateManyMutationInput, Prisma.OscMemberUncheckedUpdateManyWithoutCommitteeInput>;
};
export type OscMemberScalarWhereInput = {
    AND?: Prisma.OscMemberScalarWhereInput | Prisma.OscMemberScalarWhereInput[];
    OR?: Prisma.OscMemberScalarWhereInput[];
    NOT?: Prisma.OscMemberScalarWhereInput | Prisma.OscMemberScalarWhereInput[];
    id?: Prisma.BigIntFilter<"OscMember"> | bigint | number;
    email?: Prisma.StringFilter<"OscMember"> | string;
    name?: Prisma.StringFilter<"OscMember"> | string;
    committeeId?: Prisma.BigIntFilter<"OscMember"> | bigint | number;
    seatId?: Prisma.BigIntFilter<"OscMember"> | bigint | number;
    newColumn?: Prisma.BigIntNullableFilter<"OscMember"> | bigint | number | null;
    phone?: Prisma.StringFilter<"OscMember"> | string;
    role?: Prisma.StringFilter<"OscMember"> | string;
};
export type OscMemberCreateWithoutPhonesInput = {
    id?: bigint | number;
    email: string;
    name: string;
    seatId: bigint | number;
    newColumn?: bigint | number | null;
    phone: string;
    role: string;
    committee: Prisma.CommitteeCreateNestedOneWithoutOscMembersInput;
    panelMember?: Prisma.InterviewPanelCreateNestedManyWithoutOscMemberInput;
    schedule?: Prisma.InterviewScheduleCreateNestedManyWithoutOscMemberInput;
};
export type OscMemberUncheckedCreateWithoutPhonesInput = {
    id?: bigint | number;
    email: string;
    name: string;
    committeeId: bigint | number;
    seatId: bigint | number;
    newColumn?: bigint | number | null;
    phone: string;
    role: string;
    panelMember?: Prisma.InterviewPanelUncheckedCreateNestedManyWithoutOscMemberInput;
    schedule?: Prisma.InterviewScheduleUncheckedCreateNestedManyWithoutOscMemberInput;
};
export type OscMemberCreateOrConnectWithoutPhonesInput = {
    where: Prisma.OscMemberWhereUniqueInput;
    create: Prisma.XOR<Prisma.OscMemberCreateWithoutPhonesInput, Prisma.OscMemberUncheckedCreateWithoutPhonesInput>;
};
export type OscMemberUpsertWithoutPhonesInput = {
    update: Prisma.XOR<Prisma.OscMemberUpdateWithoutPhonesInput, Prisma.OscMemberUncheckedUpdateWithoutPhonesInput>;
    create: Prisma.XOR<Prisma.OscMemberCreateWithoutPhonesInput, Prisma.OscMemberUncheckedCreateWithoutPhonesInput>;
    where?: Prisma.OscMemberWhereInput;
};
export type OscMemberUpdateToOneWithWhereWithoutPhonesInput = {
    where?: Prisma.OscMemberWhereInput;
    data: Prisma.XOR<Prisma.OscMemberUpdateWithoutPhonesInput, Prisma.OscMemberUncheckedUpdateWithoutPhonesInput>;
};
export type OscMemberUpdateWithoutPhonesInput = {
    id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    seatId?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    newColumn?: Prisma.NullableBigIntFieldUpdateOperationsInput | bigint | number | null;
    phone?: Prisma.StringFieldUpdateOperationsInput | string;
    role?: Prisma.StringFieldUpdateOperationsInput | string;
    committee?: Prisma.CommitteeUpdateOneRequiredWithoutOscMembersNestedInput;
    panelMember?: Prisma.InterviewPanelUpdateManyWithoutOscMemberNestedInput;
    schedule?: Prisma.InterviewScheduleUpdateManyWithoutOscMemberNestedInput;
};
export type OscMemberUncheckedUpdateWithoutPhonesInput = {
    id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    committeeId?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    seatId?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    newColumn?: Prisma.NullableBigIntFieldUpdateOperationsInput | bigint | number | null;
    phone?: Prisma.StringFieldUpdateOperationsInput | string;
    role?: Prisma.StringFieldUpdateOperationsInput | string;
    panelMember?: Prisma.InterviewPanelUncheckedUpdateManyWithoutOscMemberNestedInput;
    schedule?: Prisma.InterviewScheduleUncheckedUpdateManyWithoutOscMemberNestedInput;
};
export type OscMemberCreateWithoutPanelMemberInput = {
    id?: bigint | number;
    email: string;
    name: string;
    seatId: bigint | number;
    newColumn?: bigint | number | null;
    phone: string;
    role: string;
    committee: Prisma.CommitteeCreateNestedOneWithoutOscMembersInput;
    phones?: Prisma.OscMemberPhoneCreateNestedManyWithoutOscMemberInput;
    schedule?: Prisma.InterviewScheduleCreateNestedManyWithoutOscMemberInput;
};
export type OscMemberUncheckedCreateWithoutPanelMemberInput = {
    id?: bigint | number;
    email: string;
    name: string;
    committeeId: bigint | number;
    seatId: bigint | number;
    newColumn?: bigint | number | null;
    phone: string;
    role: string;
    phones?: Prisma.OscMemberPhoneUncheckedCreateNestedManyWithoutOscMemberInput;
    schedule?: Prisma.InterviewScheduleUncheckedCreateNestedManyWithoutOscMemberInput;
};
export type OscMemberCreateOrConnectWithoutPanelMemberInput = {
    where: Prisma.OscMemberWhereUniqueInput;
    create: Prisma.XOR<Prisma.OscMemberCreateWithoutPanelMemberInput, Prisma.OscMemberUncheckedCreateWithoutPanelMemberInput>;
};
export type OscMemberUpsertWithoutPanelMemberInput = {
    update: Prisma.XOR<Prisma.OscMemberUpdateWithoutPanelMemberInput, Prisma.OscMemberUncheckedUpdateWithoutPanelMemberInput>;
    create: Prisma.XOR<Prisma.OscMemberCreateWithoutPanelMemberInput, Prisma.OscMemberUncheckedCreateWithoutPanelMemberInput>;
    where?: Prisma.OscMemberWhereInput;
};
export type OscMemberUpdateToOneWithWhereWithoutPanelMemberInput = {
    where?: Prisma.OscMemberWhereInput;
    data: Prisma.XOR<Prisma.OscMemberUpdateWithoutPanelMemberInput, Prisma.OscMemberUncheckedUpdateWithoutPanelMemberInput>;
};
export type OscMemberUpdateWithoutPanelMemberInput = {
    id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    seatId?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    newColumn?: Prisma.NullableBigIntFieldUpdateOperationsInput | bigint | number | null;
    phone?: Prisma.StringFieldUpdateOperationsInput | string;
    role?: Prisma.StringFieldUpdateOperationsInput | string;
    committee?: Prisma.CommitteeUpdateOneRequiredWithoutOscMembersNestedInput;
    phones?: Prisma.OscMemberPhoneUpdateManyWithoutOscMemberNestedInput;
    schedule?: Prisma.InterviewScheduleUpdateManyWithoutOscMemberNestedInput;
};
export type OscMemberUncheckedUpdateWithoutPanelMemberInput = {
    id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    committeeId?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    seatId?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    newColumn?: Prisma.NullableBigIntFieldUpdateOperationsInput | bigint | number | null;
    phone?: Prisma.StringFieldUpdateOperationsInput | string;
    role?: Prisma.StringFieldUpdateOperationsInput | string;
    phones?: Prisma.OscMemberPhoneUncheckedUpdateManyWithoutOscMemberNestedInput;
    schedule?: Prisma.InterviewScheduleUncheckedUpdateManyWithoutOscMemberNestedInput;
};
export type OscMemberCreateWithoutScheduleInput = {
    id?: bigint | number;
    email: string;
    name: string;
    seatId: bigint | number;
    newColumn?: bigint | number | null;
    phone: string;
    role: string;
    committee: Prisma.CommitteeCreateNestedOneWithoutOscMembersInput;
    phones?: Prisma.OscMemberPhoneCreateNestedManyWithoutOscMemberInput;
    panelMember?: Prisma.InterviewPanelCreateNestedManyWithoutOscMemberInput;
};
export type OscMemberUncheckedCreateWithoutScheduleInput = {
    id?: bigint | number;
    email: string;
    name: string;
    committeeId: bigint | number;
    seatId: bigint | number;
    newColumn?: bigint | number | null;
    phone: string;
    role: string;
    phones?: Prisma.OscMemberPhoneUncheckedCreateNestedManyWithoutOscMemberInput;
    panelMember?: Prisma.InterviewPanelUncheckedCreateNestedManyWithoutOscMemberInput;
};
export type OscMemberCreateOrConnectWithoutScheduleInput = {
    where: Prisma.OscMemberWhereUniqueInput;
    create: Prisma.XOR<Prisma.OscMemberCreateWithoutScheduleInput, Prisma.OscMemberUncheckedCreateWithoutScheduleInput>;
};
export type OscMemberUpsertWithoutScheduleInput = {
    update: Prisma.XOR<Prisma.OscMemberUpdateWithoutScheduleInput, Prisma.OscMemberUncheckedUpdateWithoutScheduleInput>;
    create: Prisma.XOR<Prisma.OscMemberCreateWithoutScheduleInput, Prisma.OscMemberUncheckedCreateWithoutScheduleInput>;
    where?: Prisma.OscMemberWhereInput;
};
export type OscMemberUpdateToOneWithWhereWithoutScheduleInput = {
    where?: Prisma.OscMemberWhereInput;
    data: Prisma.XOR<Prisma.OscMemberUpdateWithoutScheduleInput, Prisma.OscMemberUncheckedUpdateWithoutScheduleInput>;
};
export type OscMemberUpdateWithoutScheduleInput = {
    id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    seatId?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    newColumn?: Prisma.NullableBigIntFieldUpdateOperationsInput | bigint | number | null;
    phone?: Prisma.StringFieldUpdateOperationsInput | string;
    role?: Prisma.StringFieldUpdateOperationsInput | string;
    committee?: Prisma.CommitteeUpdateOneRequiredWithoutOscMembersNestedInput;
    phones?: Prisma.OscMemberPhoneUpdateManyWithoutOscMemberNestedInput;
    panelMember?: Prisma.InterviewPanelUpdateManyWithoutOscMemberNestedInput;
};
export type OscMemberUncheckedUpdateWithoutScheduleInput = {
    id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    committeeId?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    seatId?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    newColumn?: Prisma.NullableBigIntFieldUpdateOperationsInput | bigint | number | null;
    phone?: Prisma.StringFieldUpdateOperationsInput | string;
    role?: Prisma.StringFieldUpdateOperationsInput | string;
    phones?: Prisma.OscMemberPhoneUncheckedUpdateManyWithoutOscMemberNestedInput;
    panelMember?: Prisma.InterviewPanelUncheckedUpdateManyWithoutOscMemberNestedInput;
};
export type OscMemberCreateManyCommitteeInput = {
    id?: bigint | number;
    email: string;
    name: string;
    seatId: bigint | number;
    newColumn?: bigint | number | null;
    phone: string;
    role: string;
};
export type OscMemberUpdateWithoutCommitteeInput = {
    id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    seatId?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    newColumn?: Prisma.NullableBigIntFieldUpdateOperationsInput | bigint | number | null;
    phone?: Prisma.StringFieldUpdateOperationsInput | string;
    role?: Prisma.StringFieldUpdateOperationsInput | string;
    phones?: Prisma.OscMemberPhoneUpdateManyWithoutOscMemberNestedInput;
    panelMember?: Prisma.InterviewPanelUpdateManyWithoutOscMemberNestedInput;
    schedule?: Prisma.InterviewScheduleUpdateManyWithoutOscMemberNestedInput;
};
export type OscMemberUncheckedUpdateWithoutCommitteeInput = {
    id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    seatId?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    newColumn?: Prisma.NullableBigIntFieldUpdateOperationsInput | bigint | number | null;
    phone?: Prisma.StringFieldUpdateOperationsInput | string;
    role?: Prisma.StringFieldUpdateOperationsInput | string;
    phones?: Prisma.OscMemberPhoneUncheckedUpdateManyWithoutOscMemberNestedInput;
    panelMember?: Prisma.InterviewPanelUncheckedUpdateManyWithoutOscMemberNestedInput;
    schedule?: Prisma.InterviewScheduleUncheckedUpdateManyWithoutOscMemberNestedInput;
};
export type OscMemberUncheckedUpdateManyWithoutCommitteeInput = {
    id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    seatId?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    newColumn?: Prisma.NullableBigIntFieldUpdateOperationsInput | bigint | number | null;
    phone?: Prisma.StringFieldUpdateOperationsInput | string;
    role?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type OscMemberCountOutputType = {
    phones: number;
    panelMember: number;
    schedule: number;
};
export type OscMemberCountOutputTypeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    phones?: boolean | OscMemberCountOutputTypeCountPhonesArgs;
    panelMember?: boolean | OscMemberCountOutputTypeCountPanelMemberArgs;
    schedule?: boolean | OscMemberCountOutputTypeCountScheduleArgs;
};
export type OscMemberCountOutputTypeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.OscMemberCountOutputTypeSelect<ExtArgs> | null;
};
export type OscMemberCountOutputTypeCountPhonesArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.OscMemberPhoneWhereInput;
};
export type OscMemberCountOutputTypeCountPanelMemberArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.InterviewPanelWhereInput;
};
export type OscMemberCountOutputTypeCountScheduleArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.InterviewScheduleWhereInput;
};
export type OscMemberSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    email?: boolean;
    name?: boolean;
    committeeId?: boolean;
    seatId?: boolean;
    newColumn?: boolean;
    phone?: boolean;
    role?: boolean;
    committee?: boolean | Prisma.CommitteeDefaultArgs<ExtArgs>;
    phones?: boolean | Prisma.OscMember$phonesArgs<ExtArgs>;
    panelMember?: boolean | Prisma.OscMember$panelMemberArgs<ExtArgs>;
    schedule?: boolean | Prisma.OscMember$scheduleArgs<ExtArgs>;
    _count?: boolean | Prisma.OscMemberCountOutputTypeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["oscMember"]>;
export type OscMemberSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    email?: boolean;
    name?: boolean;
    committeeId?: boolean;
    seatId?: boolean;
    newColumn?: boolean;
    phone?: boolean;
    role?: boolean;
    committee?: boolean | Prisma.CommitteeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["oscMember"]>;
export type OscMemberSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    email?: boolean;
    name?: boolean;
    committeeId?: boolean;
    seatId?: boolean;
    newColumn?: boolean;
    phone?: boolean;
    role?: boolean;
    committee?: boolean | Prisma.CommitteeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["oscMember"]>;
export type OscMemberSelectScalar = {
    id?: boolean;
    email?: boolean;
    name?: boolean;
    committeeId?: boolean;
    seatId?: boolean;
    newColumn?: boolean;
    phone?: boolean;
    role?: boolean;
};
export type OscMemberOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "email" | "name" | "committeeId" | "seatId" | "newColumn" | "phone" | "role", ExtArgs["result"]["oscMember"]>;
export type OscMemberInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    committee?: boolean | Prisma.CommitteeDefaultArgs<ExtArgs>;
    phones?: boolean | Prisma.OscMember$phonesArgs<ExtArgs>;
    panelMember?: boolean | Prisma.OscMember$panelMemberArgs<ExtArgs>;
    schedule?: boolean | Prisma.OscMember$scheduleArgs<ExtArgs>;
    _count?: boolean | Prisma.OscMemberCountOutputTypeDefaultArgs<ExtArgs>;
};
export type OscMemberIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    committee?: boolean | Prisma.CommitteeDefaultArgs<ExtArgs>;
};
export type OscMemberIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    committee?: boolean | Prisma.CommitteeDefaultArgs<ExtArgs>;
};
export type $OscMemberPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "OscMember";
    objects: {
        committee: Prisma.$CommitteePayload<ExtArgs>;
        phones: Prisma.$OscMemberPhonePayload<ExtArgs>[];
        panelMember: Prisma.$InterviewPanelPayload<ExtArgs>[];
        schedule: Prisma.$InterviewSchedulePayload<ExtArgs>[];
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: bigint;
        email: string;
        name: string;
        committeeId: bigint;
        seatId: bigint;
        newColumn: bigint | null;
        phone: string;
        role: string;
    }, ExtArgs["result"]["oscMember"]>;
    composites: {};
};
export type OscMemberGetPayload<S extends boolean | null | undefined | OscMemberDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$OscMemberPayload, S>;
export type OscMemberCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<OscMemberFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: OscMemberCountAggregateInputType | true;
};
export interface OscMemberDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['OscMember'];
        meta: {
            name: 'OscMember';
        };
    };
    findUnique<T extends OscMemberFindUniqueArgs>(args: Prisma.SelectSubset<T, OscMemberFindUniqueArgs<ExtArgs>>): Prisma.Prisma__OscMemberClient<runtime.Types.Result.GetResult<Prisma.$OscMemberPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends OscMemberFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, OscMemberFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__OscMemberClient<runtime.Types.Result.GetResult<Prisma.$OscMemberPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends OscMemberFindFirstArgs>(args?: Prisma.SelectSubset<T, OscMemberFindFirstArgs<ExtArgs>>): Prisma.Prisma__OscMemberClient<runtime.Types.Result.GetResult<Prisma.$OscMemberPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends OscMemberFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, OscMemberFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__OscMemberClient<runtime.Types.Result.GetResult<Prisma.$OscMemberPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends OscMemberFindManyArgs>(args?: Prisma.SelectSubset<T, OscMemberFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$OscMemberPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends OscMemberCreateArgs>(args: Prisma.SelectSubset<T, OscMemberCreateArgs<ExtArgs>>): Prisma.Prisma__OscMemberClient<runtime.Types.Result.GetResult<Prisma.$OscMemberPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends OscMemberCreateManyArgs>(args?: Prisma.SelectSubset<T, OscMemberCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends OscMemberCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, OscMemberCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$OscMemberPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends OscMemberDeleteArgs>(args: Prisma.SelectSubset<T, OscMemberDeleteArgs<ExtArgs>>): Prisma.Prisma__OscMemberClient<runtime.Types.Result.GetResult<Prisma.$OscMemberPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends OscMemberUpdateArgs>(args: Prisma.SelectSubset<T, OscMemberUpdateArgs<ExtArgs>>): Prisma.Prisma__OscMemberClient<runtime.Types.Result.GetResult<Prisma.$OscMemberPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends OscMemberDeleteManyArgs>(args?: Prisma.SelectSubset<T, OscMemberDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends OscMemberUpdateManyArgs>(args: Prisma.SelectSubset<T, OscMemberUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends OscMemberUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, OscMemberUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$OscMemberPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends OscMemberUpsertArgs>(args: Prisma.SelectSubset<T, OscMemberUpsertArgs<ExtArgs>>): Prisma.Prisma__OscMemberClient<runtime.Types.Result.GetResult<Prisma.$OscMemberPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends OscMemberCountArgs>(args?: Prisma.Subset<T, OscMemberCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], OscMemberCountAggregateOutputType> : number>;
    aggregate<T extends OscMemberAggregateArgs>(args: Prisma.Subset<T, OscMemberAggregateArgs>): Prisma.PrismaPromise<GetOscMemberAggregateType<T>>;
    groupBy<T extends OscMemberGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: OscMemberGroupByArgs['orderBy'];
    } : {
        orderBy?: OscMemberGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, OscMemberGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetOscMemberGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: OscMemberFieldRefs;
}
export interface Prisma__OscMemberClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    committee<T extends Prisma.CommitteeDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.CommitteeDefaultArgs<ExtArgs>>): Prisma.Prisma__CommitteeClient<runtime.Types.Result.GetResult<Prisma.$CommitteePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    phones<T extends Prisma.OscMember$phonesArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.OscMember$phonesArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$OscMemberPhonePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    panelMember<T extends Prisma.OscMember$panelMemberArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.OscMember$panelMemberArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$InterviewPanelPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    schedule<T extends Prisma.OscMember$scheduleArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.OscMember$scheduleArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$InterviewSchedulePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface OscMemberFieldRefs {
    readonly id: Prisma.FieldRef<"OscMember", 'BigInt'>;
    readonly email: Prisma.FieldRef<"OscMember", 'String'>;
    readonly name: Prisma.FieldRef<"OscMember", 'String'>;
    readonly committeeId: Prisma.FieldRef<"OscMember", 'BigInt'>;
    readonly seatId: Prisma.FieldRef<"OscMember", 'BigInt'>;
    readonly newColumn: Prisma.FieldRef<"OscMember", 'BigInt'>;
    readonly phone: Prisma.FieldRef<"OscMember", 'String'>;
    readonly role: Prisma.FieldRef<"OscMember", 'String'>;
}
export type OscMemberFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.OscMemberSelect<ExtArgs> | null;
    omit?: Prisma.OscMemberOmit<ExtArgs> | null;
    include?: Prisma.OscMemberInclude<ExtArgs> | null;
    where: Prisma.OscMemberWhereUniqueInput;
};
export type OscMemberFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.OscMemberSelect<ExtArgs> | null;
    omit?: Prisma.OscMemberOmit<ExtArgs> | null;
    include?: Prisma.OscMemberInclude<ExtArgs> | null;
    where: Prisma.OscMemberWhereUniqueInput;
};
export type OscMemberFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type OscMemberFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type OscMemberFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type OscMemberCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.OscMemberSelect<ExtArgs> | null;
    omit?: Prisma.OscMemberOmit<ExtArgs> | null;
    include?: Prisma.OscMemberInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.OscMemberCreateInput, Prisma.OscMemberUncheckedCreateInput>;
};
export type OscMemberCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.OscMemberCreateManyInput | Prisma.OscMemberCreateManyInput[];
    skipDuplicates?: boolean;
};
export type OscMemberCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.OscMemberSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.OscMemberOmit<ExtArgs> | null;
    data: Prisma.OscMemberCreateManyInput | Prisma.OscMemberCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.OscMemberIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type OscMemberUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.OscMemberSelect<ExtArgs> | null;
    omit?: Prisma.OscMemberOmit<ExtArgs> | null;
    include?: Prisma.OscMemberInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.OscMemberUpdateInput, Prisma.OscMemberUncheckedUpdateInput>;
    where: Prisma.OscMemberWhereUniqueInput;
};
export type OscMemberUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.OscMemberUpdateManyMutationInput, Prisma.OscMemberUncheckedUpdateManyInput>;
    where?: Prisma.OscMemberWhereInput;
    limit?: number;
};
export type OscMemberUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.OscMemberSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.OscMemberOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.OscMemberUpdateManyMutationInput, Prisma.OscMemberUncheckedUpdateManyInput>;
    where?: Prisma.OscMemberWhereInput;
    limit?: number;
    include?: Prisma.OscMemberIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type OscMemberUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.OscMemberSelect<ExtArgs> | null;
    omit?: Prisma.OscMemberOmit<ExtArgs> | null;
    include?: Prisma.OscMemberInclude<ExtArgs> | null;
    where: Prisma.OscMemberWhereUniqueInput;
    create: Prisma.XOR<Prisma.OscMemberCreateInput, Prisma.OscMemberUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.OscMemberUpdateInput, Prisma.OscMemberUncheckedUpdateInput>;
};
export type OscMemberDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.OscMemberSelect<ExtArgs> | null;
    omit?: Prisma.OscMemberOmit<ExtArgs> | null;
    include?: Prisma.OscMemberInclude<ExtArgs> | null;
    where: Prisma.OscMemberWhereUniqueInput;
};
export type OscMemberDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.OscMemberWhereInput;
    limit?: number;
};
export type OscMember$phonesArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.OscMemberPhoneSelect<ExtArgs> | null;
    omit?: Prisma.OscMemberPhoneOmit<ExtArgs> | null;
    include?: Prisma.OscMemberPhoneInclude<ExtArgs> | null;
    where?: Prisma.OscMemberPhoneWhereInput;
    orderBy?: Prisma.OscMemberPhoneOrderByWithRelationInput | Prisma.OscMemberPhoneOrderByWithRelationInput[];
    cursor?: Prisma.OscMemberPhoneWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.OscMemberPhoneScalarFieldEnum | Prisma.OscMemberPhoneScalarFieldEnum[];
};
export type OscMember$panelMemberArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type OscMember$scheduleArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.InterviewScheduleSelect<ExtArgs> | null;
    omit?: Prisma.InterviewScheduleOmit<ExtArgs> | null;
    include?: Prisma.InterviewScheduleInclude<ExtArgs> | null;
    where?: Prisma.InterviewScheduleWhereInput;
    orderBy?: Prisma.InterviewScheduleOrderByWithRelationInput | Prisma.InterviewScheduleOrderByWithRelationInput[];
    cursor?: Prisma.InterviewScheduleWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.InterviewScheduleScalarFieldEnum | Prisma.InterviewScheduleScalarFieldEnum[];
};
export type OscMemberDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.OscMemberSelect<ExtArgs> | null;
    omit?: Prisma.OscMemberOmit<ExtArgs> | null;
    include?: Prisma.OscMemberInclude<ExtArgs> | null;
};

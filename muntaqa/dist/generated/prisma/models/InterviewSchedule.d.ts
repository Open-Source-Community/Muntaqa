import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
export type InterviewScheduleModel = runtime.Types.Result.DefaultSelection<Prisma.$InterviewSchedulePayload>;
export type AggregateInterviewSchedule = {
    _count: InterviewScheduleCountAggregateOutputType | null;
    _avg: InterviewScheduleAvgAggregateOutputType | null;
    _sum: InterviewScheduleSumAggregateOutputType | null;
    _min: InterviewScheduleMinAggregateOutputType | null;
    _max: InterviewScheduleMaxAggregateOutputType | null;
};
export type InterviewScheduleAvgAggregateOutputType = {
    id: number | null;
    day: number | null;
    oscMemberId: number | null;
    availableFrom: number | null;
    availableTo: number | null;
    breakFrom: number | null;
    breakTo: number | null;
};
export type InterviewScheduleSumAggregateOutputType = {
    id: bigint | null;
    day: bigint | null;
    oscMemberId: bigint | null;
    availableFrom: bigint | null;
    availableTo: bigint | null;
    breakFrom: bigint | null;
    breakTo: bigint | null;
};
export type InterviewScheduleMinAggregateOutputType = {
    id: bigint | null;
    day: bigint | null;
    oscMemberId: bigint | null;
    availableFrom: bigint | null;
    availableTo: bigint | null;
    breakFrom: bigint | null;
    breakTo: bigint | null;
    attendence: boolean | null;
};
export type InterviewScheduleMaxAggregateOutputType = {
    id: bigint | null;
    day: bigint | null;
    oscMemberId: bigint | null;
    availableFrom: bigint | null;
    availableTo: bigint | null;
    breakFrom: bigint | null;
    breakTo: bigint | null;
    attendence: boolean | null;
};
export type InterviewScheduleCountAggregateOutputType = {
    id: number;
    day: number;
    oscMemberId: number;
    availableFrom: number;
    availableTo: number;
    breakFrom: number;
    breakTo: number;
    attendence: number;
    _all: number;
};
export type InterviewScheduleAvgAggregateInputType = {
    id?: true;
    day?: true;
    oscMemberId?: true;
    availableFrom?: true;
    availableTo?: true;
    breakFrom?: true;
    breakTo?: true;
};
export type InterviewScheduleSumAggregateInputType = {
    id?: true;
    day?: true;
    oscMemberId?: true;
    availableFrom?: true;
    availableTo?: true;
    breakFrom?: true;
    breakTo?: true;
};
export type InterviewScheduleMinAggregateInputType = {
    id?: true;
    day?: true;
    oscMemberId?: true;
    availableFrom?: true;
    availableTo?: true;
    breakFrom?: true;
    breakTo?: true;
    attendence?: true;
};
export type InterviewScheduleMaxAggregateInputType = {
    id?: true;
    day?: true;
    oscMemberId?: true;
    availableFrom?: true;
    availableTo?: true;
    breakFrom?: true;
    breakTo?: true;
    attendence?: true;
};
export type InterviewScheduleCountAggregateInputType = {
    id?: true;
    day?: true;
    oscMemberId?: true;
    availableFrom?: true;
    availableTo?: true;
    breakFrom?: true;
    breakTo?: true;
    attendence?: true;
    _all?: true;
};
export type InterviewScheduleAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.InterviewScheduleWhereInput;
    orderBy?: Prisma.InterviewScheduleOrderByWithRelationInput | Prisma.InterviewScheduleOrderByWithRelationInput[];
    cursor?: Prisma.InterviewScheduleWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | InterviewScheduleCountAggregateInputType;
    _avg?: InterviewScheduleAvgAggregateInputType;
    _sum?: InterviewScheduleSumAggregateInputType;
    _min?: InterviewScheduleMinAggregateInputType;
    _max?: InterviewScheduleMaxAggregateInputType;
};
export type GetInterviewScheduleAggregateType<T extends InterviewScheduleAggregateArgs> = {
    [P in keyof T & keyof AggregateInterviewSchedule]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateInterviewSchedule[P]> : Prisma.GetScalarType<T[P], AggregateInterviewSchedule[P]>;
};
export type InterviewScheduleGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.InterviewScheduleWhereInput;
    orderBy?: Prisma.InterviewScheduleOrderByWithAggregationInput | Prisma.InterviewScheduleOrderByWithAggregationInput[];
    by: Prisma.InterviewScheduleScalarFieldEnum[] | Prisma.InterviewScheduleScalarFieldEnum;
    having?: Prisma.InterviewScheduleScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: InterviewScheduleCountAggregateInputType | true;
    _avg?: InterviewScheduleAvgAggregateInputType;
    _sum?: InterviewScheduleSumAggregateInputType;
    _min?: InterviewScheduleMinAggregateInputType;
    _max?: InterviewScheduleMaxAggregateInputType;
};
export type InterviewScheduleGroupByOutputType = {
    id: bigint;
    day: bigint;
    oscMemberId: bigint;
    availableFrom: bigint;
    availableTo: bigint;
    breakFrom: bigint;
    breakTo: bigint;
    attendence: boolean;
    _count: InterviewScheduleCountAggregateOutputType | null;
    _avg: InterviewScheduleAvgAggregateOutputType | null;
    _sum: InterviewScheduleSumAggregateOutputType | null;
    _min: InterviewScheduleMinAggregateOutputType | null;
    _max: InterviewScheduleMaxAggregateOutputType | null;
};
export type GetInterviewScheduleGroupByPayload<T extends InterviewScheduleGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<InterviewScheduleGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof InterviewScheduleGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], InterviewScheduleGroupByOutputType[P]> : Prisma.GetScalarType<T[P], InterviewScheduleGroupByOutputType[P]>;
}>>;
export type InterviewScheduleWhereInput = {
    AND?: Prisma.InterviewScheduleWhereInput | Prisma.InterviewScheduleWhereInput[];
    OR?: Prisma.InterviewScheduleWhereInput[];
    NOT?: Prisma.InterviewScheduleWhereInput | Prisma.InterviewScheduleWhereInput[];
    id?: Prisma.BigIntFilter<"InterviewSchedule"> | bigint | number;
    day?: Prisma.BigIntFilter<"InterviewSchedule"> | bigint | number;
    oscMemberId?: Prisma.BigIntFilter<"InterviewSchedule"> | bigint | number;
    availableFrom?: Prisma.BigIntFilter<"InterviewSchedule"> | bigint | number;
    availableTo?: Prisma.BigIntFilter<"InterviewSchedule"> | bigint | number;
    breakFrom?: Prisma.BigIntFilter<"InterviewSchedule"> | bigint | number;
    breakTo?: Prisma.BigIntFilter<"InterviewSchedule"> | bigint | number;
    attendence?: Prisma.BoolFilter<"InterviewSchedule"> | boolean;
    oscMember?: Prisma.XOR<Prisma.OscMemberScalarRelationFilter, Prisma.OscMemberWhereInput>;
};
export type InterviewScheduleOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    day?: Prisma.SortOrder;
    oscMemberId?: Prisma.SortOrder;
    availableFrom?: Prisma.SortOrder;
    availableTo?: Prisma.SortOrder;
    breakFrom?: Prisma.SortOrder;
    breakTo?: Prisma.SortOrder;
    attendence?: Prisma.SortOrder;
    oscMember?: Prisma.OscMemberOrderByWithRelationInput;
};
export type InterviewScheduleWhereUniqueInput = Prisma.AtLeast<{
    id?: bigint | number;
    AND?: Prisma.InterviewScheduleWhereInput | Prisma.InterviewScheduleWhereInput[];
    OR?: Prisma.InterviewScheduleWhereInput[];
    NOT?: Prisma.InterviewScheduleWhereInput | Prisma.InterviewScheduleWhereInput[];
    day?: Prisma.BigIntFilter<"InterviewSchedule"> | bigint | number;
    oscMemberId?: Prisma.BigIntFilter<"InterviewSchedule"> | bigint | number;
    availableFrom?: Prisma.BigIntFilter<"InterviewSchedule"> | bigint | number;
    availableTo?: Prisma.BigIntFilter<"InterviewSchedule"> | bigint | number;
    breakFrom?: Prisma.BigIntFilter<"InterviewSchedule"> | bigint | number;
    breakTo?: Prisma.BigIntFilter<"InterviewSchedule"> | bigint | number;
    attendence?: Prisma.BoolFilter<"InterviewSchedule"> | boolean;
    oscMember?: Prisma.XOR<Prisma.OscMemberScalarRelationFilter, Prisma.OscMemberWhereInput>;
}, "id">;
export type InterviewScheduleOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    day?: Prisma.SortOrder;
    oscMemberId?: Prisma.SortOrder;
    availableFrom?: Prisma.SortOrder;
    availableTo?: Prisma.SortOrder;
    breakFrom?: Prisma.SortOrder;
    breakTo?: Prisma.SortOrder;
    attendence?: Prisma.SortOrder;
    _count?: Prisma.InterviewScheduleCountOrderByAggregateInput;
    _avg?: Prisma.InterviewScheduleAvgOrderByAggregateInput;
    _max?: Prisma.InterviewScheduleMaxOrderByAggregateInput;
    _min?: Prisma.InterviewScheduleMinOrderByAggregateInput;
    _sum?: Prisma.InterviewScheduleSumOrderByAggregateInput;
};
export type InterviewScheduleScalarWhereWithAggregatesInput = {
    AND?: Prisma.InterviewScheduleScalarWhereWithAggregatesInput | Prisma.InterviewScheduleScalarWhereWithAggregatesInput[];
    OR?: Prisma.InterviewScheduleScalarWhereWithAggregatesInput[];
    NOT?: Prisma.InterviewScheduleScalarWhereWithAggregatesInput | Prisma.InterviewScheduleScalarWhereWithAggregatesInput[];
    id?: Prisma.BigIntWithAggregatesFilter<"InterviewSchedule"> | bigint | number;
    day?: Prisma.BigIntWithAggregatesFilter<"InterviewSchedule"> | bigint | number;
    oscMemberId?: Prisma.BigIntWithAggregatesFilter<"InterviewSchedule"> | bigint | number;
    availableFrom?: Prisma.BigIntWithAggregatesFilter<"InterviewSchedule"> | bigint | number;
    availableTo?: Prisma.BigIntWithAggregatesFilter<"InterviewSchedule"> | bigint | number;
    breakFrom?: Prisma.BigIntWithAggregatesFilter<"InterviewSchedule"> | bigint | number;
    breakTo?: Prisma.BigIntWithAggregatesFilter<"InterviewSchedule"> | bigint | number;
    attendence?: Prisma.BoolWithAggregatesFilter<"InterviewSchedule"> | boolean;
};
export type InterviewScheduleCreateInput = {
    id?: bigint | number;
    day: bigint | number;
    availableFrom: bigint | number;
    availableTo: bigint | number;
    breakFrom: bigint | number;
    breakTo: bigint | number;
    attendence: boolean;
    oscMember: Prisma.OscMemberCreateNestedOneWithoutScheduleInput;
};
export type InterviewScheduleUncheckedCreateInput = {
    id?: bigint | number;
    day: bigint | number;
    oscMemberId: bigint | number;
    availableFrom: bigint | number;
    availableTo: bigint | number;
    breakFrom: bigint | number;
    breakTo: bigint | number;
    attendence: boolean;
};
export type InterviewScheduleUpdateInput = {
    id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    day?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    availableFrom?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    availableTo?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    breakFrom?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    breakTo?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    attendence?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    oscMember?: Prisma.OscMemberUpdateOneRequiredWithoutScheduleNestedInput;
};
export type InterviewScheduleUncheckedUpdateInput = {
    id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    day?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    oscMemberId?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    availableFrom?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    availableTo?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    breakFrom?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    breakTo?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    attendence?: Prisma.BoolFieldUpdateOperationsInput | boolean;
};
export type InterviewScheduleCreateManyInput = {
    id?: bigint | number;
    day: bigint | number;
    oscMemberId: bigint | number;
    availableFrom: bigint | number;
    availableTo: bigint | number;
    breakFrom: bigint | number;
    breakTo: bigint | number;
    attendence: boolean;
};
export type InterviewScheduleUpdateManyMutationInput = {
    id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    day?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    availableFrom?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    availableTo?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    breakFrom?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    breakTo?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    attendence?: Prisma.BoolFieldUpdateOperationsInput | boolean;
};
export type InterviewScheduleUncheckedUpdateManyInput = {
    id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    day?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    oscMemberId?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    availableFrom?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    availableTo?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    breakFrom?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    breakTo?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    attendence?: Prisma.BoolFieldUpdateOperationsInput | boolean;
};
export type InterviewScheduleListRelationFilter = {
    every?: Prisma.InterviewScheduleWhereInput;
    some?: Prisma.InterviewScheduleWhereInput;
    none?: Prisma.InterviewScheduleWhereInput;
};
export type InterviewScheduleOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type InterviewScheduleCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    day?: Prisma.SortOrder;
    oscMemberId?: Prisma.SortOrder;
    availableFrom?: Prisma.SortOrder;
    availableTo?: Prisma.SortOrder;
    breakFrom?: Prisma.SortOrder;
    breakTo?: Prisma.SortOrder;
    attendence?: Prisma.SortOrder;
};
export type InterviewScheduleAvgOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    day?: Prisma.SortOrder;
    oscMemberId?: Prisma.SortOrder;
    availableFrom?: Prisma.SortOrder;
    availableTo?: Prisma.SortOrder;
    breakFrom?: Prisma.SortOrder;
    breakTo?: Prisma.SortOrder;
};
export type InterviewScheduleMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    day?: Prisma.SortOrder;
    oscMemberId?: Prisma.SortOrder;
    availableFrom?: Prisma.SortOrder;
    availableTo?: Prisma.SortOrder;
    breakFrom?: Prisma.SortOrder;
    breakTo?: Prisma.SortOrder;
    attendence?: Prisma.SortOrder;
};
export type InterviewScheduleMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    day?: Prisma.SortOrder;
    oscMemberId?: Prisma.SortOrder;
    availableFrom?: Prisma.SortOrder;
    availableTo?: Prisma.SortOrder;
    breakFrom?: Prisma.SortOrder;
    breakTo?: Prisma.SortOrder;
    attendence?: Prisma.SortOrder;
};
export type InterviewScheduleSumOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    day?: Prisma.SortOrder;
    oscMemberId?: Prisma.SortOrder;
    availableFrom?: Prisma.SortOrder;
    availableTo?: Prisma.SortOrder;
    breakFrom?: Prisma.SortOrder;
    breakTo?: Prisma.SortOrder;
};
export type InterviewScheduleCreateNestedManyWithoutOscMemberInput = {
    create?: Prisma.XOR<Prisma.InterviewScheduleCreateWithoutOscMemberInput, Prisma.InterviewScheduleUncheckedCreateWithoutOscMemberInput> | Prisma.InterviewScheduleCreateWithoutOscMemberInput[] | Prisma.InterviewScheduleUncheckedCreateWithoutOscMemberInput[];
    connectOrCreate?: Prisma.InterviewScheduleCreateOrConnectWithoutOscMemberInput | Prisma.InterviewScheduleCreateOrConnectWithoutOscMemberInput[];
    createMany?: Prisma.InterviewScheduleCreateManyOscMemberInputEnvelope;
    connect?: Prisma.InterviewScheduleWhereUniqueInput | Prisma.InterviewScheduleWhereUniqueInput[];
};
export type InterviewScheduleUncheckedCreateNestedManyWithoutOscMemberInput = {
    create?: Prisma.XOR<Prisma.InterviewScheduleCreateWithoutOscMemberInput, Prisma.InterviewScheduleUncheckedCreateWithoutOscMemberInput> | Prisma.InterviewScheduleCreateWithoutOscMemberInput[] | Prisma.InterviewScheduleUncheckedCreateWithoutOscMemberInput[];
    connectOrCreate?: Prisma.InterviewScheduleCreateOrConnectWithoutOscMemberInput | Prisma.InterviewScheduleCreateOrConnectWithoutOscMemberInput[];
    createMany?: Prisma.InterviewScheduleCreateManyOscMemberInputEnvelope;
    connect?: Prisma.InterviewScheduleWhereUniqueInput | Prisma.InterviewScheduleWhereUniqueInput[];
};
export type InterviewScheduleUpdateManyWithoutOscMemberNestedInput = {
    create?: Prisma.XOR<Prisma.InterviewScheduleCreateWithoutOscMemberInput, Prisma.InterviewScheduleUncheckedCreateWithoutOscMemberInput> | Prisma.InterviewScheduleCreateWithoutOscMemberInput[] | Prisma.InterviewScheduleUncheckedCreateWithoutOscMemberInput[];
    connectOrCreate?: Prisma.InterviewScheduleCreateOrConnectWithoutOscMemberInput | Prisma.InterviewScheduleCreateOrConnectWithoutOscMemberInput[];
    upsert?: Prisma.InterviewScheduleUpsertWithWhereUniqueWithoutOscMemberInput | Prisma.InterviewScheduleUpsertWithWhereUniqueWithoutOscMemberInput[];
    createMany?: Prisma.InterviewScheduleCreateManyOscMemberInputEnvelope;
    set?: Prisma.InterviewScheduleWhereUniqueInput | Prisma.InterviewScheduleWhereUniqueInput[];
    disconnect?: Prisma.InterviewScheduleWhereUniqueInput | Prisma.InterviewScheduleWhereUniqueInput[];
    delete?: Prisma.InterviewScheduleWhereUniqueInput | Prisma.InterviewScheduleWhereUniqueInput[];
    connect?: Prisma.InterviewScheduleWhereUniqueInput | Prisma.InterviewScheduleWhereUniqueInput[];
    update?: Prisma.InterviewScheduleUpdateWithWhereUniqueWithoutOscMemberInput | Prisma.InterviewScheduleUpdateWithWhereUniqueWithoutOscMemberInput[];
    updateMany?: Prisma.InterviewScheduleUpdateManyWithWhereWithoutOscMemberInput | Prisma.InterviewScheduleUpdateManyWithWhereWithoutOscMemberInput[];
    deleteMany?: Prisma.InterviewScheduleScalarWhereInput | Prisma.InterviewScheduleScalarWhereInput[];
};
export type InterviewScheduleUncheckedUpdateManyWithoutOscMemberNestedInput = {
    create?: Prisma.XOR<Prisma.InterviewScheduleCreateWithoutOscMemberInput, Prisma.InterviewScheduleUncheckedCreateWithoutOscMemberInput> | Prisma.InterviewScheduleCreateWithoutOscMemberInput[] | Prisma.InterviewScheduleUncheckedCreateWithoutOscMemberInput[];
    connectOrCreate?: Prisma.InterviewScheduleCreateOrConnectWithoutOscMemberInput | Prisma.InterviewScheduleCreateOrConnectWithoutOscMemberInput[];
    upsert?: Prisma.InterviewScheduleUpsertWithWhereUniqueWithoutOscMemberInput | Prisma.InterviewScheduleUpsertWithWhereUniqueWithoutOscMemberInput[];
    createMany?: Prisma.InterviewScheduleCreateManyOscMemberInputEnvelope;
    set?: Prisma.InterviewScheduleWhereUniqueInput | Prisma.InterviewScheduleWhereUniqueInput[];
    disconnect?: Prisma.InterviewScheduleWhereUniqueInput | Prisma.InterviewScheduleWhereUniqueInput[];
    delete?: Prisma.InterviewScheduleWhereUniqueInput | Prisma.InterviewScheduleWhereUniqueInput[];
    connect?: Prisma.InterviewScheduleWhereUniqueInput | Prisma.InterviewScheduleWhereUniqueInput[];
    update?: Prisma.InterviewScheduleUpdateWithWhereUniqueWithoutOscMemberInput | Prisma.InterviewScheduleUpdateWithWhereUniqueWithoutOscMemberInput[];
    updateMany?: Prisma.InterviewScheduleUpdateManyWithWhereWithoutOscMemberInput | Prisma.InterviewScheduleUpdateManyWithWhereWithoutOscMemberInput[];
    deleteMany?: Prisma.InterviewScheduleScalarWhereInput | Prisma.InterviewScheduleScalarWhereInput[];
};
export type BoolFieldUpdateOperationsInput = {
    set?: boolean;
};
export type InterviewScheduleCreateWithoutOscMemberInput = {
    id?: bigint | number;
    day: bigint | number;
    availableFrom: bigint | number;
    availableTo: bigint | number;
    breakFrom: bigint | number;
    breakTo: bigint | number;
    attendence: boolean;
};
export type InterviewScheduleUncheckedCreateWithoutOscMemberInput = {
    id?: bigint | number;
    day: bigint | number;
    availableFrom: bigint | number;
    availableTo: bigint | number;
    breakFrom: bigint | number;
    breakTo: bigint | number;
    attendence: boolean;
};
export type InterviewScheduleCreateOrConnectWithoutOscMemberInput = {
    where: Prisma.InterviewScheduleWhereUniqueInput;
    create: Prisma.XOR<Prisma.InterviewScheduleCreateWithoutOscMemberInput, Prisma.InterviewScheduleUncheckedCreateWithoutOscMemberInput>;
};
export type InterviewScheduleCreateManyOscMemberInputEnvelope = {
    data: Prisma.InterviewScheduleCreateManyOscMemberInput | Prisma.InterviewScheduleCreateManyOscMemberInput[];
    skipDuplicates?: boolean;
};
export type InterviewScheduleUpsertWithWhereUniqueWithoutOscMemberInput = {
    where: Prisma.InterviewScheduleWhereUniqueInput;
    update: Prisma.XOR<Prisma.InterviewScheduleUpdateWithoutOscMemberInput, Prisma.InterviewScheduleUncheckedUpdateWithoutOscMemberInput>;
    create: Prisma.XOR<Prisma.InterviewScheduleCreateWithoutOscMemberInput, Prisma.InterviewScheduleUncheckedCreateWithoutOscMemberInput>;
};
export type InterviewScheduleUpdateWithWhereUniqueWithoutOscMemberInput = {
    where: Prisma.InterviewScheduleWhereUniqueInput;
    data: Prisma.XOR<Prisma.InterviewScheduleUpdateWithoutOscMemberInput, Prisma.InterviewScheduleUncheckedUpdateWithoutOscMemberInput>;
};
export type InterviewScheduleUpdateManyWithWhereWithoutOscMemberInput = {
    where: Prisma.InterviewScheduleScalarWhereInput;
    data: Prisma.XOR<Prisma.InterviewScheduleUpdateManyMutationInput, Prisma.InterviewScheduleUncheckedUpdateManyWithoutOscMemberInput>;
};
export type InterviewScheduleScalarWhereInput = {
    AND?: Prisma.InterviewScheduleScalarWhereInput | Prisma.InterviewScheduleScalarWhereInput[];
    OR?: Prisma.InterviewScheduleScalarWhereInput[];
    NOT?: Prisma.InterviewScheduleScalarWhereInput | Prisma.InterviewScheduleScalarWhereInput[];
    id?: Prisma.BigIntFilter<"InterviewSchedule"> | bigint | number;
    day?: Prisma.BigIntFilter<"InterviewSchedule"> | bigint | number;
    oscMemberId?: Prisma.BigIntFilter<"InterviewSchedule"> | bigint | number;
    availableFrom?: Prisma.BigIntFilter<"InterviewSchedule"> | bigint | number;
    availableTo?: Prisma.BigIntFilter<"InterviewSchedule"> | bigint | number;
    breakFrom?: Prisma.BigIntFilter<"InterviewSchedule"> | bigint | number;
    breakTo?: Prisma.BigIntFilter<"InterviewSchedule"> | bigint | number;
    attendence?: Prisma.BoolFilter<"InterviewSchedule"> | boolean;
};
export type InterviewScheduleCreateManyOscMemberInput = {
    id?: bigint | number;
    day: bigint | number;
    availableFrom: bigint | number;
    availableTo: bigint | number;
    breakFrom: bigint | number;
    breakTo: bigint | number;
    attendence: boolean;
};
export type InterviewScheduleUpdateWithoutOscMemberInput = {
    id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    day?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    availableFrom?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    availableTo?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    breakFrom?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    breakTo?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    attendence?: Prisma.BoolFieldUpdateOperationsInput | boolean;
};
export type InterviewScheduleUncheckedUpdateWithoutOscMemberInput = {
    id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    day?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    availableFrom?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    availableTo?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    breakFrom?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    breakTo?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    attendence?: Prisma.BoolFieldUpdateOperationsInput | boolean;
};
export type InterviewScheduleUncheckedUpdateManyWithoutOscMemberInput = {
    id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    day?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    availableFrom?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    availableTo?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    breakFrom?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    breakTo?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    attendence?: Prisma.BoolFieldUpdateOperationsInput | boolean;
};
export type InterviewScheduleSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    day?: boolean;
    oscMemberId?: boolean;
    availableFrom?: boolean;
    availableTo?: boolean;
    breakFrom?: boolean;
    breakTo?: boolean;
    attendence?: boolean;
    oscMember?: boolean | Prisma.OscMemberDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["interviewSchedule"]>;
export type InterviewScheduleSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    day?: boolean;
    oscMemberId?: boolean;
    availableFrom?: boolean;
    availableTo?: boolean;
    breakFrom?: boolean;
    breakTo?: boolean;
    attendence?: boolean;
    oscMember?: boolean | Prisma.OscMemberDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["interviewSchedule"]>;
export type InterviewScheduleSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    day?: boolean;
    oscMemberId?: boolean;
    availableFrom?: boolean;
    availableTo?: boolean;
    breakFrom?: boolean;
    breakTo?: boolean;
    attendence?: boolean;
    oscMember?: boolean | Prisma.OscMemberDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["interviewSchedule"]>;
export type InterviewScheduleSelectScalar = {
    id?: boolean;
    day?: boolean;
    oscMemberId?: boolean;
    availableFrom?: boolean;
    availableTo?: boolean;
    breakFrom?: boolean;
    breakTo?: boolean;
    attendence?: boolean;
};
export type InterviewScheduleOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "day" | "oscMemberId" | "availableFrom" | "availableTo" | "breakFrom" | "breakTo" | "attendence", ExtArgs["result"]["interviewSchedule"]>;
export type InterviewScheduleInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    oscMember?: boolean | Prisma.OscMemberDefaultArgs<ExtArgs>;
};
export type InterviewScheduleIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    oscMember?: boolean | Prisma.OscMemberDefaultArgs<ExtArgs>;
};
export type InterviewScheduleIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    oscMember?: boolean | Prisma.OscMemberDefaultArgs<ExtArgs>;
};
export type $InterviewSchedulePayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "InterviewSchedule";
    objects: {
        oscMember: Prisma.$OscMemberPayload<ExtArgs>;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: bigint;
        day: bigint;
        oscMemberId: bigint;
        availableFrom: bigint;
        availableTo: bigint;
        breakFrom: bigint;
        breakTo: bigint;
        attendence: boolean;
    }, ExtArgs["result"]["interviewSchedule"]>;
    composites: {};
};
export type InterviewScheduleGetPayload<S extends boolean | null | undefined | InterviewScheduleDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$InterviewSchedulePayload, S>;
export type InterviewScheduleCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<InterviewScheduleFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: InterviewScheduleCountAggregateInputType | true;
};
export interface InterviewScheduleDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['InterviewSchedule'];
        meta: {
            name: 'InterviewSchedule';
        };
    };
    findUnique<T extends InterviewScheduleFindUniqueArgs>(args: Prisma.SelectSubset<T, InterviewScheduleFindUniqueArgs<ExtArgs>>): Prisma.Prisma__InterviewScheduleClient<runtime.Types.Result.GetResult<Prisma.$InterviewSchedulePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends InterviewScheduleFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, InterviewScheduleFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__InterviewScheduleClient<runtime.Types.Result.GetResult<Prisma.$InterviewSchedulePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends InterviewScheduleFindFirstArgs>(args?: Prisma.SelectSubset<T, InterviewScheduleFindFirstArgs<ExtArgs>>): Prisma.Prisma__InterviewScheduleClient<runtime.Types.Result.GetResult<Prisma.$InterviewSchedulePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends InterviewScheduleFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, InterviewScheduleFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__InterviewScheduleClient<runtime.Types.Result.GetResult<Prisma.$InterviewSchedulePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends InterviewScheduleFindManyArgs>(args?: Prisma.SelectSubset<T, InterviewScheduleFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$InterviewSchedulePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends InterviewScheduleCreateArgs>(args: Prisma.SelectSubset<T, InterviewScheduleCreateArgs<ExtArgs>>): Prisma.Prisma__InterviewScheduleClient<runtime.Types.Result.GetResult<Prisma.$InterviewSchedulePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends InterviewScheduleCreateManyArgs>(args?: Prisma.SelectSubset<T, InterviewScheduleCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends InterviewScheduleCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, InterviewScheduleCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$InterviewSchedulePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends InterviewScheduleDeleteArgs>(args: Prisma.SelectSubset<T, InterviewScheduleDeleteArgs<ExtArgs>>): Prisma.Prisma__InterviewScheduleClient<runtime.Types.Result.GetResult<Prisma.$InterviewSchedulePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends InterviewScheduleUpdateArgs>(args: Prisma.SelectSubset<T, InterviewScheduleUpdateArgs<ExtArgs>>): Prisma.Prisma__InterviewScheduleClient<runtime.Types.Result.GetResult<Prisma.$InterviewSchedulePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends InterviewScheduleDeleteManyArgs>(args?: Prisma.SelectSubset<T, InterviewScheduleDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends InterviewScheduleUpdateManyArgs>(args: Prisma.SelectSubset<T, InterviewScheduleUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends InterviewScheduleUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, InterviewScheduleUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$InterviewSchedulePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends InterviewScheduleUpsertArgs>(args: Prisma.SelectSubset<T, InterviewScheduleUpsertArgs<ExtArgs>>): Prisma.Prisma__InterviewScheduleClient<runtime.Types.Result.GetResult<Prisma.$InterviewSchedulePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends InterviewScheduleCountArgs>(args?: Prisma.Subset<T, InterviewScheduleCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], InterviewScheduleCountAggregateOutputType> : number>;
    aggregate<T extends InterviewScheduleAggregateArgs>(args: Prisma.Subset<T, InterviewScheduleAggregateArgs>): Prisma.PrismaPromise<GetInterviewScheduleAggregateType<T>>;
    groupBy<T extends InterviewScheduleGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: InterviewScheduleGroupByArgs['orderBy'];
    } : {
        orderBy?: InterviewScheduleGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, InterviewScheduleGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetInterviewScheduleGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: InterviewScheduleFieldRefs;
}
export interface Prisma__InterviewScheduleClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    oscMember<T extends Prisma.OscMemberDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.OscMemberDefaultArgs<ExtArgs>>): Prisma.Prisma__OscMemberClient<runtime.Types.Result.GetResult<Prisma.$OscMemberPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface InterviewScheduleFieldRefs {
    readonly id: Prisma.FieldRef<"InterviewSchedule", 'BigInt'>;
    readonly day: Prisma.FieldRef<"InterviewSchedule", 'BigInt'>;
    readonly oscMemberId: Prisma.FieldRef<"InterviewSchedule", 'BigInt'>;
    readonly availableFrom: Prisma.FieldRef<"InterviewSchedule", 'BigInt'>;
    readonly availableTo: Prisma.FieldRef<"InterviewSchedule", 'BigInt'>;
    readonly breakFrom: Prisma.FieldRef<"InterviewSchedule", 'BigInt'>;
    readonly breakTo: Prisma.FieldRef<"InterviewSchedule", 'BigInt'>;
    readonly attendence: Prisma.FieldRef<"InterviewSchedule", 'Boolean'>;
}
export type InterviewScheduleFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.InterviewScheduleSelect<ExtArgs> | null;
    omit?: Prisma.InterviewScheduleOmit<ExtArgs> | null;
    include?: Prisma.InterviewScheduleInclude<ExtArgs> | null;
    where: Prisma.InterviewScheduleWhereUniqueInput;
};
export type InterviewScheduleFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.InterviewScheduleSelect<ExtArgs> | null;
    omit?: Prisma.InterviewScheduleOmit<ExtArgs> | null;
    include?: Prisma.InterviewScheduleInclude<ExtArgs> | null;
    where: Prisma.InterviewScheduleWhereUniqueInput;
};
export type InterviewScheduleFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type InterviewScheduleFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type InterviewScheduleFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type InterviewScheduleCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.InterviewScheduleSelect<ExtArgs> | null;
    omit?: Prisma.InterviewScheduleOmit<ExtArgs> | null;
    include?: Prisma.InterviewScheduleInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.InterviewScheduleCreateInput, Prisma.InterviewScheduleUncheckedCreateInput>;
};
export type InterviewScheduleCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.InterviewScheduleCreateManyInput | Prisma.InterviewScheduleCreateManyInput[];
    skipDuplicates?: boolean;
};
export type InterviewScheduleCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.InterviewScheduleSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.InterviewScheduleOmit<ExtArgs> | null;
    data: Prisma.InterviewScheduleCreateManyInput | Prisma.InterviewScheduleCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.InterviewScheduleIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type InterviewScheduleUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.InterviewScheduleSelect<ExtArgs> | null;
    omit?: Prisma.InterviewScheduleOmit<ExtArgs> | null;
    include?: Prisma.InterviewScheduleInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.InterviewScheduleUpdateInput, Prisma.InterviewScheduleUncheckedUpdateInput>;
    where: Prisma.InterviewScheduleWhereUniqueInput;
};
export type InterviewScheduleUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.InterviewScheduleUpdateManyMutationInput, Prisma.InterviewScheduleUncheckedUpdateManyInput>;
    where?: Prisma.InterviewScheduleWhereInput;
    limit?: number;
};
export type InterviewScheduleUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.InterviewScheduleSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.InterviewScheduleOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.InterviewScheduleUpdateManyMutationInput, Prisma.InterviewScheduleUncheckedUpdateManyInput>;
    where?: Prisma.InterviewScheduleWhereInput;
    limit?: number;
    include?: Prisma.InterviewScheduleIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type InterviewScheduleUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.InterviewScheduleSelect<ExtArgs> | null;
    omit?: Prisma.InterviewScheduleOmit<ExtArgs> | null;
    include?: Prisma.InterviewScheduleInclude<ExtArgs> | null;
    where: Prisma.InterviewScheduleWhereUniqueInput;
    create: Prisma.XOR<Prisma.InterviewScheduleCreateInput, Prisma.InterviewScheduleUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.InterviewScheduleUpdateInput, Prisma.InterviewScheduleUncheckedUpdateInput>;
};
export type InterviewScheduleDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.InterviewScheduleSelect<ExtArgs> | null;
    omit?: Prisma.InterviewScheduleOmit<ExtArgs> | null;
    include?: Prisma.InterviewScheduleInclude<ExtArgs> | null;
    where: Prisma.InterviewScheduleWhereUniqueInput;
};
export type InterviewScheduleDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.InterviewScheduleWhereInput;
    limit?: number;
};
export type InterviewScheduleDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.InterviewScheduleSelect<ExtArgs> | null;
    omit?: Prisma.InterviewScheduleOmit<ExtArgs> | null;
    include?: Prisma.InterviewScheduleInclude<ExtArgs> | null;
};

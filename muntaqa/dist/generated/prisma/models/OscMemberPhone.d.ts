import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
export type OscMemberPhoneModel = runtime.Types.Result.DefaultSelection<Prisma.$OscMemberPhonePayload>;
export type AggregateOscMemberPhone = {
    _count: OscMemberPhoneCountAggregateOutputType | null;
    _avg: OscMemberPhoneAvgAggregateOutputType | null;
    _sum: OscMemberPhoneSumAggregateOutputType | null;
    _min: OscMemberPhoneMinAggregateOutputType | null;
    _max: OscMemberPhoneMaxAggregateOutputType | null;
};
export type OscMemberPhoneAvgAggregateOutputType = {
    oscMemId: number | null;
    phone: number | null;
};
export type OscMemberPhoneSumAggregateOutputType = {
    oscMemId: bigint | null;
    phone: bigint | null;
};
export type OscMemberPhoneMinAggregateOutputType = {
    oscMemId: bigint | null;
    phone: bigint | null;
};
export type OscMemberPhoneMaxAggregateOutputType = {
    oscMemId: bigint | null;
    phone: bigint | null;
};
export type OscMemberPhoneCountAggregateOutputType = {
    oscMemId: number;
    phone: number;
    _all: number;
};
export type OscMemberPhoneAvgAggregateInputType = {
    oscMemId?: true;
    phone?: true;
};
export type OscMemberPhoneSumAggregateInputType = {
    oscMemId?: true;
    phone?: true;
};
export type OscMemberPhoneMinAggregateInputType = {
    oscMemId?: true;
    phone?: true;
};
export type OscMemberPhoneMaxAggregateInputType = {
    oscMemId?: true;
    phone?: true;
};
export type OscMemberPhoneCountAggregateInputType = {
    oscMemId?: true;
    phone?: true;
    _all?: true;
};
export type OscMemberPhoneAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.OscMemberPhoneWhereInput;
    orderBy?: Prisma.OscMemberPhoneOrderByWithRelationInput | Prisma.OscMemberPhoneOrderByWithRelationInput[];
    cursor?: Prisma.OscMemberPhoneWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | OscMemberPhoneCountAggregateInputType;
    _avg?: OscMemberPhoneAvgAggregateInputType;
    _sum?: OscMemberPhoneSumAggregateInputType;
    _min?: OscMemberPhoneMinAggregateInputType;
    _max?: OscMemberPhoneMaxAggregateInputType;
};
export type GetOscMemberPhoneAggregateType<T extends OscMemberPhoneAggregateArgs> = {
    [P in keyof T & keyof AggregateOscMemberPhone]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateOscMemberPhone[P]> : Prisma.GetScalarType<T[P], AggregateOscMemberPhone[P]>;
};
export type OscMemberPhoneGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.OscMemberPhoneWhereInput;
    orderBy?: Prisma.OscMemberPhoneOrderByWithAggregationInput | Prisma.OscMemberPhoneOrderByWithAggregationInput[];
    by: Prisma.OscMemberPhoneScalarFieldEnum[] | Prisma.OscMemberPhoneScalarFieldEnum;
    having?: Prisma.OscMemberPhoneScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: OscMemberPhoneCountAggregateInputType | true;
    _avg?: OscMemberPhoneAvgAggregateInputType;
    _sum?: OscMemberPhoneSumAggregateInputType;
    _min?: OscMemberPhoneMinAggregateInputType;
    _max?: OscMemberPhoneMaxAggregateInputType;
};
export type OscMemberPhoneGroupByOutputType = {
    oscMemId: bigint;
    phone: bigint;
    _count: OscMemberPhoneCountAggregateOutputType | null;
    _avg: OscMemberPhoneAvgAggregateOutputType | null;
    _sum: OscMemberPhoneSumAggregateOutputType | null;
    _min: OscMemberPhoneMinAggregateOutputType | null;
    _max: OscMemberPhoneMaxAggregateOutputType | null;
};
export type GetOscMemberPhoneGroupByPayload<T extends OscMemberPhoneGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<OscMemberPhoneGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof OscMemberPhoneGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], OscMemberPhoneGroupByOutputType[P]> : Prisma.GetScalarType<T[P], OscMemberPhoneGroupByOutputType[P]>;
}>>;
export type OscMemberPhoneWhereInput = {
    AND?: Prisma.OscMemberPhoneWhereInput | Prisma.OscMemberPhoneWhereInput[];
    OR?: Prisma.OscMemberPhoneWhereInput[];
    NOT?: Prisma.OscMemberPhoneWhereInput | Prisma.OscMemberPhoneWhereInput[];
    oscMemId?: Prisma.BigIntFilter<"OscMemberPhone"> | bigint | number;
    phone?: Prisma.BigIntFilter<"OscMemberPhone"> | bigint | number;
    oscMember?: Prisma.XOR<Prisma.OscMemberScalarRelationFilter, Prisma.OscMemberWhereInput>;
};
export type OscMemberPhoneOrderByWithRelationInput = {
    oscMemId?: Prisma.SortOrder;
    phone?: Prisma.SortOrder;
    oscMember?: Prisma.OscMemberOrderByWithRelationInput;
};
export type OscMemberPhoneWhereUniqueInput = Prisma.AtLeast<{
    oscMemId_phone?: Prisma.OscMemberPhoneOscMemIdPhoneCompoundUniqueInput;
    AND?: Prisma.OscMemberPhoneWhereInput | Prisma.OscMemberPhoneWhereInput[];
    OR?: Prisma.OscMemberPhoneWhereInput[];
    NOT?: Prisma.OscMemberPhoneWhereInput | Prisma.OscMemberPhoneWhereInput[];
    oscMemId?: Prisma.BigIntFilter<"OscMemberPhone"> | bigint | number;
    phone?: Prisma.BigIntFilter<"OscMemberPhone"> | bigint | number;
    oscMember?: Prisma.XOR<Prisma.OscMemberScalarRelationFilter, Prisma.OscMemberWhereInput>;
}, "oscMemId_phone">;
export type OscMemberPhoneOrderByWithAggregationInput = {
    oscMemId?: Prisma.SortOrder;
    phone?: Prisma.SortOrder;
    _count?: Prisma.OscMemberPhoneCountOrderByAggregateInput;
    _avg?: Prisma.OscMemberPhoneAvgOrderByAggregateInput;
    _max?: Prisma.OscMemberPhoneMaxOrderByAggregateInput;
    _min?: Prisma.OscMemberPhoneMinOrderByAggregateInput;
    _sum?: Prisma.OscMemberPhoneSumOrderByAggregateInput;
};
export type OscMemberPhoneScalarWhereWithAggregatesInput = {
    AND?: Prisma.OscMemberPhoneScalarWhereWithAggregatesInput | Prisma.OscMemberPhoneScalarWhereWithAggregatesInput[];
    OR?: Prisma.OscMemberPhoneScalarWhereWithAggregatesInput[];
    NOT?: Prisma.OscMemberPhoneScalarWhereWithAggregatesInput | Prisma.OscMemberPhoneScalarWhereWithAggregatesInput[];
    oscMemId?: Prisma.BigIntWithAggregatesFilter<"OscMemberPhone"> | bigint | number;
    phone?: Prisma.BigIntWithAggregatesFilter<"OscMemberPhone"> | bigint | number;
};
export type OscMemberPhoneCreateInput = {
    phone: bigint | number;
    oscMember: Prisma.OscMemberCreateNestedOneWithoutPhonesInput;
};
export type OscMemberPhoneUncheckedCreateInput = {
    oscMemId: bigint | number;
    phone: bigint | number;
};
export type OscMemberPhoneUpdateInput = {
    phone?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    oscMember?: Prisma.OscMemberUpdateOneRequiredWithoutPhonesNestedInput;
};
export type OscMemberPhoneUncheckedUpdateInput = {
    oscMemId?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    phone?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
};
export type OscMemberPhoneCreateManyInput = {
    oscMemId: bigint | number;
    phone: bigint | number;
};
export type OscMemberPhoneUpdateManyMutationInput = {
    phone?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
};
export type OscMemberPhoneUncheckedUpdateManyInput = {
    oscMemId?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    phone?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
};
export type OscMemberPhoneListRelationFilter = {
    every?: Prisma.OscMemberPhoneWhereInput;
    some?: Prisma.OscMemberPhoneWhereInput;
    none?: Prisma.OscMemberPhoneWhereInput;
};
export type OscMemberPhoneOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type OscMemberPhoneOscMemIdPhoneCompoundUniqueInput = {
    oscMemId: bigint | number;
    phone: bigint | number;
};
export type OscMemberPhoneCountOrderByAggregateInput = {
    oscMemId?: Prisma.SortOrder;
    phone?: Prisma.SortOrder;
};
export type OscMemberPhoneAvgOrderByAggregateInput = {
    oscMemId?: Prisma.SortOrder;
    phone?: Prisma.SortOrder;
};
export type OscMemberPhoneMaxOrderByAggregateInput = {
    oscMemId?: Prisma.SortOrder;
    phone?: Prisma.SortOrder;
};
export type OscMemberPhoneMinOrderByAggregateInput = {
    oscMemId?: Prisma.SortOrder;
    phone?: Prisma.SortOrder;
};
export type OscMemberPhoneSumOrderByAggregateInput = {
    oscMemId?: Prisma.SortOrder;
    phone?: Prisma.SortOrder;
};
export type OscMemberPhoneCreateNestedManyWithoutOscMemberInput = {
    create?: Prisma.XOR<Prisma.OscMemberPhoneCreateWithoutOscMemberInput, Prisma.OscMemberPhoneUncheckedCreateWithoutOscMemberInput> | Prisma.OscMemberPhoneCreateWithoutOscMemberInput[] | Prisma.OscMemberPhoneUncheckedCreateWithoutOscMemberInput[];
    connectOrCreate?: Prisma.OscMemberPhoneCreateOrConnectWithoutOscMemberInput | Prisma.OscMemberPhoneCreateOrConnectWithoutOscMemberInput[];
    createMany?: Prisma.OscMemberPhoneCreateManyOscMemberInputEnvelope;
    connect?: Prisma.OscMemberPhoneWhereUniqueInput | Prisma.OscMemberPhoneWhereUniqueInput[];
};
export type OscMemberPhoneUncheckedCreateNestedManyWithoutOscMemberInput = {
    create?: Prisma.XOR<Prisma.OscMemberPhoneCreateWithoutOscMemberInput, Prisma.OscMemberPhoneUncheckedCreateWithoutOscMemberInput> | Prisma.OscMemberPhoneCreateWithoutOscMemberInput[] | Prisma.OscMemberPhoneUncheckedCreateWithoutOscMemberInput[];
    connectOrCreate?: Prisma.OscMemberPhoneCreateOrConnectWithoutOscMemberInput | Prisma.OscMemberPhoneCreateOrConnectWithoutOscMemberInput[];
    createMany?: Prisma.OscMemberPhoneCreateManyOscMemberInputEnvelope;
    connect?: Prisma.OscMemberPhoneWhereUniqueInput | Prisma.OscMemberPhoneWhereUniqueInput[];
};
export type OscMemberPhoneUpdateManyWithoutOscMemberNestedInput = {
    create?: Prisma.XOR<Prisma.OscMemberPhoneCreateWithoutOscMemberInput, Prisma.OscMemberPhoneUncheckedCreateWithoutOscMemberInput> | Prisma.OscMemberPhoneCreateWithoutOscMemberInput[] | Prisma.OscMemberPhoneUncheckedCreateWithoutOscMemberInput[];
    connectOrCreate?: Prisma.OscMemberPhoneCreateOrConnectWithoutOscMemberInput | Prisma.OscMemberPhoneCreateOrConnectWithoutOscMemberInput[];
    upsert?: Prisma.OscMemberPhoneUpsertWithWhereUniqueWithoutOscMemberInput | Prisma.OscMemberPhoneUpsertWithWhereUniqueWithoutOscMemberInput[];
    createMany?: Prisma.OscMemberPhoneCreateManyOscMemberInputEnvelope;
    set?: Prisma.OscMemberPhoneWhereUniqueInput | Prisma.OscMemberPhoneWhereUniqueInput[];
    disconnect?: Prisma.OscMemberPhoneWhereUniqueInput | Prisma.OscMemberPhoneWhereUniqueInput[];
    delete?: Prisma.OscMemberPhoneWhereUniqueInput | Prisma.OscMemberPhoneWhereUniqueInput[];
    connect?: Prisma.OscMemberPhoneWhereUniqueInput | Prisma.OscMemberPhoneWhereUniqueInput[];
    update?: Prisma.OscMemberPhoneUpdateWithWhereUniqueWithoutOscMemberInput | Prisma.OscMemberPhoneUpdateWithWhereUniqueWithoutOscMemberInput[];
    updateMany?: Prisma.OscMemberPhoneUpdateManyWithWhereWithoutOscMemberInput | Prisma.OscMemberPhoneUpdateManyWithWhereWithoutOscMemberInput[];
    deleteMany?: Prisma.OscMemberPhoneScalarWhereInput | Prisma.OscMemberPhoneScalarWhereInput[];
};
export type OscMemberPhoneUncheckedUpdateManyWithoutOscMemberNestedInput = {
    create?: Prisma.XOR<Prisma.OscMemberPhoneCreateWithoutOscMemberInput, Prisma.OscMemberPhoneUncheckedCreateWithoutOscMemberInput> | Prisma.OscMemberPhoneCreateWithoutOscMemberInput[] | Prisma.OscMemberPhoneUncheckedCreateWithoutOscMemberInput[];
    connectOrCreate?: Prisma.OscMemberPhoneCreateOrConnectWithoutOscMemberInput | Prisma.OscMemberPhoneCreateOrConnectWithoutOscMemberInput[];
    upsert?: Prisma.OscMemberPhoneUpsertWithWhereUniqueWithoutOscMemberInput | Prisma.OscMemberPhoneUpsertWithWhereUniqueWithoutOscMemberInput[];
    createMany?: Prisma.OscMemberPhoneCreateManyOscMemberInputEnvelope;
    set?: Prisma.OscMemberPhoneWhereUniqueInput | Prisma.OscMemberPhoneWhereUniqueInput[];
    disconnect?: Prisma.OscMemberPhoneWhereUniqueInput | Prisma.OscMemberPhoneWhereUniqueInput[];
    delete?: Prisma.OscMemberPhoneWhereUniqueInput | Prisma.OscMemberPhoneWhereUniqueInput[];
    connect?: Prisma.OscMemberPhoneWhereUniqueInput | Prisma.OscMemberPhoneWhereUniqueInput[];
    update?: Prisma.OscMemberPhoneUpdateWithWhereUniqueWithoutOscMemberInput | Prisma.OscMemberPhoneUpdateWithWhereUniqueWithoutOscMemberInput[];
    updateMany?: Prisma.OscMemberPhoneUpdateManyWithWhereWithoutOscMemberInput | Prisma.OscMemberPhoneUpdateManyWithWhereWithoutOscMemberInput[];
    deleteMany?: Prisma.OscMemberPhoneScalarWhereInput | Prisma.OscMemberPhoneScalarWhereInput[];
};
export type OscMemberPhoneCreateWithoutOscMemberInput = {
    phone: bigint | number;
};
export type OscMemberPhoneUncheckedCreateWithoutOscMemberInput = {
    phone: bigint | number;
};
export type OscMemberPhoneCreateOrConnectWithoutOscMemberInput = {
    where: Prisma.OscMemberPhoneWhereUniqueInput;
    create: Prisma.XOR<Prisma.OscMemberPhoneCreateWithoutOscMemberInput, Prisma.OscMemberPhoneUncheckedCreateWithoutOscMemberInput>;
};
export type OscMemberPhoneCreateManyOscMemberInputEnvelope = {
    data: Prisma.OscMemberPhoneCreateManyOscMemberInput | Prisma.OscMemberPhoneCreateManyOscMemberInput[];
    skipDuplicates?: boolean;
};
export type OscMemberPhoneUpsertWithWhereUniqueWithoutOscMemberInput = {
    where: Prisma.OscMemberPhoneWhereUniqueInput;
    update: Prisma.XOR<Prisma.OscMemberPhoneUpdateWithoutOscMemberInput, Prisma.OscMemberPhoneUncheckedUpdateWithoutOscMemberInput>;
    create: Prisma.XOR<Prisma.OscMemberPhoneCreateWithoutOscMemberInput, Prisma.OscMemberPhoneUncheckedCreateWithoutOscMemberInput>;
};
export type OscMemberPhoneUpdateWithWhereUniqueWithoutOscMemberInput = {
    where: Prisma.OscMemberPhoneWhereUniqueInput;
    data: Prisma.XOR<Prisma.OscMemberPhoneUpdateWithoutOscMemberInput, Prisma.OscMemberPhoneUncheckedUpdateWithoutOscMemberInput>;
};
export type OscMemberPhoneUpdateManyWithWhereWithoutOscMemberInput = {
    where: Prisma.OscMemberPhoneScalarWhereInput;
    data: Prisma.XOR<Prisma.OscMemberPhoneUpdateManyMutationInput, Prisma.OscMemberPhoneUncheckedUpdateManyWithoutOscMemberInput>;
};
export type OscMemberPhoneScalarWhereInput = {
    AND?: Prisma.OscMemberPhoneScalarWhereInput | Prisma.OscMemberPhoneScalarWhereInput[];
    OR?: Prisma.OscMemberPhoneScalarWhereInput[];
    NOT?: Prisma.OscMemberPhoneScalarWhereInput | Prisma.OscMemberPhoneScalarWhereInput[];
    oscMemId?: Prisma.BigIntFilter<"OscMemberPhone"> | bigint | number;
    phone?: Prisma.BigIntFilter<"OscMemberPhone"> | bigint | number;
};
export type OscMemberPhoneCreateManyOscMemberInput = {
    phone: bigint | number;
};
export type OscMemberPhoneUpdateWithoutOscMemberInput = {
    phone?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
};
export type OscMemberPhoneUncheckedUpdateWithoutOscMemberInput = {
    phone?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
};
export type OscMemberPhoneUncheckedUpdateManyWithoutOscMemberInput = {
    phone?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
};
export type OscMemberPhoneSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    oscMemId?: boolean;
    phone?: boolean;
    oscMember?: boolean | Prisma.OscMemberDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["oscMemberPhone"]>;
export type OscMemberPhoneSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    oscMemId?: boolean;
    phone?: boolean;
    oscMember?: boolean | Prisma.OscMemberDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["oscMemberPhone"]>;
export type OscMemberPhoneSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    oscMemId?: boolean;
    phone?: boolean;
    oscMember?: boolean | Prisma.OscMemberDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["oscMemberPhone"]>;
export type OscMemberPhoneSelectScalar = {
    oscMemId?: boolean;
    phone?: boolean;
};
export type OscMemberPhoneOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"oscMemId" | "phone", ExtArgs["result"]["oscMemberPhone"]>;
export type OscMemberPhoneInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    oscMember?: boolean | Prisma.OscMemberDefaultArgs<ExtArgs>;
};
export type OscMemberPhoneIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    oscMember?: boolean | Prisma.OscMemberDefaultArgs<ExtArgs>;
};
export type OscMemberPhoneIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    oscMember?: boolean | Prisma.OscMemberDefaultArgs<ExtArgs>;
};
export type $OscMemberPhonePayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "OscMemberPhone";
    objects: {
        oscMember: Prisma.$OscMemberPayload<ExtArgs>;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        oscMemId: bigint;
        phone: bigint;
    }, ExtArgs["result"]["oscMemberPhone"]>;
    composites: {};
};
export type OscMemberPhoneGetPayload<S extends boolean | null | undefined | OscMemberPhoneDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$OscMemberPhonePayload, S>;
export type OscMemberPhoneCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<OscMemberPhoneFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: OscMemberPhoneCountAggregateInputType | true;
};
export interface OscMemberPhoneDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['OscMemberPhone'];
        meta: {
            name: 'OscMemberPhone';
        };
    };
    findUnique<T extends OscMemberPhoneFindUniqueArgs>(args: Prisma.SelectSubset<T, OscMemberPhoneFindUniqueArgs<ExtArgs>>): Prisma.Prisma__OscMemberPhoneClient<runtime.Types.Result.GetResult<Prisma.$OscMemberPhonePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends OscMemberPhoneFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, OscMemberPhoneFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__OscMemberPhoneClient<runtime.Types.Result.GetResult<Prisma.$OscMemberPhonePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends OscMemberPhoneFindFirstArgs>(args?: Prisma.SelectSubset<T, OscMemberPhoneFindFirstArgs<ExtArgs>>): Prisma.Prisma__OscMemberPhoneClient<runtime.Types.Result.GetResult<Prisma.$OscMemberPhonePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends OscMemberPhoneFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, OscMemberPhoneFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__OscMemberPhoneClient<runtime.Types.Result.GetResult<Prisma.$OscMemberPhonePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends OscMemberPhoneFindManyArgs>(args?: Prisma.SelectSubset<T, OscMemberPhoneFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$OscMemberPhonePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends OscMemberPhoneCreateArgs>(args: Prisma.SelectSubset<T, OscMemberPhoneCreateArgs<ExtArgs>>): Prisma.Prisma__OscMemberPhoneClient<runtime.Types.Result.GetResult<Prisma.$OscMemberPhonePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends OscMemberPhoneCreateManyArgs>(args?: Prisma.SelectSubset<T, OscMemberPhoneCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends OscMemberPhoneCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, OscMemberPhoneCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$OscMemberPhonePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends OscMemberPhoneDeleteArgs>(args: Prisma.SelectSubset<T, OscMemberPhoneDeleteArgs<ExtArgs>>): Prisma.Prisma__OscMemberPhoneClient<runtime.Types.Result.GetResult<Prisma.$OscMemberPhonePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends OscMemberPhoneUpdateArgs>(args: Prisma.SelectSubset<T, OscMemberPhoneUpdateArgs<ExtArgs>>): Prisma.Prisma__OscMemberPhoneClient<runtime.Types.Result.GetResult<Prisma.$OscMemberPhonePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends OscMemberPhoneDeleteManyArgs>(args?: Prisma.SelectSubset<T, OscMemberPhoneDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends OscMemberPhoneUpdateManyArgs>(args: Prisma.SelectSubset<T, OscMemberPhoneUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends OscMemberPhoneUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, OscMemberPhoneUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$OscMemberPhonePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends OscMemberPhoneUpsertArgs>(args: Prisma.SelectSubset<T, OscMemberPhoneUpsertArgs<ExtArgs>>): Prisma.Prisma__OscMemberPhoneClient<runtime.Types.Result.GetResult<Prisma.$OscMemberPhonePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends OscMemberPhoneCountArgs>(args?: Prisma.Subset<T, OscMemberPhoneCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], OscMemberPhoneCountAggregateOutputType> : number>;
    aggregate<T extends OscMemberPhoneAggregateArgs>(args: Prisma.Subset<T, OscMemberPhoneAggregateArgs>): Prisma.PrismaPromise<GetOscMemberPhoneAggregateType<T>>;
    groupBy<T extends OscMemberPhoneGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: OscMemberPhoneGroupByArgs['orderBy'];
    } : {
        orderBy?: OscMemberPhoneGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, OscMemberPhoneGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetOscMemberPhoneGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: OscMemberPhoneFieldRefs;
}
export interface Prisma__OscMemberPhoneClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    oscMember<T extends Prisma.OscMemberDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.OscMemberDefaultArgs<ExtArgs>>): Prisma.Prisma__OscMemberClient<runtime.Types.Result.GetResult<Prisma.$OscMemberPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface OscMemberPhoneFieldRefs {
    readonly oscMemId: Prisma.FieldRef<"OscMemberPhone", 'BigInt'>;
    readonly phone: Prisma.FieldRef<"OscMemberPhone", 'BigInt'>;
}
export type OscMemberPhoneFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.OscMemberPhoneSelect<ExtArgs> | null;
    omit?: Prisma.OscMemberPhoneOmit<ExtArgs> | null;
    include?: Prisma.OscMemberPhoneInclude<ExtArgs> | null;
    where: Prisma.OscMemberPhoneWhereUniqueInput;
};
export type OscMemberPhoneFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.OscMemberPhoneSelect<ExtArgs> | null;
    omit?: Prisma.OscMemberPhoneOmit<ExtArgs> | null;
    include?: Prisma.OscMemberPhoneInclude<ExtArgs> | null;
    where: Prisma.OscMemberPhoneWhereUniqueInput;
};
export type OscMemberPhoneFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type OscMemberPhoneFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type OscMemberPhoneFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type OscMemberPhoneCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.OscMemberPhoneSelect<ExtArgs> | null;
    omit?: Prisma.OscMemberPhoneOmit<ExtArgs> | null;
    include?: Prisma.OscMemberPhoneInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.OscMemberPhoneCreateInput, Prisma.OscMemberPhoneUncheckedCreateInput>;
};
export type OscMemberPhoneCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.OscMemberPhoneCreateManyInput | Prisma.OscMemberPhoneCreateManyInput[];
    skipDuplicates?: boolean;
};
export type OscMemberPhoneCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.OscMemberPhoneSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.OscMemberPhoneOmit<ExtArgs> | null;
    data: Prisma.OscMemberPhoneCreateManyInput | Prisma.OscMemberPhoneCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.OscMemberPhoneIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type OscMemberPhoneUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.OscMemberPhoneSelect<ExtArgs> | null;
    omit?: Prisma.OscMemberPhoneOmit<ExtArgs> | null;
    include?: Prisma.OscMemberPhoneInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.OscMemberPhoneUpdateInput, Prisma.OscMemberPhoneUncheckedUpdateInput>;
    where: Prisma.OscMemberPhoneWhereUniqueInput;
};
export type OscMemberPhoneUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.OscMemberPhoneUpdateManyMutationInput, Prisma.OscMemberPhoneUncheckedUpdateManyInput>;
    where?: Prisma.OscMemberPhoneWhereInput;
    limit?: number;
};
export type OscMemberPhoneUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.OscMemberPhoneSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.OscMemberPhoneOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.OscMemberPhoneUpdateManyMutationInput, Prisma.OscMemberPhoneUncheckedUpdateManyInput>;
    where?: Prisma.OscMemberPhoneWhereInput;
    limit?: number;
    include?: Prisma.OscMemberPhoneIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type OscMemberPhoneUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.OscMemberPhoneSelect<ExtArgs> | null;
    omit?: Prisma.OscMemberPhoneOmit<ExtArgs> | null;
    include?: Prisma.OscMemberPhoneInclude<ExtArgs> | null;
    where: Prisma.OscMemberPhoneWhereUniqueInput;
    create: Prisma.XOR<Prisma.OscMemberPhoneCreateInput, Prisma.OscMemberPhoneUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.OscMemberPhoneUpdateInput, Prisma.OscMemberPhoneUncheckedUpdateInput>;
};
export type OscMemberPhoneDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.OscMemberPhoneSelect<ExtArgs> | null;
    omit?: Prisma.OscMemberPhoneOmit<ExtArgs> | null;
    include?: Prisma.OscMemberPhoneInclude<ExtArgs> | null;
    where: Prisma.OscMemberPhoneWhereUniqueInput;
};
export type OscMemberPhoneDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.OscMemberPhoneWhereInput;
    limit?: number;
};
export type OscMemberPhoneDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.OscMemberPhoneSelect<ExtArgs> | null;
    omit?: Prisma.OscMemberPhoneOmit<ExtArgs> | null;
    include?: Prisma.OscMemberPhoneInclude<ExtArgs> | null;
};

import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
export type RecruitmentModel = runtime.Types.Result.DefaultSelection<Prisma.$RecruitmentPayload>;
export type AggregateRecruitment = {
    _count: RecruitmentCountAggregateOutputType | null;
    _avg: RecruitmentAvgAggregateOutputType | null;
    _sum: RecruitmentSumAggregateOutputType | null;
    _min: RecruitmentMinAggregateOutputType | null;
    _max: RecruitmentMaxAggregateOutputType | null;
};
export type RecruitmentAvgAggregateOutputType = {
    id: number | null;
    eventDay: number | null;
    date: number | null;
};
export type RecruitmentSumAggregateOutputType = {
    id: bigint | null;
    eventDay: bigint | null;
    date: bigint | null;
};
export type RecruitmentMinAggregateOutputType = {
    id: bigint | null;
    eventDay: bigint | null;
    date: bigint | null;
};
export type RecruitmentMaxAggregateOutputType = {
    id: bigint | null;
    eventDay: bigint | null;
    date: bigint | null;
};
export type RecruitmentCountAggregateOutputType = {
    id: number;
    eventDay: number;
    date: number;
    _all: number;
};
export type RecruitmentAvgAggregateInputType = {
    id?: true;
    eventDay?: true;
    date?: true;
};
export type RecruitmentSumAggregateInputType = {
    id?: true;
    eventDay?: true;
    date?: true;
};
export type RecruitmentMinAggregateInputType = {
    id?: true;
    eventDay?: true;
    date?: true;
};
export type RecruitmentMaxAggregateInputType = {
    id?: true;
    eventDay?: true;
    date?: true;
};
export type RecruitmentCountAggregateInputType = {
    id?: true;
    eventDay?: true;
    date?: true;
    _all?: true;
};
export type RecruitmentAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.RecruitmentWhereInput;
    orderBy?: Prisma.RecruitmentOrderByWithRelationInput | Prisma.RecruitmentOrderByWithRelationInput[];
    cursor?: Prisma.RecruitmentWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | RecruitmentCountAggregateInputType;
    _avg?: RecruitmentAvgAggregateInputType;
    _sum?: RecruitmentSumAggregateInputType;
    _min?: RecruitmentMinAggregateInputType;
    _max?: RecruitmentMaxAggregateInputType;
};
export type GetRecruitmentAggregateType<T extends RecruitmentAggregateArgs> = {
    [P in keyof T & keyof AggregateRecruitment]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateRecruitment[P]> : Prisma.GetScalarType<T[P], AggregateRecruitment[P]>;
};
export type RecruitmentGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.RecruitmentWhereInput;
    orderBy?: Prisma.RecruitmentOrderByWithAggregationInput | Prisma.RecruitmentOrderByWithAggregationInput[];
    by: Prisma.RecruitmentScalarFieldEnum[] | Prisma.RecruitmentScalarFieldEnum;
    having?: Prisma.RecruitmentScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: RecruitmentCountAggregateInputType | true;
    _avg?: RecruitmentAvgAggregateInputType;
    _sum?: RecruitmentSumAggregateInputType;
    _min?: RecruitmentMinAggregateInputType;
    _max?: RecruitmentMaxAggregateInputType;
};
export type RecruitmentGroupByOutputType = {
    id: bigint;
    eventDay: bigint;
    date: bigint;
    _count: RecruitmentCountAggregateOutputType | null;
    _avg: RecruitmentAvgAggregateOutputType | null;
    _sum: RecruitmentSumAggregateOutputType | null;
    _min: RecruitmentMinAggregateOutputType | null;
    _max: RecruitmentMaxAggregateOutputType | null;
};
export type GetRecruitmentGroupByPayload<T extends RecruitmentGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<RecruitmentGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof RecruitmentGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], RecruitmentGroupByOutputType[P]> : Prisma.GetScalarType<T[P], RecruitmentGroupByOutputType[P]>;
}>>;
export type RecruitmentWhereInput = {
    AND?: Prisma.RecruitmentWhereInput | Prisma.RecruitmentWhereInput[];
    OR?: Prisma.RecruitmentWhereInput[];
    NOT?: Prisma.RecruitmentWhereInput | Prisma.RecruitmentWhereInput[];
    id?: Prisma.BigIntFilter<"Recruitment"> | bigint | number;
    eventDay?: Prisma.BigIntFilter<"Recruitment"> | bigint | number;
    date?: Prisma.BigIntFilter<"Recruitment"> | bigint | number;
    interviews?: Prisma.InterviewListRelationFilter;
};
export type RecruitmentOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    eventDay?: Prisma.SortOrder;
    date?: Prisma.SortOrder;
    interviews?: Prisma.InterviewOrderByRelationAggregateInput;
};
export type RecruitmentWhereUniqueInput = Prisma.AtLeast<{
    id?: bigint | number;
    AND?: Prisma.RecruitmentWhereInput | Prisma.RecruitmentWhereInput[];
    OR?: Prisma.RecruitmentWhereInput[];
    NOT?: Prisma.RecruitmentWhereInput | Prisma.RecruitmentWhereInput[];
    eventDay?: Prisma.BigIntFilter<"Recruitment"> | bigint | number;
    date?: Prisma.BigIntFilter<"Recruitment"> | bigint | number;
    interviews?: Prisma.InterviewListRelationFilter;
}, "id">;
export type RecruitmentOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    eventDay?: Prisma.SortOrder;
    date?: Prisma.SortOrder;
    _count?: Prisma.RecruitmentCountOrderByAggregateInput;
    _avg?: Prisma.RecruitmentAvgOrderByAggregateInput;
    _max?: Prisma.RecruitmentMaxOrderByAggregateInput;
    _min?: Prisma.RecruitmentMinOrderByAggregateInput;
    _sum?: Prisma.RecruitmentSumOrderByAggregateInput;
};
export type RecruitmentScalarWhereWithAggregatesInput = {
    AND?: Prisma.RecruitmentScalarWhereWithAggregatesInput | Prisma.RecruitmentScalarWhereWithAggregatesInput[];
    OR?: Prisma.RecruitmentScalarWhereWithAggregatesInput[];
    NOT?: Prisma.RecruitmentScalarWhereWithAggregatesInput | Prisma.RecruitmentScalarWhereWithAggregatesInput[];
    id?: Prisma.BigIntWithAggregatesFilter<"Recruitment"> | bigint | number;
    eventDay?: Prisma.BigIntWithAggregatesFilter<"Recruitment"> | bigint | number;
    date?: Prisma.BigIntWithAggregatesFilter<"Recruitment"> | bigint | number;
};
export type RecruitmentCreateInput = {
    id?: bigint | number;
    eventDay: bigint | number;
    date: bigint | number;
    interviews?: Prisma.InterviewCreateNestedManyWithoutRecruitmentInput;
};
export type RecruitmentUncheckedCreateInput = {
    id?: bigint | number;
    eventDay: bigint | number;
    date: bigint | number;
    interviews?: Prisma.InterviewUncheckedCreateNestedManyWithoutRecruitmentInput;
};
export type RecruitmentUpdateInput = {
    id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    eventDay?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    date?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    interviews?: Prisma.InterviewUpdateManyWithoutRecruitmentNestedInput;
};
export type RecruitmentUncheckedUpdateInput = {
    id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    eventDay?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    date?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    interviews?: Prisma.InterviewUncheckedUpdateManyWithoutRecruitmentNestedInput;
};
export type RecruitmentCreateManyInput = {
    id?: bigint | number;
    eventDay: bigint | number;
    date: bigint | number;
};
export type RecruitmentUpdateManyMutationInput = {
    id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    eventDay?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    date?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
};
export type RecruitmentUncheckedUpdateManyInput = {
    id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    eventDay?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    date?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
};
export type RecruitmentCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    eventDay?: Prisma.SortOrder;
    date?: Prisma.SortOrder;
};
export type RecruitmentAvgOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    eventDay?: Prisma.SortOrder;
    date?: Prisma.SortOrder;
};
export type RecruitmentMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    eventDay?: Prisma.SortOrder;
    date?: Prisma.SortOrder;
};
export type RecruitmentMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    eventDay?: Prisma.SortOrder;
    date?: Prisma.SortOrder;
};
export type RecruitmentSumOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    eventDay?: Prisma.SortOrder;
    date?: Prisma.SortOrder;
};
export type RecruitmentScalarRelationFilter = {
    is?: Prisma.RecruitmentWhereInput;
    isNot?: Prisma.RecruitmentWhereInput;
};
export type RecruitmentCreateNestedOneWithoutInterviewsInput = {
    create?: Prisma.XOR<Prisma.RecruitmentCreateWithoutInterviewsInput, Prisma.RecruitmentUncheckedCreateWithoutInterviewsInput>;
    connectOrCreate?: Prisma.RecruitmentCreateOrConnectWithoutInterviewsInput;
    connect?: Prisma.RecruitmentWhereUniqueInput;
};
export type RecruitmentUpdateOneRequiredWithoutInterviewsNestedInput = {
    create?: Prisma.XOR<Prisma.RecruitmentCreateWithoutInterviewsInput, Prisma.RecruitmentUncheckedCreateWithoutInterviewsInput>;
    connectOrCreate?: Prisma.RecruitmentCreateOrConnectWithoutInterviewsInput;
    upsert?: Prisma.RecruitmentUpsertWithoutInterviewsInput;
    connect?: Prisma.RecruitmentWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.RecruitmentUpdateToOneWithWhereWithoutInterviewsInput, Prisma.RecruitmentUpdateWithoutInterviewsInput>, Prisma.RecruitmentUncheckedUpdateWithoutInterviewsInput>;
};
export type RecruitmentCreateWithoutInterviewsInput = {
    id?: bigint | number;
    eventDay: bigint | number;
    date: bigint | number;
};
export type RecruitmentUncheckedCreateWithoutInterviewsInput = {
    id?: bigint | number;
    eventDay: bigint | number;
    date: bigint | number;
};
export type RecruitmentCreateOrConnectWithoutInterviewsInput = {
    where: Prisma.RecruitmentWhereUniqueInput;
    create: Prisma.XOR<Prisma.RecruitmentCreateWithoutInterviewsInput, Prisma.RecruitmentUncheckedCreateWithoutInterviewsInput>;
};
export type RecruitmentUpsertWithoutInterviewsInput = {
    update: Prisma.XOR<Prisma.RecruitmentUpdateWithoutInterviewsInput, Prisma.RecruitmentUncheckedUpdateWithoutInterviewsInput>;
    create: Prisma.XOR<Prisma.RecruitmentCreateWithoutInterviewsInput, Prisma.RecruitmentUncheckedCreateWithoutInterviewsInput>;
    where?: Prisma.RecruitmentWhereInput;
};
export type RecruitmentUpdateToOneWithWhereWithoutInterviewsInput = {
    where?: Prisma.RecruitmentWhereInput;
    data: Prisma.XOR<Prisma.RecruitmentUpdateWithoutInterviewsInput, Prisma.RecruitmentUncheckedUpdateWithoutInterviewsInput>;
};
export type RecruitmentUpdateWithoutInterviewsInput = {
    id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    eventDay?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    date?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
};
export type RecruitmentUncheckedUpdateWithoutInterviewsInput = {
    id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    eventDay?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    date?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
};
export type RecruitmentCountOutputType = {
    interviews: number;
};
export type RecruitmentCountOutputTypeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    interviews?: boolean | RecruitmentCountOutputTypeCountInterviewsArgs;
};
export type RecruitmentCountOutputTypeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.RecruitmentCountOutputTypeSelect<ExtArgs> | null;
};
export type RecruitmentCountOutputTypeCountInterviewsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.InterviewWhereInput;
};
export type RecruitmentSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    eventDay?: boolean;
    date?: boolean;
    interviews?: boolean | Prisma.Recruitment$interviewsArgs<ExtArgs>;
    _count?: boolean | Prisma.RecruitmentCountOutputTypeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["recruitment"]>;
export type RecruitmentSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    eventDay?: boolean;
    date?: boolean;
}, ExtArgs["result"]["recruitment"]>;
export type RecruitmentSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    eventDay?: boolean;
    date?: boolean;
}, ExtArgs["result"]["recruitment"]>;
export type RecruitmentSelectScalar = {
    id?: boolean;
    eventDay?: boolean;
    date?: boolean;
};
export type RecruitmentOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "eventDay" | "date", ExtArgs["result"]["recruitment"]>;
export type RecruitmentInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    interviews?: boolean | Prisma.Recruitment$interviewsArgs<ExtArgs>;
    _count?: boolean | Prisma.RecruitmentCountOutputTypeDefaultArgs<ExtArgs>;
};
export type RecruitmentIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {};
export type RecruitmentIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {};
export type $RecruitmentPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "Recruitment";
    objects: {
        interviews: Prisma.$InterviewPayload<ExtArgs>[];
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: bigint;
        eventDay: bigint;
        date: bigint;
    }, ExtArgs["result"]["recruitment"]>;
    composites: {};
};
export type RecruitmentGetPayload<S extends boolean | null | undefined | RecruitmentDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$RecruitmentPayload, S>;
export type RecruitmentCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<RecruitmentFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: RecruitmentCountAggregateInputType | true;
};
export interface RecruitmentDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['Recruitment'];
        meta: {
            name: 'Recruitment';
        };
    };
    findUnique<T extends RecruitmentFindUniqueArgs>(args: Prisma.SelectSubset<T, RecruitmentFindUniqueArgs<ExtArgs>>): Prisma.Prisma__RecruitmentClient<runtime.Types.Result.GetResult<Prisma.$RecruitmentPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends RecruitmentFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, RecruitmentFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__RecruitmentClient<runtime.Types.Result.GetResult<Prisma.$RecruitmentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends RecruitmentFindFirstArgs>(args?: Prisma.SelectSubset<T, RecruitmentFindFirstArgs<ExtArgs>>): Prisma.Prisma__RecruitmentClient<runtime.Types.Result.GetResult<Prisma.$RecruitmentPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends RecruitmentFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, RecruitmentFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__RecruitmentClient<runtime.Types.Result.GetResult<Prisma.$RecruitmentPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends RecruitmentFindManyArgs>(args?: Prisma.SelectSubset<T, RecruitmentFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$RecruitmentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends RecruitmentCreateArgs>(args: Prisma.SelectSubset<T, RecruitmentCreateArgs<ExtArgs>>): Prisma.Prisma__RecruitmentClient<runtime.Types.Result.GetResult<Prisma.$RecruitmentPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends RecruitmentCreateManyArgs>(args?: Prisma.SelectSubset<T, RecruitmentCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends RecruitmentCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, RecruitmentCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$RecruitmentPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends RecruitmentDeleteArgs>(args: Prisma.SelectSubset<T, RecruitmentDeleteArgs<ExtArgs>>): Prisma.Prisma__RecruitmentClient<runtime.Types.Result.GetResult<Prisma.$RecruitmentPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends RecruitmentUpdateArgs>(args: Prisma.SelectSubset<T, RecruitmentUpdateArgs<ExtArgs>>): Prisma.Prisma__RecruitmentClient<runtime.Types.Result.GetResult<Prisma.$RecruitmentPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends RecruitmentDeleteManyArgs>(args?: Prisma.SelectSubset<T, RecruitmentDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends RecruitmentUpdateManyArgs>(args: Prisma.SelectSubset<T, RecruitmentUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends RecruitmentUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, RecruitmentUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$RecruitmentPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends RecruitmentUpsertArgs>(args: Prisma.SelectSubset<T, RecruitmentUpsertArgs<ExtArgs>>): Prisma.Prisma__RecruitmentClient<runtime.Types.Result.GetResult<Prisma.$RecruitmentPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends RecruitmentCountArgs>(args?: Prisma.Subset<T, RecruitmentCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], RecruitmentCountAggregateOutputType> : number>;
    aggregate<T extends RecruitmentAggregateArgs>(args: Prisma.Subset<T, RecruitmentAggregateArgs>): Prisma.PrismaPromise<GetRecruitmentAggregateType<T>>;
    groupBy<T extends RecruitmentGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: RecruitmentGroupByArgs['orderBy'];
    } : {
        orderBy?: RecruitmentGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, RecruitmentGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRecruitmentGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: RecruitmentFieldRefs;
}
export interface Prisma__RecruitmentClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    interviews<T extends Prisma.Recruitment$interviewsArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Recruitment$interviewsArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$InterviewPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface RecruitmentFieldRefs {
    readonly id: Prisma.FieldRef<"Recruitment", 'BigInt'>;
    readonly eventDay: Prisma.FieldRef<"Recruitment", 'BigInt'>;
    readonly date: Prisma.FieldRef<"Recruitment", 'BigInt'>;
}
export type RecruitmentFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.RecruitmentSelect<ExtArgs> | null;
    omit?: Prisma.RecruitmentOmit<ExtArgs> | null;
    include?: Prisma.RecruitmentInclude<ExtArgs> | null;
    where: Prisma.RecruitmentWhereUniqueInput;
};
export type RecruitmentFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.RecruitmentSelect<ExtArgs> | null;
    omit?: Prisma.RecruitmentOmit<ExtArgs> | null;
    include?: Prisma.RecruitmentInclude<ExtArgs> | null;
    where: Prisma.RecruitmentWhereUniqueInput;
};
export type RecruitmentFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.RecruitmentSelect<ExtArgs> | null;
    omit?: Prisma.RecruitmentOmit<ExtArgs> | null;
    include?: Prisma.RecruitmentInclude<ExtArgs> | null;
    where?: Prisma.RecruitmentWhereInput;
    orderBy?: Prisma.RecruitmentOrderByWithRelationInput | Prisma.RecruitmentOrderByWithRelationInput[];
    cursor?: Prisma.RecruitmentWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.RecruitmentScalarFieldEnum | Prisma.RecruitmentScalarFieldEnum[];
};
export type RecruitmentFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.RecruitmentSelect<ExtArgs> | null;
    omit?: Prisma.RecruitmentOmit<ExtArgs> | null;
    include?: Prisma.RecruitmentInclude<ExtArgs> | null;
    where?: Prisma.RecruitmentWhereInput;
    orderBy?: Prisma.RecruitmentOrderByWithRelationInput | Prisma.RecruitmentOrderByWithRelationInput[];
    cursor?: Prisma.RecruitmentWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.RecruitmentScalarFieldEnum | Prisma.RecruitmentScalarFieldEnum[];
};
export type RecruitmentFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.RecruitmentSelect<ExtArgs> | null;
    omit?: Prisma.RecruitmentOmit<ExtArgs> | null;
    include?: Prisma.RecruitmentInclude<ExtArgs> | null;
    where?: Prisma.RecruitmentWhereInput;
    orderBy?: Prisma.RecruitmentOrderByWithRelationInput | Prisma.RecruitmentOrderByWithRelationInput[];
    cursor?: Prisma.RecruitmentWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.RecruitmentScalarFieldEnum | Prisma.RecruitmentScalarFieldEnum[];
};
export type RecruitmentCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.RecruitmentSelect<ExtArgs> | null;
    omit?: Prisma.RecruitmentOmit<ExtArgs> | null;
    include?: Prisma.RecruitmentInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.RecruitmentCreateInput, Prisma.RecruitmentUncheckedCreateInput>;
};
export type RecruitmentCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.RecruitmentCreateManyInput | Prisma.RecruitmentCreateManyInput[];
    skipDuplicates?: boolean;
};
export type RecruitmentCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.RecruitmentSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.RecruitmentOmit<ExtArgs> | null;
    data: Prisma.RecruitmentCreateManyInput | Prisma.RecruitmentCreateManyInput[];
    skipDuplicates?: boolean;
};
export type RecruitmentUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.RecruitmentSelect<ExtArgs> | null;
    omit?: Prisma.RecruitmentOmit<ExtArgs> | null;
    include?: Prisma.RecruitmentInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.RecruitmentUpdateInput, Prisma.RecruitmentUncheckedUpdateInput>;
    where: Prisma.RecruitmentWhereUniqueInput;
};
export type RecruitmentUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.RecruitmentUpdateManyMutationInput, Prisma.RecruitmentUncheckedUpdateManyInput>;
    where?: Prisma.RecruitmentWhereInput;
    limit?: number;
};
export type RecruitmentUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.RecruitmentSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.RecruitmentOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.RecruitmentUpdateManyMutationInput, Prisma.RecruitmentUncheckedUpdateManyInput>;
    where?: Prisma.RecruitmentWhereInput;
    limit?: number;
};
export type RecruitmentUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.RecruitmentSelect<ExtArgs> | null;
    omit?: Prisma.RecruitmentOmit<ExtArgs> | null;
    include?: Prisma.RecruitmentInclude<ExtArgs> | null;
    where: Prisma.RecruitmentWhereUniqueInput;
    create: Prisma.XOR<Prisma.RecruitmentCreateInput, Prisma.RecruitmentUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.RecruitmentUpdateInput, Prisma.RecruitmentUncheckedUpdateInput>;
};
export type RecruitmentDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.RecruitmentSelect<ExtArgs> | null;
    omit?: Prisma.RecruitmentOmit<ExtArgs> | null;
    include?: Prisma.RecruitmentInclude<ExtArgs> | null;
    where: Prisma.RecruitmentWhereUniqueInput;
};
export type RecruitmentDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.RecruitmentWhereInput;
    limit?: number;
};
export type Recruitment$interviewsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type RecruitmentDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.RecruitmentSelect<ExtArgs> | null;
    omit?: Prisma.RecruitmentOmit<ExtArgs> | null;
    include?: Prisma.RecruitmentInclude<ExtArgs> | null;
};

export interface APIError {
    field?: string;
    reason: string;
}
export interface APIWarning {
    title: string;
    detail: string;
}
export interface ConfigOverride {
    baseURL?: string;
}
export interface ResourcePage<T> {
    data: T[];
    page: number;
    pages: number;
    results: number;
}
export type DeepPartial<T> = {
    [P in keyof T]?: DeepPartial<T[P]>;
};
//# sourceMappingURL=types.d.ts.map
import { ResourcePage as Page } from '../types';
import { Tag, TagRequest } from './types';
export declare const getTags: (params?: any, filter?: any) => Promise<Page<Tag>>;
export declare const createTag: (data: TagRequest) => Promise<Tag>;
export declare const deleteTag: (label: string) => Promise<Tag>;
//# sourceMappingURL=tags.d.ts.map
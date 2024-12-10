// not in use

import Dexie, { type EntityTable } from 'dexie';

interface UserLinkInput {
    user: string
    url: string
    urlNickName: string
}

const db = new Dexie('LinksListDatabase') as Dexie & {
    linksList: EntityTable<
        UserLinkInput,
        'user'
    >;
};

db.version(1).stores({
    linksList: 'user, url, urlNickName'
});

export type { UserLinkInput };
export { db };
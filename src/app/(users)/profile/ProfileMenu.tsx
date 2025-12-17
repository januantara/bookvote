'use client'

import * as Tabs from '@radix-ui/react-tabs';
import type { Book, VotedBook } from '@/types/user';
import VotingHistory from './VotingHistory';
import RequestedBooks from './RequestedBooks';

const TAB_STYLES = {
    trigger: 'px-3 py-2 data-[state=active]:bg-primary data-[state=active]:text-white hover:bg-primary hover:text-white transition-colors duration-200 font-medium text-gray-500 rounded-md',
    list: 'p-2 space-x-2 text-white bg-neutral-50 w-max rounded-md',
    content: 'py-6 grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6'
};

export default function ProfileMenu({ votedBooks, requestedBooks, isLoading }: {
    votedBooks: VotedBook[];
    requestedBooks: Book[];
    isLoading: boolean
}) {
    return (
        <div className="p-6 md:p-20">
            <Tabs.Root defaultValue="history-voted">
                <Tabs.List aria-label="Profile menu" className={TAB_STYLES.list}>
                    <Tabs.Trigger value="history-voted" className={TAB_STYLES.trigger}>
                        History Vote
                    </Tabs.Trigger>
                    <Tabs.Trigger value="requested" className={TAB_STYLES.trigger}>
                        Requested Books
                    </Tabs.Trigger>
                </Tabs.List>

                <Tabs.Content value="history-voted" className={TAB_STYLES.content}>
                    <VotingHistory votedBooks={votedBooks} isLoading={isLoading} />
                </Tabs.Content>

                <Tabs.Content value="requested" className={TAB_STYLES.content}>
                    <RequestedBooks requestedBooks={requestedBooks} isLoading={isLoading} />
                </Tabs.Content>
            </Tabs.Root>
        </div>
    );
}

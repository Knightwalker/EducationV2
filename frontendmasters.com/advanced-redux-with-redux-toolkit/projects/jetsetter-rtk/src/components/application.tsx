import { useMemo } from "react";
import Header from './header';
import ItemList from './item-list';
import MarkAllAsUnpacked from './mark-all-as-unpacked';
import NewItem from './new-item';
import { useGetItemsQuery } from '../services/api-service';

const Application = () => {
    const { data, isLoading } = useGetItemsQuery(undefined, {
        // pollingInterval: 20
    });
    const items = useMemo(() => data?.items || [], [data]);

    return (
        <main className="flex flex-col gap-8 p-8 mx-auto lg:max-w-4xl">
            <p>Loading...</p>
            <Header count={0} />
            <NewItem />
            <section className="flex flex-col gap-8 md:flex-row">
                <ItemList title="Items" items={items}/>
            </section>
            <MarkAllAsUnpacked />
        </main>
    );
};

export default Application;

import React from "react";
import { Link, Head } from "@inertiajs/inertia-react";
import Navbar from "@/Components/Navbar";
import NewsList from "@/Components/Homepage/NewsList";

export default function Homepage(props) {
    console.log(props);
    return (
        <div className="min-h-screen bg-slate-50">
            <Head title={props.title} />
            <Navbar />
            <div className="flex justify-center flex-col lg:flex-row lg:flex-wrap lg:item-stretch items-center gap-4 p-4">
                <NewsList news={props.news} />
            </div>
        </div>
    );
}

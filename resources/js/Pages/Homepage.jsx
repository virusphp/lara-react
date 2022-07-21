import React from "react";
import { Link, Head } from "@inertiajs/inertia-react";

export default function Homepage(props) {
    console.log(props);
    return (
        <div className="flex justify-center items-center min-h-screen bg-neutral-600 text-white text-2xl">
            <Head title={props.title} />
            <div>
                {props.news
                    ? props.news.map((data, i) => {
                          return (
                              <div key={i}>
                                  <p>{data.title}</p>
                                  <p>{data.description}</p>
                                  <p>{data.category}</p>
                                  <p>{data.author}</p>
                              </div>
                          );
                      })
                    : "<p>Saat ini belum ada berita tersedia</p>"}
            </div>
        </div>
    );
}

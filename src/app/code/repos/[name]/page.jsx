'use client';
import Link from "next/link";
import { Radio } from "react-loader-spinner";
import { Suspense } from "react";
import Repo from '../../../components/Repo.jsx';
import RepoDirs from "@/app/components/Repodirs.jsx";

const RepoPage = ({ params: { name } }) => {
    const loader = (
        <div className="loader-container">
            <Radio
                visible={true}
                height="80"
                width="80"
                color="#4fa94d"
                ariaLabel="radio-loading"
                wrapperStyle={{}}
                wrapperClass=""
            />
        </div>
    );

    return (
        <div className="card">
            <Link href='/code/repos' className="btn btn-back">Back to Repositories</Link>
            <Suspense fallback={<div>Loading Repositories {loader}</div>}>
                <Repo name={name} />
            </Suspense>
            <Suspense fallback={<div>Loading Repositories {loader}</div>}>
                <RepoDirs name={name} />
            </Suspense>
        </div>
    );
}

export default RepoPage;

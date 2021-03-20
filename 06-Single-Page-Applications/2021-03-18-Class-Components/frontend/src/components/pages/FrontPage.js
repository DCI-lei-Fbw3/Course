import { useEffect } from "react";

function FrontPage () {
    useEffect(() => {
        console.log("after mounted");
    }, []);


    // to execute some lines right before the component will be dismounted (destroyed),
    // we only need to return a function in useEffect.
    // when switching the page from frontpage to any other you can see "before unmount" in the console
    useEffect(() => {
        return () => {
            console.log("before unmount");
        };
    }, []);


    return (
        <>
            <h1>Product Manager</h1>
        </>
    )
}

export default FrontPage;

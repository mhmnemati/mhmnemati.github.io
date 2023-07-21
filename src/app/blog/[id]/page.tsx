export default function Page(props: {
    children: React.ReactNode;
    params: { id: string };
}) {
    return (
        <div>
            <p>/blog/{props.params.id} Page</p>
            {props.children}
        </div>
    );
}

export default function Page(props: { children: React.ReactNode }) {
    return (
        <div>
            <p>Not found Page</p>
            {props.children}
        </div>
    );
}

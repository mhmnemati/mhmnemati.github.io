export default function Page(props: { children: React.ReactNode }) {
    return (
        <div>
            <p>/projects Page</p>
            {props.children}
        </div>
    );
}

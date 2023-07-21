export default function Page(props: { children: React.ReactNode }) {
    return (
        <div>
            <p>/books Page</p>
            {props.children}
        </div>
    );
}

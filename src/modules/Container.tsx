export default (props: any) => <div style={{
    "border": "1px solid #888",
    "border-radius": "0.75ch",
    // "padding": "15px",
    "margin": "15px",
    "min-width": "fit-content",
    display: "flex",
    "align-items": "center",
    "flex-direction": "row",
    "justify-content": "space-between",
    // "align-items"
}}
>
    {props.children}
</div>;
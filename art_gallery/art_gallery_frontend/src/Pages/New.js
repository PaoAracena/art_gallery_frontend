import PaintingNew from "../Components/paintingNew";

export default function New() {
    return (
        <div className="New">
            <PaintingNew/>
            <New />
        </div>
    );
}
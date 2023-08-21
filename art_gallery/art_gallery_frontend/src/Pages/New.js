import PaintingNew from '../Components/PaintingNew';

export default function New() {
    return (
        <div className="New">
            <PaintingNew />
            <New />
        </div>
    );
}
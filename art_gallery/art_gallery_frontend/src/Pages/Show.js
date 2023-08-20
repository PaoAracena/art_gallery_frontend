
import PaintingDetails from "../Components/paintingDetails";
export default function Show() {
    return (
        <div className="Show">
            <PaintingDetails />
            <Show />
        </div>
    );
}
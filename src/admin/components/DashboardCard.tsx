import Card from "@/src/common/components/Card";
import { IDashboardCardProps } from "./type";

const DashboardCard: React.FC<IDashboardCardProps>= ({
    count, title, percent, Icon, mode = 'light'
}) => {
    return (
        <Card className={
            `${mode === 'light' ? 'bg-white text-black' : 'bg-black text-white'} flex flex-col gap-4`
        }>
            <div className="flex justify-between">
                <div>
                    <h1 className="text-3xl font-semibold">{count}</h1>
                    <p className="text-lg">{title}</p>
                </div>
                <div className={`${mode === 'light' ? 'bg-black bg-opacity-10': 'bg-white bg-opacity-20'} p-4 h-fit w-fit rounded-lg`}>
                    <Icon size={20}/>
                </div>
            </div>
            <div className="flex flex-col gap-2">
                <div className="flex justify-between">
                    <h1 className="text-lg">0%</h1>
                    <h1 className="text-lg">{percent}%</h1>
                </div>
                <div className="bg-gray-200 w-full rounded-full overflow-hidden">
                    <div className={`h-2 ${mode === "dark" ? 'bg-white' : 'bg-black'}`}
                        style={{
                            width: `${percent}%`
                        }}  
                    />
                </div>
            </div>
        </Card>
    )
}

export default DashboardCard;
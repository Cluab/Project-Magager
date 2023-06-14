import { getUserFromCookie } from "@/lib/auth";
import { cookies } from "next/headers";
import Card from "./Card";
import Button from "./Button";

const getUserDate = async () => {
    const user = await getUserFromCookie(cookies());

    return user
}

const Greeting = async () => {
    const user = await getUserDate()

    return (
        <Card className="w-full py-4 relative">
            <div className="mb-4">
                <h1 className="text-3xl text-gray-700 font-bold mb-4">
                    Hello, {user.firstName}!
                </h1>
                <h4 className="text-xl text-gray-400">
                    Check your daily tasks and schedule
                </h4>
            </div>
            <div>
                <Button size="large">Today's Schedule</Button>
            </div>
        </Card>
    );
}

export default Greeting;
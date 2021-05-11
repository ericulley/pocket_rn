interface User {
    id: string;
    username: string;
    authorized?: boolean;
    availableTimes: string[];
    scheduledTimes: string[];
    pendingRequests: string[];
    pendingResponses: string[];
}

export default User
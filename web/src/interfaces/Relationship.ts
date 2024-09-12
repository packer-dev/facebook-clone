export interface Relationship {
    id: string;
    user1: string;  // current user
    user2: string;  // visit user
    status: number; // 1. send # 2. receive #3. friends #4. block
}
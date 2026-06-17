export class AlphaService {

    static getData() {
        return {
            message: "Data from Alpha Service",
            timestamp: new Date().toISOString(),
            data: {
                user: [
                    {
                        id: 1,
                        name: "Juan",
                        email: "juan.granda@gmail.com"
                    },
                    {
                        id: 2,
                        name: "Maria",
                        email: "maria@gmail.com"
                    }
                ],
                page: 1,
                limit: 10   
            }
        };
    }
};
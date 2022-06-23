import { APIResponse, User } from "../models";
import { UserDataValidator } from "../validators";
import { v4 } from "uuid";

class CreateUserService
{
    private userDataValidator = UserDataValidator;

    public execute (user: User): APIResponse
    {
        const validUserData = new this.userDataValidator(user);

        if (validUserData.errors)
        {
            throw new Error(`400: ${validUserData.errors}`);
        }

        validUserData.user.id = v4();

        return {
            data: validUserData.user,
            messages: []
        } as APIResponse;
    }
}

export { CreateUserService };

/* eslint-disable prettier/prettier */
import { Body, Controller, Delete, Get, NotFoundException, Param, Post, Put } from '@nestjs/common';
import { User } from './user.entity';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
    constructor(private readonly usersService : UsersService){}

    //get all users
    @Get()
    async findAll(): Promise<User[]>{
        return this.usersService.findAll();
    }

    //get user by id 
    @Get(':id')
    async findOne (@Param('id') id: number): Promise<User>{
        const user = await this.usersService.findOne(id);
        if(!user){
            throw new NotFoundException('User does not exist');
        }else{
            return user;
        }
    }

    //Create User 
    @Post()
    async create (@Body() user: User):Promise<User>{
        return this.usersService.create(user);
    }

    //update user
    @Put(':id')
    async update (@Param(':id') id: number , @Body() user:User) : Promise<any>{
        return this.usersService.update(id,user);
    }

    //delete user 
    @Delete()
    async delete (@Param ('id') id:number) : Promise<any> {
        //handle error if user does not exist 
        const user = await this.usersService.findOne(id);
        if(!user){
            throw new NotFoundException('User does not exist!');
        }
        return this.usersService.delete(id);
    }
}
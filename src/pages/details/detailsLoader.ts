import { getPackage } from "../../api/queries/getPackage";
import type { Params } from "react-router-dom";
import { PackageDetails } from "../../api/types/packageDetails";

interface LoaderArgs{
    //we are getting an object that the values inside are values which are sting keys
    params:Params;
}

export interface DetailsLoarderResult{
    details:PackageDetails;
}
export async function detailsLoader({params}:LoaderArgs):Promise<DetailsLoarderResult>{
        const {name}=params;

        if(!name){
            throw new Error("name must be provided")
        }
        const details=await getPackage(name)
        //we can add new properties here

    return {
        details,
    };
}
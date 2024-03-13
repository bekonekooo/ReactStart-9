import { searchPackages } from "../../api/queries/searchPackages";
import { PackageSummary } from "../../api/types/packageSummary";

export interface SearchLoaderResult{
    searchResults:PackageSummary[];
}

export async function searchLoader({
    request}:{request:Request}):Promise<SearchLoaderResult>{
    //request means user
   const {searchParams}=new URL(request.url);
   const term =searchParams.get("term");
   if(!term){
    throw new Error("search term must be provided");
   }
   try {
    const results = await searchPackages(term); // Assuming searchPackages takes a search term and returns a promise
    return {
        searchResults: results
    };
} catch (error) {
    console.error("Error fetching search results:", error);
    return {
        searchResults: [] // Return empty array or handle error accordingly
    };
}
//    const results = await searchPackages(term);
//     return{
//         searchResult:results
//     }
  }
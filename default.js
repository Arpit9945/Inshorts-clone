

import { data } from "./constants/data.js";

import news from "./model/news-schema.js";

const DefaultData = async () => {
    try {
      for (const item of data) {
        const existingNews = await news.findOne({ url: item.url });
  
        if (!existingNews) {
          // If no existing record with the same URL, insert the data
          await news.create(item);
        }
      }
  
      console.log("Data imported successfully...");
    } catch (error) {
      console.log("Error", error.message);
    }
  };
  
  export default DefaultData;
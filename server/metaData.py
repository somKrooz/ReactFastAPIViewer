import pandas as pd

CSV = pd.read_csv("anime.csv")

def returnAnimeData(title: str):
    data = CSV[CSV["title"] == title]
    
    if data.empty:
        return {"error": "Anime title not found"}
    
    sorted_data = data.iloc[0]
    
    json_payload = {
        "title": sorted_data['title'],
        "genre": sorted_data['genre'],
        "episodes": sorted_data['episodes'],
        "image": sorted_data['img_url'],
        "url": sorted_data['link'],
        "rank": sorted_data["ranked"],
        "synopsis": sorted_data['returnAnimeData'], 
        "aired": sorted_data['aired']
    }
    
    return json_payload


def Getlist(lock :int)->dict:
    data  = CSV[:lock]
    anime_meta = {}
    for index, row in data.iterrows():
        Krooz = {
            "title": row["title"],
            "image": row["img_url"],
        }
        anime_meta[index] = Krooz
    return anime_meta









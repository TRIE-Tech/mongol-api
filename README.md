# Mongol-API Documentation

Welcome to the documentation for the Mongol-API service, providing crucial information about Mongolia. This API allows you to retrieve various aspects of Mongolia's culture, geography, history, and more.

## Developers and Designers

### Developers

- <a href="https://github.com/DuurenbayarUlz" target="_blank">Duurenbayar Ulziiduuren</a>
- <a href="https://github.com/amar9elbeg" target="_blank">Elbeg Amarbayasgalan</a>
- <a href="https://github.com/Anujinnb" target="_blank">Anujin Buyannemekh</a>

### Designers

- <a href="#" target="_blank">Munkhkhuleg Tserenpurev</a> (Replace '#' with the designer's GitHub profile link)

## Endpoints

- **REST Endpoint:** <a href="https://mongol-api-rest.vercel.app" target="_blank">https://mongol-api-rest.vercel.app</a>
- **GraphQL Endpoint:** <a href="https://mongol-api-graphql.vercel.app/api/graphql" target="_blank">https://mongol-api-graphql.vercel.app/api/graphql</a>

## Website

Visit the <a href="https://mongol-api.vercel.app/" target="_blank">Mongol-API Website</a> for more information.

## Types

### Province

- `name`: The name of the province.
- `cities`: A list of major cities in the province.

### TouristAttraction

- `name`: The name of the tourist attraction.
- `description`: A description of the attraction.
- `imageUrl`: URL to an image of the attraction.
- `location`: The location or region of the attraction.

### HistoricalSite

- `name`: The name of the historical site.
- `description`: A description of the site.
- `era`: The historical era the site belongs to.
- `location`: The location or region of the site.

### CulturalEvent

- `name`: The name of the cultural event.
- `description`: A description of the event.
- `date`: The date of the event.
- `location`: The location or venue of the event.

### Dish

- `name`: The name of the traditional dish.
- `description`: A description of the dish.
- `ingredients`: List of ingredients used in the dish.

### Wildlife

- `name`: The name of the wildlife species.
- `description`: A description of the species.
- `habitat`: The habitat where the species is found.

### LanguageAndCulture

- `language`: The Mongolian language details.
- `greetings`: Common greetings and phrases.
- `traditions`: Cultural traditions and practices.

## Queries

### 1. Basic Information

Get general information about Mongolia.

```graphql
query {
  mongolia {
    name: String
    capital: String
    population: Int
    area: Float
    languages: [String]
    currency: String
  }
}
```

### 2. Provinces and Cities

Retrieve a list of provinces and their major cities in Mongolia.

```graphql
query {
  mongolia {
    provinces: [Province]
  }
}
```

### 3. Tourist Attractions

Get information about popular tourist attractions in Mongolia.

```graphql
query {
  mongolia {
    touristAttractions: [TouristAttraction]
  }
}
```

### 4. Historical Sites

Retrieve details about historical sites in Mongolia.

```graphql
query {
  mongolia {
    historicalSites: [HistoricalSite]
  }
}
```

### 5. Cultural Events

Get a list of cultural events or festivals celebrated in Mongolia.

```graphql
query {
  mongolia {
    culturalEvents: [CulturalEvent]
  }
}
```

### 6. Cuisine

Retrieve information about traditional Mongolian dishes.

```graphql
query {
  mongolia {
    cuisine: [Dish]
  }
}
```

### 7. Wildlife

Retrieve information about traditional Mongolian dishes.

```graphql
query {
  mongolia {
    wildlife: [Wildlife]
  }
}
```

### 8. Language and Culture

Retrieve information about the Mongolian language and cultural practices.

```graphql
query {
  mongolia {
    languageAndCulture: LanguageAndCulture
  }
}
```

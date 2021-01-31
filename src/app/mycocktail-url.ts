export class Urls {
    public static BASE_URL: string = 'http://localhost:9090/mycocktail/';
    public static FIND_ALL_INGREDIENTS_URL: string = Urls.BASE_URL + 'ingredient/all';
    public static FIND_ALL_INGREDIENTS_BY_TYPE_URL: string = Urls.FIND_ALL_INGREDIENTS_URL + '/';
    public static CHECK_SERVER_STATUS_URL: string = Urls.BASE_URL + "server/status";
}
export class Urls {
    public static BASE: string = 'http://localhost:9090/mycocktail/';
    public static FIND_ALL_INGREDIENTS: string = Urls.BASE + 'ingredient/all';
    public static FIND_ALL_INGREDIENTS_BY_TYPE: string = Urls.FIND_ALL_INGREDIENTS + '/';
    public static CHECK_SERVER_STATUS_URL: string = Urls.BASE + "server/status";
}

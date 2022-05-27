export class APIEndpointURLs {
  private static readonly baseUrl = '/java-api/api';

  // User
  public static readonly userUrl = APIEndpointURLs.baseUrl + '/user';
  public static readonly allUser = APIEndpointURLs.userUrl + '/all';

  //Property
  public static readonly propertyUrl = APIEndpointURLs.baseUrl + '/property';
  public static readonly allProperty = APIEndpointURLs.propertyUrl + '/all';

  // Booking
  public static readonly bookingUrl = APIEndpointURLs.baseUrl + '/booking';
  public static readonly allBooking = APIEndpointURLs.bookingUrl + '/all';

  // Register
  public static readonly register = APIEndpointURLs.baseUrl + '/auth/register';

  // Login
  public static readonly login = APIEndpointURLs.baseUrl + '/auth/login';
}

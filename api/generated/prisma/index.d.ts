
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model Device
 * 
 */
export type Device = $Result.DefaultSelection<Prisma.$DevicePayload>
/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model JwtToken
 * 
 */
export type JwtToken = $Result.DefaultSelection<Prisma.$JwtTokenPayload>
/**
 * Model JwtActivity
 * 
 */
export type JwtActivity = $Result.DefaultSelection<Prisma.$JwtActivityPayload>
/**
 * Model Locations
 * 
 */
export type Locations = $Result.DefaultSelection<Prisma.$LocationsPayload>
/**
 * Model DeviceConfiguration
 * 
 */
export type DeviceConfiguration = $Result.DefaultSelection<Prisma.$DeviceConfigurationPayload>
/**
 * Model Connection
 * 
 */
export type Connection = $Result.DefaultSelection<Prisma.$ConnectionPayload>
/**
 * Model Record
 * 
 */
export type Record = $Result.DefaultSelection<Prisma.$RecordPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Devices
 * const devices = await prisma.device.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Devices
   * const devices = await prisma.device.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.device`: Exposes CRUD operations for the **Device** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Devices
    * const devices = await prisma.device.findMany()
    * ```
    */
  get device(): Prisma.DeviceDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.jwtToken`: Exposes CRUD operations for the **JwtToken** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more JwtTokens
    * const jwtTokens = await prisma.jwtToken.findMany()
    * ```
    */
  get jwtToken(): Prisma.JwtTokenDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.jwtActivity`: Exposes CRUD operations for the **JwtActivity** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more JwtActivities
    * const jwtActivities = await prisma.jwtActivity.findMany()
    * ```
    */
  get jwtActivity(): Prisma.JwtActivityDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.locations`: Exposes CRUD operations for the **Locations** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Locations
    * const locations = await prisma.locations.findMany()
    * ```
    */
  get locations(): Prisma.LocationsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.deviceConfiguration`: Exposes CRUD operations for the **DeviceConfiguration** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more DeviceConfigurations
    * const deviceConfigurations = await prisma.deviceConfiguration.findMany()
    * ```
    */
  get deviceConfiguration(): Prisma.DeviceConfigurationDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.connection`: Exposes CRUD operations for the **Connection** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Connections
    * const connections = await prisma.connection.findMany()
    * ```
    */
  get connection(): Prisma.ConnectionDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.record`: Exposes CRUD operations for the **Record** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Records
    * const records = await prisma.record.findMany()
    * ```
    */
  get record(): Prisma.RecordDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.8.2
   * Query Engine version: 2060c79ba17c6bb9f5823312b6f6b7f4a845738e
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    Device: 'Device',
    User: 'User',
    JwtToken: 'JwtToken',
    JwtActivity: 'JwtActivity',
    Locations: 'Locations',
    DeviceConfiguration: 'DeviceConfiguration',
    Connection: 'Connection',
    Record: 'Record'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "device" | "user" | "jwtToken" | "jwtActivity" | "locations" | "deviceConfiguration" | "connection" | "record"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Device: {
        payload: Prisma.$DevicePayload<ExtArgs>
        fields: Prisma.DeviceFieldRefs
        operations: {
          findUnique: {
            args: Prisma.DeviceFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DevicePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.DeviceFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DevicePayload>
          }
          findFirst: {
            args: Prisma.DeviceFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DevicePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.DeviceFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DevicePayload>
          }
          findMany: {
            args: Prisma.DeviceFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DevicePayload>[]
          }
          create: {
            args: Prisma.DeviceCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DevicePayload>
          }
          createMany: {
            args: Prisma.DeviceCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.DeviceCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DevicePayload>[]
          }
          delete: {
            args: Prisma.DeviceDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DevicePayload>
          }
          update: {
            args: Prisma.DeviceUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DevicePayload>
          }
          deleteMany: {
            args: Prisma.DeviceDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.DeviceUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.DeviceUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DevicePayload>[]
          }
          upsert: {
            args: Prisma.DeviceUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DevicePayload>
          }
          aggregate: {
            args: Prisma.DeviceAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateDevice>
          }
          groupBy: {
            args: Prisma.DeviceGroupByArgs<ExtArgs>
            result: $Utils.Optional<DeviceGroupByOutputType>[]
          }
          count: {
            args: Prisma.DeviceCountArgs<ExtArgs>
            result: $Utils.Optional<DeviceCountAggregateOutputType> | number
          }
        }
      }
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      JwtToken: {
        payload: Prisma.$JwtTokenPayload<ExtArgs>
        fields: Prisma.JwtTokenFieldRefs
        operations: {
          findUnique: {
            args: Prisma.JwtTokenFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JwtTokenPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.JwtTokenFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JwtTokenPayload>
          }
          findFirst: {
            args: Prisma.JwtTokenFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JwtTokenPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.JwtTokenFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JwtTokenPayload>
          }
          findMany: {
            args: Prisma.JwtTokenFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JwtTokenPayload>[]
          }
          create: {
            args: Prisma.JwtTokenCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JwtTokenPayload>
          }
          createMany: {
            args: Prisma.JwtTokenCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.JwtTokenCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JwtTokenPayload>[]
          }
          delete: {
            args: Prisma.JwtTokenDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JwtTokenPayload>
          }
          update: {
            args: Prisma.JwtTokenUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JwtTokenPayload>
          }
          deleteMany: {
            args: Prisma.JwtTokenDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.JwtTokenUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.JwtTokenUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JwtTokenPayload>[]
          }
          upsert: {
            args: Prisma.JwtTokenUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JwtTokenPayload>
          }
          aggregate: {
            args: Prisma.JwtTokenAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateJwtToken>
          }
          groupBy: {
            args: Prisma.JwtTokenGroupByArgs<ExtArgs>
            result: $Utils.Optional<JwtTokenGroupByOutputType>[]
          }
          count: {
            args: Prisma.JwtTokenCountArgs<ExtArgs>
            result: $Utils.Optional<JwtTokenCountAggregateOutputType> | number
          }
        }
      }
      JwtActivity: {
        payload: Prisma.$JwtActivityPayload<ExtArgs>
        fields: Prisma.JwtActivityFieldRefs
        operations: {
          findUnique: {
            args: Prisma.JwtActivityFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JwtActivityPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.JwtActivityFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JwtActivityPayload>
          }
          findFirst: {
            args: Prisma.JwtActivityFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JwtActivityPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.JwtActivityFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JwtActivityPayload>
          }
          findMany: {
            args: Prisma.JwtActivityFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JwtActivityPayload>[]
          }
          create: {
            args: Prisma.JwtActivityCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JwtActivityPayload>
          }
          createMany: {
            args: Prisma.JwtActivityCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.JwtActivityCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JwtActivityPayload>[]
          }
          delete: {
            args: Prisma.JwtActivityDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JwtActivityPayload>
          }
          update: {
            args: Prisma.JwtActivityUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JwtActivityPayload>
          }
          deleteMany: {
            args: Prisma.JwtActivityDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.JwtActivityUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.JwtActivityUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JwtActivityPayload>[]
          }
          upsert: {
            args: Prisma.JwtActivityUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JwtActivityPayload>
          }
          aggregate: {
            args: Prisma.JwtActivityAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateJwtActivity>
          }
          groupBy: {
            args: Prisma.JwtActivityGroupByArgs<ExtArgs>
            result: $Utils.Optional<JwtActivityGroupByOutputType>[]
          }
          count: {
            args: Prisma.JwtActivityCountArgs<ExtArgs>
            result: $Utils.Optional<JwtActivityCountAggregateOutputType> | number
          }
        }
      }
      Locations: {
        payload: Prisma.$LocationsPayload<ExtArgs>
        fields: Prisma.LocationsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.LocationsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LocationsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.LocationsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LocationsPayload>
          }
          findFirst: {
            args: Prisma.LocationsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LocationsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.LocationsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LocationsPayload>
          }
          findMany: {
            args: Prisma.LocationsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LocationsPayload>[]
          }
          create: {
            args: Prisma.LocationsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LocationsPayload>
          }
          createMany: {
            args: Prisma.LocationsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.LocationsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LocationsPayload>[]
          }
          delete: {
            args: Prisma.LocationsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LocationsPayload>
          }
          update: {
            args: Prisma.LocationsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LocationsPayload>
          }
          deleteMany: {
            args: Prisma.LocationsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.LocationsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.LocationsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LocationsPayload>[]
          }
          upsert: {
            args: Prisma.LocationsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LocationsPayload>
          }
          aggregate: {
            args: Prisma.LocationsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateLocations>
          }
          groupBy: {
            args: Prisma.LocationsGroupByArgs<ExtArgs>
            result: $Utils.Optional<LocationsGroupByOutputType>[]
          }
          count: {
            args: Prisma.LocationsCountArgs<ExtArgs>
            result: $Utils.Optional<LocationsCountAggregateOutputType> | number
          }
        }
      }
      DeviceConfiguration: {
        payload: Prisma.$DeviceConfigurationPayload<ExtArgs>
        fields: Prisma.DeviceConfigurationFieldRefs
        operations: {
          findUnique: {
            args: Prisma.DeviceConfigurationFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DeviceConfigurationPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.DeviceConfigurationFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DeviceConfigurationPayload>
          }
          findFirst: {
            args: Prisma.DeviceConfigurationFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DeviceConfigurationPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.DeviceConfigurationFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DeviceConfigurationPayload>
          }
          findMany: {
            args: Prisma.DeviceConfigurationFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DeviceConfigurationPayload>[]
          }
          create: {
            args: Prisma.DeviceConfigurationCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DeviceConfigurationPayload>
          }
          createMany: {
            args: Prisma.DeviceConfigurationCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.DeviceConfigurationCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DeviceConfigurationPayload>[]
          }
          delete: {
            args: Prisma.DeviceConfigurationDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DeviceConfigurationPayload>
          }
          update: {
            args: Prisma.DeviceConfigurationUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DeviceConfigurationPayload>
          }
          deleteMany: {
            args: Prisma.DeviceConfigurationDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.DeviceConfigurationUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.DeviceConfigurationUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DeviceConfigurationPayload>[]
          }
          upsert: {
            args: Prisma.DeviceConfigurationUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DeviceConfigurationPayload>
          }
          aggregate: {
            args: Prisma.DeviceConfigurationAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateDeviceConfiguration>
          }
          groupBy: {
            args: Prisma.DeviceConfigurationGroupByArgs<ExtArgs>
            result: $Utils.Optional<DeviceConfigurationGroupByOutputType>[]
          }
          count: {
            args: Prisma.DeviceConfigurationCountArgs<ExtArgs>
            result: $Utils.Optional<DeviceConfigurationCountAggregateOutputType> | number
          }
        }
      }
      Connection: {
        payload: Prisma.$ConnectionPayload<ExtArgs>
        fields: Prisma.ConnectionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ConnectionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConnectionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ConnectionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConnectionPayload>
          }
          findFirst: {
            args: Prisma.ConnectionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConnectionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ConnectionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConnectionPayload>
          }
          findMany: {
            args: Prisma.ConnectionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConnectionPayload>[]
          }
          create: {
            args: Prisma.ConnectionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConnectionPayload>
          }
          createMany: {
            args: Prisma.ConnectionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ConnectionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConnectionPayload>[]
          }
          delete: {
            args: Prisma.ConnectionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConnectionPayload>
          }
          update: {
            args: Prisma.ConnectionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConnectionPayload>
          }
          deleteMany: {
            args: Prisma.ConnectionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ConnectionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ConnectionUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConnectionPayload>[]
          }
          upsert: {
            args: Prisma.ConnectionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConnectionPayload>
          }
          aggregate: {
            args: Prisma.ConnectionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateConnection>
          }
          groupBy: {
            args: Prisma.ConnectionGroupByArgs<ExtArgs>
            result: $Utils.Optional<ConnectionGroupByOutputType>[]
          }
          count: {
            args: Prisma.ConnectionCountArgs<ExtArgs>
            result: $Utils.Optional<ConnectionCountAggregateOutputType> | number
          }
        }
      }
      Record: {
        payload: Prisma.$RecordPayload<ExtArgs>
        fields: Prisma.RecordFieldRefs
        operations: {
          findUnique: {
            args: Prisma.RecordFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RecordPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.RecordFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RecordPayload>
          }
          findFirst: {
            args: Prisma.RecordFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RecordPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.RecordFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RecordPayload>
          }
          findMany: {
            args: Prisma.RecordFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RecordPayload>[]
          }
          create: {
            args: Prisma.RecordCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RecordPayload>
          }
          createMany: {
            args: Prisma.RecordCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.RecordCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RecordPayload>[]
          }
          delete: {
            args: Prisma.RecordDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RecordPayload>
          }
          update: {
            args: Prisma.RecordUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RecordPayload>
          }
          deleteMany: {
            args: Prisma.RecordDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.RecordUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.RecordUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RecordPayload>[]
          }
          upsert: {
            args: Prisma.RecordUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RecordPayload>
          }
          aggregate: {
            args: Prisma.RecordAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateRecord>
          }
          groupBy: {
            args: Prisma.RecordGroupByArgs<ExtArgs>
            result: $Utils.Optional<RecordGroupByOutputType>[]
          }
          count: {
            args: Prisma.RecordCountArgs<ExtArgs>
            result: $Utils.Optional<RecordCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    device?: DeviceOmit
    user?: UserOmit
    jwtToken?: JwtTokenOmit
    jwtActivity?: JwtActivityOmit
    locations?: LocationsOmit
    deviceConfiguration?: DeviceConfigurationOmit
    connection?: ConnectionOmit
    record?: RecordOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type DeviceCountOutputType
   */

  export type DeviceCountOutputType = {
    connections: number
    locations: number
    records: number
  }

  export type DeviceCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    connections?: boolean | DeviceCountOutputTypeCountConnectionsArgs
    locations?: boolean | DeviceCountOutputTypeCountLocationsArgs
    records?: boolean | DeviceCountOutputTypeCountRecordsArgs
  }

  // Custom InputTypes
  /**
   * DeviceCountOutputType without action
   */
  export type DeviceCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DeviceCountOutputType
     */
    select?: DeviceCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * DeviceCountOutputType without action
   */
  export type DeviceCountOutputTypeCountConnectionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ConnectionWhereInput
  }

  /**
   * DeviceCountOutputType without action
   */
  export type DeviceCountOutputTypeCountLocationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LocationsWhereInput
  }

  /**
   * DeviceCountOutputType without action
   */
  export type DeviceCountOutputTypeCountRecordsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RecordWhereInput
  }


  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    connections: number
    devices: number
    jwtTokens: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    connections?: boolean | UserCountOutputTypeCountConnectionsArgs
    devices?: boolean | UserCountOutputTypeCountDevicesArgs
    jwtTokens?: boolean | UserCountOutputTypeCountJwtTokensArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountConnectionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ConnectionWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountDevicesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DeviceWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountJwtTokensArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: JwtTokenWhereInput
  }


  /**
   * Count Type JwtTokenCountOutputType
   */

  export type JwtTokenCountOutputType = {
    activities: number
  }

  export type JwtTokenCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    activities?: boolean | JwtTokenCountOutputTypeCountActivitiesArgs
  }

  // Custom InputTypes
  /**
   * JwtTokenCountOutputType without action
   */
  export type JwtTokenCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JwtTokenCountOutputType
     */
    select?: JwtTokenCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * JwtTokenCountOutputType without action
   */
  export type JwtTokenCountOutputTypeCountActivitiesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: JwtActivityWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Device
   */

  export type AggregateDevice = {
    _count: DeviceCountAggregateOutputType | null
    _min: DeviceMinAggregateOutputType | null
    _max: DeviceMaxAggregateOutputType | null
  }

  export type DeviceMinAggregateOutputType = {
    id_device: string | null
    name_device: string | null
    status_d: string | null
    update_date: Date | null
    userId: string | null
  }

  export type DeviceMaxAggregateOutputType = {
    id_device: string | null
    name_device: string | null
    status_d: string | null
    update_date: Date | null
    userId: string | null
  }

  export type DeviceCountAggregateOutputType = {
    id_device: number
    name_device: number
    status_d: number
    update_date: number
    userId: number
    _all: number
  }


  export type DeviceMinAggregateInputType = {
    id_device?: true
    name_device?: true
    status_d?: true
    update_date?: true
    userId?: true
  }

  export type DeviceMaxAggregateInputType = {
    id_device?: true
    name_device?: true
    status_d?: true
    update_date?: true
    userId?: true
  }

  export type DeviceCountAggregateInputType = {
    id_device?: true
    name_device?: true
    status_d?: true
    update_date?: true
    userId?: true
    _all?: true
  }

  export type DeviceAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Device to aggregate.
     */
    where?: DeviceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Devices to fetch.
     */
    orderBy?: DeviceOrderByWithRelationInput | DeviceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: DeviceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Devices from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Devices.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Devices
    **/
    _count?: true | DeviceCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DeviceMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DeviceMaxAggregateInputType
  }

  export type GetDeviceAggregateType<T extends DeviceAggregateArgs> = {
        [P in keyof T & keyof AggregateDevice]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDevice[P]>
      : GetScalarType<T[P], AggregateDevice[P]>
  }




  export type DeviceGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DeviceWhereInput
    orderBy?: DeviceOrderByWithAggregationInput | DeviceOrderByWithAggregationInput[]
    by: DeviceScalarFieldEnum[] | DeviceScalarFieldEnum
    having?: DeviceScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DeviceCountAggregateInputType | true
    _min?: DeviceMinAggregateInputType
    _max?: DeviceMaxAggregateInputType
  }

  export type DeviceGroupByOutputType = {
    id_device: string
    name_device: string
    status_d: string
    update_date: Date | null
    userId: string | null
    _count: DeviceCountAggregateOutputType | null
    _min: DeviceMinAggregateOutputType | null
    _max: DeviceMaxAggregateOutputType | null
  }

  type GetDeviceGroupByPayload<T extends DeviceGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<DeviceGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof DeviceGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DeviceGroupByOutputType[P]>
            : GetScalarType<T[P], DeviceGroupByOutputType[P]>
        }
      >
    >


  export type DeviceSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_device?: boolean
    name_device?: boolean
    status_d?: boolean
    update_date?: boolean
    userId?: boolean
    connections?: boolean | Device$connectionsArgs<ExtArgs>
    configuration?: boolean | Device$configurationArgs<ExtArgs>
    locations?: boolean | Device$locationsArgs<ExtArgs>
    records?: boolean | Device$recordsArgs<ExtArgs>
    user?: boolean | Device$userArgs<ExtArgs>
    _count?: boolean | DeviceCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["device"]>

  export type DeviceSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_device?: boolean
    name_device?: boolean
    status_d?: boolean
    update_date?: boolean
    userId?: boolean
    user?: boolean | Device$userArgs<ExtArgs>
  }, ExtArgs["result"]["device"]>

  export type DeviceSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_device?: boolean
    name_device?: boolean
    status_d?: boolean
    update_date?: boolean
    userId?: boolean
    user?: boolean | Device$userArgs<ExtArgs>
  }, ExtArgs["result"]["device"]>

  export type DeviceSelectScalar = {
    id_device?: boolean
    name_device?: boolean
    status_d?: boolean
    update_date?: boolean
    userId?: boolean
  }

  export type DeviceOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id_device" | "name_device" | "status_d" | "update_date" | "userId", ExtArgs["result"]["device"]>
  export type DeviceInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    connections?: boolean | Device$connectionsArgs<ExtArgs>
    configuration?: boolean | Device$configurationArgs<ExtArgs>
    locations?: boolean | Device$locationsArgs<ExtArgs>
    records?: boolean | Device$recordsArgs<ExtArgs>
    user?: boolean | Device$userArgs<ExtArgs>
    _count?: boolean | DeviceCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type DeviceIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | Device$userArgs<ExtArgs>
  }
  export type DeviceIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | Device$userArgs<ExtArgs>
  }

  export type $DevicePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Device"
    objects: {
      connections: Prisma.$ConnectionPayload<ExtArgs>[]
      configuration: Prisma.$DeviceConfigurationPayload<ExtArgs> | null
      locations: Prisma.$LocationsPayload<ExtArgs>[]
      records: Prisma.$RecordPayload<ExtArgs>[]
      user: Prisma.$UserPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id_device: string
      name_device: string
      status_d: string
      update_date: Date | null
      userId: string | null
    }, ExtArgs["result"]["device"]>
    composites: {}
  }

  type DeviceGetPayload<S extends boolean | null | undefined | DeviceDefaultArgs> = $Result.GetResult<Prisma.$DevicePayload, S>

  type DeviceCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<DeviceFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: DeviceCountAggregateInputType | true
    }

  export interface DeviceDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Device'], meta: { name: 'Device' } }
    /**
     * Find zero or one Device that matches the filter.
     * @param {DeviceFindUniqueArgs} args - Arguments to find a Device
     * @example
     * // Get one Device
     * const device = await prisma.device.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends DeviceFindUniqueArgs>(args: SelectSubset<T, DeviceFindUniqueArgs<ExtArgs>>): Prisma__DeviceClient<$Result.GetResult<Prisma.$DevicePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Device that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {DeviceFindUniqueOrThrowArgs} args - Arguments to find a Device
     * @example
     * // Get one Device
     * const device = await prisma.device.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends DeviceFindUniqueOrThrowArgs>(args: SelectSubset<T, DeviceFindUniqueOrThrowArgs<ExtArgs>>): Prisma__DeviceClient<$Result.GetResult<Prisma.$DevicePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Device that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DeviceFindFirstArgs} args - Arguments to find a Device
     * @example
     * // Get one Device
     * const device = await prisma.device.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends DeviceFindFirstArgs>(args?: SelectSubset<T, DeviceFindFirstArgs<ExtArgs>>): Prisma__DeviceClient<$Result.GetResult<Prisma.$DevicePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Device that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DeviceFindFirstOrThrowArgs} args - Arguments to find a Device
     * @example
     * // Get one Device
     * const device = await prisma.device.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends DeviceFindFirstOrThrowArgs>(args?: SelectSubset<T, DeviceFindFirstOrThrowArgs<ExtArgs>>): Prisma__DeviceClient<$Result.GetResult<Prisma.$DevicePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Devices that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DeviceFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Devices
     * const devices = await prisma.device.findMany()
     * 
     * // Get first 10 Devices
     * const devices = await prisma.device.findMany({ take: 10 })
     * 
     * // Only select the `id_device`
     * const deviceWithId_deviceOnly = await prisma.device.findMany({ select: { id_device: true } })
     * 
     */
    findMany<T extends DeviceFindManyArgs>(args?: SelectSubset<T, DeviceFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DevicePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Device.
     * @param {DeviceCreateArgs} args - Arguments to create a Device.
     * @example
     * // Create one Device
     * const Device = await prisma.device.create({
     *   data: {
     *     // ... data to create a Device
     *   }
     * })
     * 
     */
    create<T extends DeviceCreateArgs>(args: SelectSubset<T, DeviceCreateArgs<ExtArgs>>): Prisma__DeviceClient<$Result.GetResult<Prisma.$DevicePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Devices.
     * @param {DeviceCreateManyArgs} args - Arguments to create many Devices.
     * @example
     * // Create many Devices
     * const device = await prisma.device.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends DeviceCreateManyArgs>(args?: SelectSubset<T, DeviceCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Devices and returns the data saved in the database.
     * @param {DeviceCreateManyAndReturnArgs} args - Arguments to create many Devices.
     * @example
     * // Create many Devices
     * const device = await prisma.device.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Devices and only return the `id_device`
     * const deviceWithId_deviceOnly = await prisma.device.createManyAndReturn({
     *   select: { id_device: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends DeviceCreateManyAndReturnArgs>(args?: SelectSubset<T, DeviceCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DevicePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Device.
     * @param {DeviceDeleteArgs} args - Arguments to delete one Device.
     * @example
     * // Delete one Device
     * const Device = await prisma.device.delete({
     *   where: {
     *     // ... filter to delete one Device
     *   }
     * })
     * 
     */
    delete<T extends DeviceDeleteArgs>(args: SelectSubset<T, DeviceDeleteArgs<ExtArgs>>): Prisma__DeviceClient<$Result.GetResult<Prisma.$DevicePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Device.
     * @param {DeviceUpdateArgs} args - Arguments to update one Device.
     * @example
     * // Update one Device
     * const device = await prisma.device.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends DeviceUpdateArgs>(args: SelectSubset<T, DeviceUpdateArgs<ExtArgs>>): Prisma__DeviceClient<$Result.GetResult<Prisma.$DevicePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Devices.
     * @param {DeviceDeleteManyArgs} args - Arguments to filter Devices to delete.
     * @example
     * // Delete a few Devices
     * const { count } = await prisma.device.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends DeviceDeleteManyArgs>(args?: SelectSubset<T, DeviceDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Devices.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DeviceUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Devices
     * const device = await prisma.device.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends DeviceUpdateManyArgs>(args: SelectSubset<T, DeviceUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Devices and returns the data updated in the database.
     * @param {DeviceUpdateManyAndReturnArgs} args - Arguments to update many Devices.
     * @example
     * // Update many Devices
     * const device = await prisma.device.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Devices and only return the `id_device`
     * const deviceWithId_deviceOnly = await prisma.device.updateManyAndReturn({
     *   select: { id_device: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends DeviceUpdateManyAndReturnArgs>(args: SelectSubset<T, DeviceUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DevicePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Device.
     * @param {DeviceUpsertArgs} args - Arguments to update or create a Device.
     * @example
     * // Update or create a Device
     * const device = await prisma.device.upsert({
     *   create: {
     *     // ... data to create a Device
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Device we want to update
     *   }
     * })
     */
    upsert<T extends DeviceUpsertArgs>(args: SelectSubset<T, DeviceUpsertArgs<ExtArgs>>): Prisma__DeviceClient<$Result.GetResult<Prisma.$DevicePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Devices.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DeviceCountArgs} args - Arguments to filter Devices to count.
     * @example
     * // Count the number of Devices
     * const count = await prisma.device.count({
     *   where: {
     *     // ... the filter for the Devices we want to count
     *   }
     * })
    **/
    count<T extends DeviceCountArgs>(
      args?: Subset<T, DeviceCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DeviceCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Device.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DeviceAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends DeviceAggregateArgs>(args: Subset<T, DeviceAggregateArgs>): Prisma.PrismaPromise<GetDeviceAggregateType<T>>

    /**
     * Group by Device.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DeviceGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends DeviceGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: DeviceGroupByArgs['orderBy'] }
        : { orderBy?: DeviceGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, DeviceGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDeviceGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Device model
   */
  readonly fields: DeviceFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Device.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__DeviceClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    connections<T extends Device$connectionsArgs<ExtArgs> = {}>(args?: Subset<T, Device$connectionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ConnectionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    configuration<T extends Device$configurationArgs<ExtArgs> = {}>(args?: Subset<T, Device$configurationArgs<ExtArgs>>): Prisma__DeviceConfigurationClient<$Result.GetResult<Prisma.$DeviceConfigurationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    locations<T extends Device$locationsArgs<ExtArgs> = {}>(args?: Subset<T, Device$locationsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LocationsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    records<T extends Device$recordsArgs<ExtArgs> = {}>(args?: Subset<T, Device$recordsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RecordPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    user<T extends Device$userArgs<ExtArgs> = {}>(args?: Subset<T, Device$userArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Device model
   */
  interface DeviceFieldRefs {
    readonly id_device: FieldRef<"Device", 'String'>
    readonly name_device: FieldRef<"Device", 'String'>
    readonly status_d: FieldRef<"Device", 'String'>
    readonly update_date: FieldRef<"Device", 'DateTime'>
    readonly userId: FieldRef<"Device", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Device findUnique
   */
  export type DeviceFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Device
     */
    select?: DeviceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Device
     */
    omit?: DeviceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DeviceInclude<ExtArgs> | null
    /**
     * Filter, which Device to fetch.
     */
    where: DeviceWhereUniqueInput
  }

  /**
   * Device findUniqueOrThrow
   */
  export type DeviceFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Device
     */
    select?: DeviceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Device
     */
    omit?: DeviceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DeviceInclude<ExtArgs> | null
    /**
     * Filter, which Device to fetch.
     */
    where: DeviceWhereUniqueInput
  }

  /**
   * Device findFirst
   */
  export type DeviceFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Device
     */
    select?: DeviceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Device
     */
    omit?: DeviceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DeviceInclude<ExtArgs> | null
    /**
     * Filter, which Device to fetch.
     */
    where?: DeviceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Devices to fetch.
     */
    orderBy?: DeviceOrderByWithRelationInput | DeviceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Devices.
     */
    cursor?: DeviceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Devices from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Devices.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Devices.
     */
    distinct?: DeviceScalarFieldEnum | DeviceScalarFieldEnum[]
  }

  /**
   * Device findFirstOrThrow
   */
  export type DeviceFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Device
     */
    select?: DeviceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Device
     */
    omit?: DeviceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DeviceInclude<ExtArgs> | null
    /**
     * Filter, which Device to fetch.
     */
    where?: DeviceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Devices to fetch.
     */
    orderBy?: DeviceOrderByWithRelationInput | DeviceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Devices.
     */
    cursor?: DeviceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Devices from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Devices.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Devices.
     */
    distinct?: DeviceScalarFieldEnum | DeviceScalarFieldEnum[]
  }

  /**
   * Device findMany
   */
  export type DeviceFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Device
     */
    select?: DeviceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Device
     */
    omit?: DeviceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DeviceInclude<ExtArgs> | null
    /**
     * Filter, which Devices to fetch.
     */
    where?: DeviceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Devices to fetch.
     */
    orderBy?: DeviceOrderByWithRelationInput | DeviceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Devices.
     */
    cursor?: DeviceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Devices from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Devices.
     */
    skip?: number
    distinct?: DeviceScalarFieldEnum | DeviceScalarFieldEnum[]
  }

  /**
   * Device create
   */
  export type DeviceCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Device
     */
    select?: DeviceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Device
     */
    omit?: DeviceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DeviceInclude<ExtArgs> | null
    /**
     * The data needed to create a Device.
     */
    data: XOR<DeviceCreateInput, DeviceUncheckedCreateInput>
  }

  /**
   * Device createMany
   */
  export type DeviceCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Devices.
     */
    data: DeviceCreateManyInput | DeviceCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Device createManyAndReturn
   */
  export type DeviceCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Device
     */
    select?: DeviceSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Device
     */
    omit?: DeviceOmit<ExtArgs> | null
    /**
     * The data used to create many Devices.
     */
    data: DeviceCreateManyInput | DeviceCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DeviceIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Device update
   */
  export type DeviceUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Device
     */
    select?: DeviceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Device
     */
    omit?: DeviceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DeviceInclude<ExtArgs> | null
    /**
     * The data needed to update a Device.
     */
    data: XOR<DeviceUpdateInput, DeviceUncheckedUpdateInput>
    /**
     * Choose, which Device to update.
     */
    where: DeviceWhereUniqueInput
  }

  /**
   * Device updateMany
   */
  export type DeviceUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Devices.
     */
    data: XOR<DeviceUpdateManyMutationInput, DeviceUncheckedUpdateManyInput>
    /**
     * Filter which Devices to update
     */
    where?: DeviceWhereInput
    /**
     * Limit how many Devices to update.
     */
    limit?: number
  }

  /**
   * Device updateManyAndReturn
   */
  export type DeviceUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Device
     */
    select?: DeviceSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Device
     */
    omit?: DeviceOmit<ExtArgs> | null
    /**
     * The data used to update Devices.
     */
    data: XOR<DeviceUpdateManyMutationInput, DeviceUncheckedUpdateManyInput>
    /**
     * Filter which Devices to update
     */
    where?: DeviceWhereInput
    /**
     * Limit how many Devices to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DeviceIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Device upsert
   */
  export type DeviceUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Device
     */
    select?: DeviceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Device
     */
    omit?: DeviceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DeviceInclude<ExtArgs> | null
    /**
     * The filter to search for the Device to update in case it exists.
     */
    where: DeviceWhereUniqueInput
    /**
     * In case the Device found by the `where` argument doesn't exist, create a new Device with this data.
     */
    create: XOR<DeviceCreateInput, DeviceUncheckedCreateInput>
    /**
     * In case the Device was found with the provided `where` argument, update it with this data.
     */
    update: XOR<DeviceUpdateInput, DeviceUncheckedUpdateInput>
  }

  /**
   * Device delete
   */
  export type DeviceDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Device
     */
    select?: DeviceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Device
     */
    omit?: DeviceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DeviceInclude<ExtArgs> | null
    /**
     * Filter which Device to delete.
     */
    where: DeviceWhereUniqueInput
  }

  /**
   * Device deleteMany
   */
  export type DeviceDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Devices to delete
     */
    where?: DeviceWhereInput
    /**
     * Limit how many Devices to delete.
     */
    limit?: number
  }

  /**
   * Device.connections
   */
  export type Device$connectionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Connection
     */
    select?: ConnectionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Connection
     */
    omit?: ConnectionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConnectionInclude<ExtArgs> | null
    where?: ConnectionWhereInput
    orderBy?: ConnectionOrderByWithRelationInput | ConnectionOrderByWithRelationInput[]
    cursor?: ConnectionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ConnectionScalarFieldEnum | ConnectionScalarFieldEnum[]
  }

  /**
   * Device.configuration
   */
  export type Device$configurationArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DeviceConfiguration
     */
    select?: DeviceConfigurationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DeviceConfiguration
     */
    omit?: DeviceConfigurationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DeviceConfigurationInclude<ExtArgs> | null
    where?: DeviceConfigurationWhereInput
  }

  /**
   * Device.locations
   */
  export type Device$locationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Locations
     */
    select?: LocationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Locations
     */
    omit?: LocationsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LocationsInclude<ExtArgs> | null
    where?: LocationsWhereInput
    orderBy?: LocationsOrderByWithRelationInput | LocationsOrderByWithRelationInput[]
    cursor?: LocationsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: LocationsScalarFieldEnum | LocationsScalarFieldEnum[]
  }

  /**
   * Device.records
   */
  export type Device$recordsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Record
     */
    select?: RecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Record
     */
    omit?: RecordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecordInclude<ExtArgs> | null
    where?: RecordWhereInput
    orderBy?: RecordOrderByWithRelationInput | RecordOrderByWithRelationInput[]
    cursor?: RecordWhereUniqueInput
    take?: number
    skip?: number
    distinct?: RecordScalarFieldEnum | RecordScalarFieldEnum[]
  }

  /**
   * Device.user
   */
  export type Device$userArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    where?: UserWhereInput
  }

  /**
   * Device without action
   */
  export type DeviceDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Device
     */
    select?: DeviceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Device
     */
    omit?: DeviceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DeviceInclude<ExtArgs> | null
  }


  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserAvgAggregateOutputType = {
    jwt_version: number | null
  }

  export type UserSumAggregateOutputType = {
    jwt_version: number | null
  }

  export type UserMinAggregateOutputType = {
    id: string | null
    username: string | null
    phone_number: string | null
    email: string | null
    password_u: string | null
    creation_date: Date | null
    update_date: Date | null
    jwt_version: number | null
    last_login: Date | null
    role: string | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    username: string | null
    phone_number: string | null
    email: string | null
    password_u: string | null
    creation_date: Date | null
    update_date: Date | null
    jwt_version: number | null
    last_login: Date | null
    role: string | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    username: number
    phone_number: number
    email: number
    password_u: number
    creation_date: number
    update_date: number
    jwt_version: number
    last_login: number
    role: number
    _all: number
  }


  export type UserAvgAggregateInputType = {
    jwt_version?: true
  }

  export type UserSumAggregateInputType = {
    jwt_version?: true
  }

  export type UserMinAggregateInputType = {
    id?: true
    username?: true
    phone_number?: true
    email?: true
    password_u?: true
    creation_date?: true
    update_date?: true
    jwt_version?: true
    last_login?: true
    role?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    username?: true
    phone_number?: true
    email?: true
    password_u?: true
    creation_date?: true
    update_date?: true
    jwt_version?: true
    last_login?: true
    role?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    username?: true
    phone_number?: true
    email?: true
    password_u?: true
    creation_date?: true
    update_date?: true
    jwt_version?: true
    last_login?: true
    role?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UserAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _avg?: UserAvgAggregateInputType
    _sum?: UserSumAggregateInputType
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: string
    username: string
    phone_number: string
    email: string
    password_u: string
    creation_date: Date
    update_date: Date | null
    jwt_version: number
    last_login: Date | null
    role: string
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    username?: boolean
    phone_number?: boolean
    email?: boolean
    password_u?: boolean
    creation_date?: boolean
    update_date?: boolean
    jwt_version?: boolean
    last_login?: boolean
    role?: boolean
    connections?: boolean | User$connectionsArgs<ExtArgs>
    devices?: boolean | User$devicesArgs<ExtArgs>
    jwtTokens?: boolean | User$jwtTokensArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    username?: boolean
    phone_number?: boolean
    email?: boolean
    password_u?: boolean
    creation_date?: boolean
    update_date?: boolean
    jwt_version?: boolean
    last_login?: boolean
    role?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    username?: boolean
    phone_number?: boolean
    email?: boolean
    password_u?: boolean
    creation_date?: boolean
    update_date?: boolean
    jwt_version?: boolean
    last_login?: boolean
    role?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    username?: boolean
    phone_number?: boolean
    email?: boolean
    password_u?: boolean
    creation_date?: boolean
    update_date?: boolean
    jwt_version?: boolean
    last_login?: boolean
    role?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "username" | "phone_number" | "email" | "password_u" | "creation_date" | "update_date" | "jwt_version" | "last_login" | "role", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    connections?: boolean | User$connectionsArgs<ExtArgs>
    devices?: boolean | User$devicesArgs<ExtArgs>
    jwtTokens?: boolean | User$jwtTokensArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      connections: Prisma.$ConnectionPayload<ExtArgs>[]
      devices: Prisma.$DevicePayload<ExtArgs>[]
      jwtTokens: Prisma.$JwtTokenPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      username: string
      phone_number: string
      email: string
      password_u: string
      creation_date: Date
      update_date: Date | null
      jwt_version: number
      last_login: Date | null
      role: string
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {UserUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const userWithIdOnly = await prisma.user.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(args: SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    connections<T extends User$connectionsArgs<ExtArgs> = {}>(args?: Subset<T, User$connectionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ConnectionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    devices<T extends User$devicesArgs<ExtArgs> = {}>(args?: Subset<T, User$devicesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DevicePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    jwtTokens<T extends User$jwtTokensArgs<ExtArgs> = {}>(args?: Subset<T, User$jwtTokensArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$JwtTokenPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'String'>
    readonly username: FieldRef<"User", 'String'>
    readonly phone_number: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly password_u: FieldRef<"User", 'String'>
    readonly creation_date: FieldRef<"User", 'DateTime'>
    readonly update_date: FieldRef<"User", 'DateTime'>
    readonly jwt_version: FieldRef<"User", 'Int'>
    readonly last_login: FieldRef<"User", 'DateTime'>
    readonly role: FieldRef<"User", 'String'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User updateManyAndReturn
   */
  export type UserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User.connections
   */
  export type User$connectionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Connection
     */
    select?: ConnectionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Connection
     */
    omit?: ConnectionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConnectionInclude<ExtArgs> | null
    where?: ConnectionWhereInput
    orderBy?: ConnectionOrderByWithRelationInput | ConnectionOrderByWithRelationInput[]
    cursor?: ConnectionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ConnectionScalarFieldEnum | ConnectionScalarFieldEnum[]
  }

  /**
   * User.devices
   */
  export type User$devicesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Device
     */
    select?: DeviceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Device
     */
    omit?: DeviceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DeviceInclude<ExtArgs> | null
    where?: DeviceWhereInput
    orderBy?: DeviceOrderByWithRelationInput | DeviceOrderByWithRelationInput[]
    cursor?: DeviceWhereUniqueInput
    take?: number
    skip?: number
    distinct?: DeviceScalarFieldEnum | DeviceScalarFieldEnum[]
  }

  /**
   * User.jwtTokens
   */
  export type User$jwtTokensArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JwtToken
     */
    select?: JwtTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the JwtToken
     */
    omit?: JwtTokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JwtTokenInclude<ExtArgs> | null
    where?: JwtTokenWhereInput
    orderBy?: JwtTokenOrderByWithRelationInput | JwtTokenOrderByWithRelationInput[]
    cursor?: JwtTokenWhereUniqueInput
    take?: number
    skip?: number
    distinct?: JwtTokenScalarFieldEnum | JwtTokenScalarFieldEnum[]
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model JwtToken
   */

  export type AggregateJwtToken = {
    _count: JwtTokenCountAggregateOutputType | null
    _avg: JwtTokenAvgAggregateOutputType | null
    _sum: JwtTokenSumAggregateOutputType | null
    _min: JwtTokenMinAggregateOutputType | null
    _max: JwtTokenMaxAggregateOutputType | null
  }

  export type JwtTokenAvgAggregateOutputType = {
    useCount: number | null
    maxUses: number | null
  }

  export type JwtTokenSumAggregateOutputType = {
    useCount: number | null
    maxUses: number | null
  }

  export type JwtTokenMinAggregateOutputType = {
    id: string | null
    tokenHash: string | null
    userId: string | null
    tokenType: string | null
    createdAt: Date | null
    expiresAt: Date | null
    lastUsedAt: Date | null
    useCount: number | null
    maxUses: number | null
    isRevoked: boolean | null
  }

  export type JwtTokenMaxAggregateOutputType = {
    id: string | null
    tokenHash: string | null
    userId: string | null
    tokenType: string | null
    createdAt: Date | null
    expiresAt: Date | null
    lastUsedAt: Date | null
    useCount: number | null
    maxUses: number | null
    isRevoked: boolean | null
  }

  export type JwtTokenCountAggregateOutputType = {
    id: number
    tokenHash: number
    userId: number
    tokenType: number
    createdAt: number
    expiresAt: number
    lastUsedAt: number
    useCount: number
    maxUses: number
    isRevoked: number
    _all: number
  }


  export type JwtTokenAvgAggregateInputType = {
    useCount?: true
    maxUses?: true
  }

  export type JwtTokenSumAggregateInputType = {
    useCount?: true
    maxUses?: true
  }

  export type JwtTokenMinAggregateInputType = {
    id?: true
    tokenHash?: true
    userId?: true
    tokenType?: true
    createdAt?: true
    expiresAt?: true
    lastUsedAt?: true
    useCount?: true
    maxUses?: true
    isRevoked?: true
  }

  export type JwtTokenMaxAggregateInputType = {
    id?: true
    tokenHash?: true
    userId?: true
    tokenType?: true
    createdAt?: true
    expiresAt?: true
    lastUsedAt?: true
    useCount?: true
    maxUses?: true
    isRevoked?: true
  }

  export type JwtTokenCountAggregateInputType = {
    id?: true
    tokenHash?: true
    userId?: true
    tokenType?: true
    createdAt?: true
    expiresAt?: true
    lastUsedAt?: true
    useCount?: true
    maxUses?: true
    isRevoked?: true
    _all?: true
  }

  export type JwtTokenAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which JwtToken to aggregate.
     */
    where?: JwtTokenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of JwtTokens to fetch.
     */
    orderBy?: JwtTokenOrderByWithRelationInput | JwtTokenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: JwtTokenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` JwtTokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` JwtTokens.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned JwtTokens
    **/
    _count?: true | JwtTokenCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: JwtTokenAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: JwtTokenSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: JwtTokenMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: JwtTokenMaxAggregateInputType
  }

  export type GetJwtTokenAggregateType<T extends JwtTokenAggregateArgs> = {
        [P in keyof T & keyof AggregateJwtToken]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateJwtToken[P]>
      : GetScalarType<T[P], AggregateJwtToken[P]>
  }




  export type JwtTokenGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: JwtTokenWhereInput
    orderBy?: JwtTokenOrderByWithAggregationInput | JwtTokenOrderByWithAggregationInput[]
    by: JwtTokenScalarFieldEnum[] | JwtTokenScalarFieldEnum
    having?: JwtTokenScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: JwtTokenCountAggregateInputType | true
    _avg?: JwtTokenAvgAggregateInputType
    _sum?: JwtTokenSumAggregateInputType
    _min?: JwtTokenMinAggregateInputType
    _max?: JwtTokenMaxAggregateInputType
  }

  export type JwtTokenGroupByOutputType = {
    id: string
    tokenHash: string
    userId: string
    tokenType: string
    createdAt: Date
    expiresAt: Date
    lastUsedAt: Date | null
    useCount: number
    maxUses: number
    isRevoked: boolean
    _count: JwtTokenCountAggregateOutputType | null
    _avg: JwtTokenAvgAggregateOutputType | null
    _sum: JwtTokenSumAggregateOutputType | null
    _min: JwtTokenMinAggregateOutputType | null
    _max: JwtTokenMaxAggregateOutputType | null
  }

  type GetJwtTokenGroupByPayload<T extends JwtTokenGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<JwtTokenGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof JwtTokenGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], JwtTokenGroupByOutputType[P]>
            : GetScalarType<T[P], JwtTokenGroupByOutputType[P]>
        }
      >
    >


  export type JwtTokenSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    tokenHash?: boolean
    userId?: boolean
    tokenType?: boolean
    createdAt?: boolean
    expiresAt?: boolean
    lastUsedAt?: boolean
    useCount?: boolean
    maxUses?: boolean
    isRevoked?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    activities?: boolean | JwtToken$activitiesArgs<ExtArgs>
    _count?: boolean | JwtTokenCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["jwtToken"]>

  export type JwtTokenSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    tokenHash?: boolean
    userId?: boolean
    tokenType?: boolean
    createdAt?: boolean
    expiresAt?: boolean
    lastUsedAt?: boolean
    useCount?: boolean
    maxUses?: boolean
    isRevoked?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["jwtToken"]>

  export type JwtTokenSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    tokenHash?: boolean
    userId?: boolean
    tokenType?: boolean
    createdAt?: boolean
    expiresAt?: boolean
    lastUsedAt?: boolean
    useCount?: boolean
    maxUses?: boolean
    isRevoked?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["jwtToken"]>

  export type JwtTokenSelectScalar = {
    id?: boolean
    tokenHash?: boolean
    userId?: boolean
    tokenType?: boolean
    createdAt?: boolean
    expiresAt?: boolean
    lastUsedAt?: boolean
    useCount?: boolean
    maxUses?: boolean
    isRevoked?: boolean
  }

  export type JwtTokenOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "tokenHash" | "userId" | "tokenType" | "createdAt" | "expiresAt" | "lastUsedAt" | "useCount" | "maxUses" | "isRevoked", ExtArgs["result"]["jwtToken"]>
  export type JwtTokenInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    activities?: boolean | JwtToken$activitiesArgs<ExtArgs>
    _count?: boolean | JwtTokenCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type JwtTokenIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type JwtTokenIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $JwtTokenPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "JwtToken"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      activities: Prisma.$JwtActivityPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      tokenHash: string
      userId: string
      tokenType: string
      createdAt: Date
      expiresAt: Date
      lastUsedAt: Date | null
      useCount: number
      maxUses: number
      isRevoked: boolean
    }, ExtArgs["result"]["jwtToken"]>
    composites: {}
  }

  type JwtTokenGetPayload<S extends boolean | null | undefined | JwtTokenDefaultArgs> = $Result.GetResult<Prisma.$JwtTokenPayload, S>

  type JwtTokenCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<JwtTokenFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: JwtTokenCountAggregateInputType | true
    }

  export interface JwtTokenDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['JwtToken'], meta: { name: 'JwtToken' } }
    /**
     * Find zero or one JwtToken that matches the filter.
     * @param {JwtTokenFindUniqueArgs} args - Arguments to find a JwtToken
     * @example
     * // Get one JwtToken
     * const jwtToken = await prisma.jwtToken.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends JwtTokenFindUniqueArgs>(args: SelectSubset<T, JwtTokenFindUniqueArgs<ExtArgs>>): Prisma__JwtTokenClient<$Result.GetResult<Prisma.$JwtTokenPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one JwtToken that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {JwtTokenFindUniqueOrThrowArgs} args - Arguments to find a JwtToken
     * @example
     * // Get one JwtToken
     * const jwtToken = await prisma.jwtToken.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends JwtTokenFindUniqueOrThrowArgs>(args: SelectSubset<T, JwtTokenFindUniqueOrThrowArgs<ExtArgs>>): Prisma__JwtTokenClient<$Result.GetResult<Prisma.$JwtTokenPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first JwtToken that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JwtTokenFindFirstArgs} args - Arguments to find a JwtToken
     * @example
     * // Get one JwtToken
     * const jwtToken = await prisma.jwtToken.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends JwtTokenFindFirstArgs>(args?: SelectSubset<T, JwtTokenFindFirstArgs<ExtArgs>>): Prisma__JwtTokenClient<$Result.GetResult<Prisma.$JwtTokenPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first JwtToken that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JwtTokenFindFirstOrThrowArgs} args - Arguments to find a JwtToken
     * @example
     * // Get one JwtToken
     * const jwtToken = await prisma.jwtToken.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends JwtTokenFindFirstOrThrowArgs>(args?: SelectSubset<T, JwtTokenFindFirstOrThrowArgs<ExtArgs>>): Prisma__JwtTokenClient<$Result.GetResult<Prisma.$JwtTokenPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more JwtTokens that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JwtTokenFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all JwtTokens
     * const jwtTokens = await prisma.jwtToken.findMany()
     * 
     * // Get first 10 JwtTokens
     * const jwtTokens = await prisma.jwtToken.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const jwtTokenWithIdOnly = await prisma.jwtToken.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends JwtTokenFindManyArgs>(args?: SelectSubset<T, JwtTokenFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$JwtTokenPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a JwtToken.
     * @param {JwtTokenCreateArgs} args - Arguments to create a JwtToken.
     * @example
     * // Create one JwtToken
     * const JwtToken = await prisma.jwtToken.create({
     *   data: {
     *     // ... data to create a JwtToken
     *   }
     * })
     * 
     */
    create<T extends JwtTokenCreateArgs>(args: SelectSubset<T, JwtTokenCreateArgs<ExtArgs>>): Prisma__JwtTokenClient<$Result.GetResult<Prisma.$JwtTokenPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many JwtTokens.
     * @param {JwtTokenCreateManyArgs} args - Arguments to create many JwtTokens.
     * @example
     * // Create many JwtTokens
     * const jwtToken = await prisma.jwtToken.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends JwtTokenCreateManyArgs>(args?: SelectSubset<T, JwtTokenCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many JwtTokens and returns the data saved in the database.
     * @param {JwtTokenCreateManyAndReturnArgs} args - Arguments to create many JwtTokens.
     * @example
     * // Create many JwtTokens
     * const jwtToken = await prisma.jwtToken.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many JwtTokens and only return the `id`
     * const jwtTokenWithIdOnly = await prisma.jwtToken.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends JwtTokenCreateManyAndReturnArgs>(args?: SelectSubset<T, JwtTokenCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$JwtTokenPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a JwtToken.
     * @param {JwtTokenDeleteArgs} args - Arguments to delete one JwtToken.
     * @example
     * // Delete one JwtToken
     * const JwtToken = await prisma.jwtToken.delete({
     *   where: {
     *     // ... filter to delete one JwtToken
     *   }
     * })
     * 
     */
    delete<T extends JwtTokenDeleteArgs>(args: SelectSubset<T, JwtTokenDeleteArgs<ExtArgs>>): Prisma__JwtTokenClient<$Result.GetResult<Prisma.$JwtTokenPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one JwtToken.
     * @param {JwtTokenUpdateArgs} args - Arguments to update one JwtToken.
     * @example
     * // Update one JwtToken
     * const jwtToken = await prisma.jwtToken.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends JwtTokenUpdateArgs>(args: SelectSubset<T, JwtTokenUpdateArgs<ExtArgs>>): Prisma__JwtTokenClient<$Result.GetResult<Prisma.$JwtTokenPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more JwtTokens.
     * @param {JwtTokenDeleteManyArgs} args - Arguments to filter JwtTokens to delete.
     * @example
     * // Delete a few JwtTokens
     * const { count } = await prisma.jwtToken.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends JwtTokenDeleteManyArgs>(args?: SelectSubset<T, JwtTokenDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more JwtTokens.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JwtTokenUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many JwtTokens
     * const jwtToken = await prisma.jwtToken.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends JwtTokenUpdateManyArgs>(args: SelectSubset<T, JwtTokenUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more JwtTokens and returns the data updated in the database.
     * @param {JwtTokenUpdateManyAndReturnArgs} args - Arguments to update many JwtTokens.
     * @example
     * // Update many JwtTokens
     * const jwtToken = await prisma.jwtToken.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more JwtTokens and only return the `id`
     * const jwtTokenWithIdOnly = await prisma.jwtToken.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends JwtTokenUpdateManyAndReturnArgs>(args: SelectSubset<T, JwtTokenUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$JwtTokenPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one JwtToken.
     * @param {JwtTokenUpsertArgs} args - Arguments to update or create a JwtToken.
     * @example
     * // Update or create a JwtToken
     * const jwtToken = await prisma.jwtToken.upsert({
     *   create: {
     *     // ... data to create a JwtToken
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the JwtToken we want to update
     *   }
     * })
     */
    upsert<T extends JwtTokenUpsertArgs>(args: SelectSubset<T, JwtTokenUpsertArgs<ExtArgs>>): Prisma__JwtTokenClient<$Result.GetResult<Prisma.$JwtTokenPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of JwtTokens.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JwtTokenCountArgs} args - Arguments to filter JwtTokens to count.
     * @example
     * // Count the number of JwtTokens
     * const count = await prisma.jwtToken.count({
     *   where: {
     *     // ... the filter for the JwtTokens we want to count
     *   }
     * })
    **/
    count<T extends JwtTokenCountArgs>(
      args?: Subset<T, JwtTokenCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], JwtTokenCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a JwtToken.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JwtTokenAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends JwtTokenAggregateArgs>(args: Subset<T, JwtTokenAggregateArgs>): Prisma.PrismaPromise<GetJwtTokenAggregateType<T>>

    /**
     * Group by JwtToken.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JwtTokenGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends JwtTokenGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: JwtTokenGroupByArgs['orderBy'] }
        : { orderBy?: JwtTokenGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, JwtTokenGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetJwtTokenGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the JwtToken model
   */
  readonly fields: JwtTokenFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for JwtToken.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__JwtTokenClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    activities<T extends JwtToken$activitiesArgs<ExtArgs> = {}>(args?: Subset<T, JwtToken$activitiesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$JwtActivityPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the JwtToken model
   */
  interface JwtTokenFieldRefs {
    readonly id: FieldRef<"JwtToken", 'String'>
    readonly tokenHash: FieldRef<"JwtToken", 'String'>
    readonly userId: FieldRef<"JwtToken", 'String'>
    readonly tokenType: FieldRef<"JwtToken", 'String'>
    readonly createdAt: FieldRef<"JwtToken", 'DateTime'>
    readonly expiresAt: FieldRef<"JwtToken", 'DateTime'>
    readonly lastUsedAt: FieldRef<"JwtToken", 'DateTime'>
    readonly useCount: FieldRef<"JwtToken", 'Int'>
    readonly maxUses: FieldRef<"JwtToken", 'Int'>
    readonly isRevoked: FieldRef<"JwtToken", 'Boolean'>
  }
    

  // Custom InputTypes
  /**
   * JwtToken findUnique
   */
  export type JwtTokenFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JwtToken
     */
    select?: JwtTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the JwtToken
     */
    omit?: JwtTokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JwtTokenInclude<ExtArgs> | null
    /**
     * Filter, which JwtToken to fetch.
     */
    where: JwtTokenWhereUniqueInput
  }

  /**
   * JwtToken findUniqueOrThrow
   */
  export type JwtTokenFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JwtToken
     */
    select?: JwtTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the JwtToken
     */
    omit?: JwtTokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JwtTokenInclude<ExtArgs> | null
    /**
     * Filter, which JwtToken to fetch.
     */
    where: JwtTokenWhereUniqueInput
  }

  /**
   * JwtToken findFirst
   */
  export type JwtTokenFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JwtToken
     */
    select?: JwtTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the JwtToken
     */
    omit?: JwtTokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JwtTokenInclude<ExtArgs> | null
    /**
     * Filter, which JwtToken to fetch.
     */
    where?: JwtTokenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of JwtTokens to fetch.
     */
    orderBy?: JwtTokenOrderByWithRelationInput | JwtTokenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for JwtTokens.
     */
    cursor?: JwtTokenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` JwtTokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` JwtTokens.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of JwtTokens.
     */
    distinct?: JwtTokenScalarFieldEnum | JwtTokenScalarFieldEnum[]
  }

  /**
   * JwtToken findFirstOrThrow
   */
  export type JwtTokenFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JwtToken
     */
    select?: JwtTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the JwtToken
     */
    omit?: JwtTokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JwtTokenInclude<ExtArgs> | null
    /**
     * Filter, which JwtToken to fetch.
     */
    where?: JwtTokenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of JwtTokens to fetch.
     */
    orderBy?: JwtTokenOrderByWithRelationInput | JwtTokenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for JwtTokens.
     */
    cursor?: JwtTokenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` JwtTokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` JwtTokens.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of JwtTokens.
     */
    distinct?: JwtTokenScalarFieldEnum | JwtTokenScalarFieldEnum[]
  }

  /**
   * JwtToken findMany
   */
  export type JwtTokenFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JwtToken
     */
    select?: JwtTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the JwtToken
     */
    omit?: JwtTokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JwtTokenInclude<ExtArgs> | null
    /**
     * Filter, which JwtTokens to fetch.
     */
    where?: JwtTokenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of JwtTokens to fetch.
     */
    orderBy?: JwtTokenOrderByWithRelationInput | JwtTokenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing JwtTokens.
     */
    cursor?: JwtTokenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` JwtTokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` JwtTokens.
     */
    skip?: number
    distinct?: JwtTokenScalarFieldEnum | JwtTokenScalarFieldEnum[]
  }

  /**
   * JwtToken create
   */
  export type JwtTokenCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JwtToken
     */
    select?: JwtTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the JwtToken
     */
    omit?: JwtTokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JwtTokenInclude<ExtArgs> | null
    /**
     * The data needed to create a JwtToken.
     */
    data: XOR<JwtTokenCreateInput, JwtTokenUncheckedCreateInput>
  }

  /**
   * JwtToken createMany
   */
  export type JwtTokenCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many JwtTokens.
     */
    data: JwtTokenCreateManyInput | JwtTokenCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * JwtToken createManyAndReturn
   */
  export type JwtTokenCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JwtToken
     */
    select?: JwtTokenSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the JwtToken
     */
    omit?: JwtTokenOmit<ExtArgs> | null
    /**
     * The data used to create many JwtTokens.
     */
    data: JwtTokenCreateManyInput | JwtTokenCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JwtTokenIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * JwtToken update
   */
  export type JwtTokenUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JwtToken
     */
    select?: JwtTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the JwtToken
     */
    omit?: JwtTokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JwtTokenInclude<ExtArgs> | null
    /**
     * The data needed to update a JwtToken.
     */
    data: XOR<JwtTokenUpdateInput, JwtTokenUncheckedUpdateInput>
    /**
     * Choose, which JwtToken to update.
     */
    where: JwtTokenWhereUniqueInput
  }

  /**
   * JwtToken updateMany
   */
  export type JwtTokenUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update JwtTokens.
     */
    data: XOR<JwtTokenUpdateManyMutationInput, JwtTokenUncheckedUpdateManyInput>
    /**
     * Filter which JwtTokens to update
     */
    where?: JwtTokenWhereInput
    /**
     * Limit how many JwtTokens to update.
     */
    limit?: number
  }

  /**
   * JwtToken updateManyAndReturn
   */
  export type JwtTokenUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JwtToken
     */
    select?: JwtTokenSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the JwtToken
     */
    omit?: JwtTokenOmit<ExtArgs> | null
    /**
     * The data used to update JwtTokens.
     */
    data: XOR<JwtTokenUpdateManyMutationInput, JwtTokenUncheckedUpdateManyInput>
    /**
     * Filter which JwtTokens to update
     */
    where?: JwtTokenWhereInput
    /**
     * Limit how many JwtTokens to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JwtTokenIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * JwtToken upsert
   */
  export type JwtTokenUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JwtToken
     */
    select?: JwtTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the JwtToken
     */
    omit?: JwtTokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JwtTokenInclude<ExtArgs> | null
    /**
     * The filter to search for the JwtToken to update in case it exists.
     */
    where: JwtTokenWhereUniqueInput
    /**
     * In case the JwtToken found by the `where` argument doesn't exist, create a new JwtToken with this data.
     */
    create: XOR<JwtTokenCreateInput, JwtTokenUncheckedCreateInput>
    /**
     * In case the JwtToken was found with the provided `where` argument, update it with this data.
     */
    update: XOR<JwtTokenUpdateInput, JwtTokenUncheckedUpdateInput>
  }

  /**
   * JwtToken delete
   */
  export type JwtTokenDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JwtToken
     */
    select?: JwtTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the JwtToken
     */
    omit?: JwtTokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JwtTokenInclude<ExtArgs> | null
    /**
     * Filter which JwtToken to delete.
     */
    where: JwtTokenWhereUniqueInput
  }

  /**
   * JwtToken deleteMany
   */
  export type JwtTokenDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which JwtTokens to delete
     */
    where?: JwtTokenWhereInput
    /**
     * Limit how many JwtTokens to delete.
     */
    limit?: number
  }

  /**
   * JwtToken.activities
   */
  export type JwtToken$activitiesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JwtActivity
     */
    select?: JwtActivitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the JwtActivity
     */
    omit?: JwtActivityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JwtActivityInclude<ExtArgs> | null
    where?: JwtActivityWhereInput
    orderBy?: JwtActivityOrderByWithRelationInput | JwtActivityOrderByWithRelationInput[]
    cursor?: JwtActivityWhereUniqueInput
    take?: number
    skip?: number
    distinct?: JwtActivityScalarFieldEnum | JwtActivityScalarFieldEnum[]
  }

  /**
   * JwtToken without action
   */
  export type JwtTokenDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JwtToken
     */
    select?: JwtTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the JwtToken
     */
    omit?: JwtTokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JwtTokenInclude<ExtArgs> | null
  }


  /**
   * Model JwtActivity
   */

  export type AggregateJwtActivity = {
    _count: JwtActivityCountAggregateOutputType | null
    _avg: JwtActivityAvgAggregateOutputType | null
    _sum: JwtActivitySumAggregateOutputType | null
    _min: JwtActivityMinAggregateOutputType | null
    _max: JwtActivityMaxAggregateOutputType | null
  }

  export type JwtActivityAvgAggregateOutputType = {
    id: number | null
  }

  export type JwtActivitySumAggregateOutputType = {
    id: number | null
  }

  export type JwtActivityMinAggregateOutputType = {
    id: number | null
    tokenId: string | null
    action: string | null
    performedAt: Date | null
  }

  export type JwtActivityMaxAggregateOutputType = {
    id: number | null
    tokenId: string | null
    action: string | null
    performedAt: Date | null
  }

  export type JwtActivityCountAggregateOutputType = {
    id: number
    tokenId: number
    action: number
    performedAt: number
    _all: number
  }


  export type JwtActivityAvgAggregateInputType = {
    id?: true
  }

  export type JwtActivitySumAggregateInputType = {
    id?: true
  }

  export type JwtActivityMinAggregateInputType = {
    id?: true
    tokenId?: true
    action?: true
    performedAt?: true
  }

  export type JwtActivityMaxAggregateInputType = {
    id?: true
    tokenId?: true
    action?: true
    performedAt?: true
  }

  export type JwtActivityCountAggregateInputType = {
    id?: true
    tokenId?: true
    action?: true
    performedAt?: true
    _all?: true
  }

  export type JwtActivityAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which JwtActivity to aggregate.
     */
    where?: JwtActivityWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of JwtActivities to fetch.
     */
    orderBy?: JwtActivityOrderByWithRelationInput | JwtActivityOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: JwtActivityWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` JwtActivities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` JwtActivities.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned JwtActivities
    **/
    _count?: true | JwtActivityCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: JwtActivityAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: JwtActivitySumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: JwtActivityMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: JwtActivityMaxAggregateInputType
  }

  export type GetJwtActivityAggregateType<T extends JwtActivityAggregateArgs> = {
        [P in keyof T & keyof AggregateJwtActivity]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateJwtActivity[P]>
      : GetScalarType<T[P], AggregateJwtActivity[P]>
  }




  export type JwtActivityGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: JwtActivityWhereInput
    orderBy?: JwtActivityOrderByWithAggregationInput | JwtActivityOrderByWithAggregationInput[]
    by: JwtActivityScalarFieldEnum[] | JwtActivityScalarFieldEnum
    having?: JwtActivityScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: JwtActivityCountAggregateInputType | true
    _avg?: JwtActivityAvgAggregateInputType
    _sum?: JwtActivitySumAggregateInputType
    _min?: JwtActivityMinAggregateInputType
    _max?: JwtActivityMaxAggregateInputType
  }

  export type JwtActivityGroupByOutputType = {
    id: number
    tokenId: string
    action: string
    performedAt: Date
    _count: JwtActivityCountAggregateOutputType | null
    _avg: JwtActivityAvgAggregateOutputType | null
    _sum: JwtActivitySumAggregateOutputType | null
    _min: JwtActivityMinAggregateOutputType | null
    _max: JwtActivityMaxAggregateOutputType | null
  }

  type GetJwtActivityGroupByPayload<T extends JwtActivityGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<JwtActivityGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof JwtActivityGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], JwtActivityGroupByOutputType[P]>
            : GetScalarType<T[P], JwtActivityGroupByOutputType[P]>
        }
      >
    >


  export type JwtActivitySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    tokenId?: boolean
    action?: boolean
    performedAt?: boolean
    jwtToken?: boolean | JwtTokenDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["jwtActivity"]>

  export type JwtActivitySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    tokenId?: boolean
    action?: boolean
    performedAt?: boolean
    jwtToken?: boolean | JwtTokenDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["jwtActivity"]>

  export type JwtActivitySelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    tokenId?: boolean
    action?: boolean
    performedAt?: boolean
    jwtToken?: boolean | JwtTokenDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["jwtActivity"]>

  export type JwtActivitySelectScalar = {
    id?: boolean
    tokenId?: boolean
    action?: boolean
    performedAt?: boolean
  }

  export type JwtActivityOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "tokenId" | "action" | "performedAt", ExtArgs["result"]["jwtActivity"]>
  export type JwtActivityInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    jwtToken?: boolean | JwtTokenDefaultArgs<ExtArgs>
  }
  export type JwtActivityIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    jwtToken?: boolean | JwtTokenDefaultArgs<ExtArgs>
  }
  export type JwtActivityIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    jwtToken?: boolean | JwtTokenDefaultArgs<ExtArgs>
  }

  export type $JwtActivityPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "JwtActivity"
    objects: {
      jwtToken: Prisma.$JwtTokenPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      tokenId: string
      action: string
      performedAt: Date
    }, ExtArgs["result"]["jwtActivity"]>
    composites: {}
  }

  type JwtActivityGetPayload<S extends boolean | null | undefined | JwtActivityDefaultArgs> = $Result.GetResult<Prisma.$JwtActivityPayload, S>

  type JwtActivityCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<JwtActivityFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: JwtActivityCountAggregateInputType | true
    }

  export interface JwtActivityDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['JwtActivity'], meta: { name: 'JwtActivity' } }
    /**
     * Find zero or one JwtActivity that matches the filter.
     * @param {JwtActivityFindUniqueArgs} args - Arguments to find a JwtActivity
     * @example
     * // Get one JwtActivity
     * const jwtActivity = await prisma.jwtActivity.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends JwtActivityFindUniqueArgs>(args: SelectSubset<T, JwtActivityFindUniqueArgs<ExtArgs>>): Prisma__JwtActivityClient<$Result.GetResult<Prisma.$JwtActivityPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one JwtActivity that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {JwtActivityFindUniqueOrThrowArgs} args - Arguments to find a JwtActivity
     * @example
     * // Get one JwtActivity
     * const jwtActivity = await prisma.jwtActivity.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends JwtActivityFindUniqueOrThrowArgs>(args: SelectSubset<T, JwtActivityFindUniqueOrThrowArgs<ExtArgs>>): Prisma__JwtActivityClient<$Result.GetResult<Prisma.$JwtActivityPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first JwtActivity that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JwtActivityFindFirstArgs} args - Arguments to find a JwtActivity
     * @example
     * // Get one JwtActivity
     * const jwtActivity = await prisma.jwtActivity.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends JwtActivityFindFirstArgs>(args?: SelectSubset<T, JwtActivityFindFirstArgs<ExtArgs>>): Prisma__JwtActivityClient<$Result.GetResult<Prisma.$JwtActivityPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first JwtActivity that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JwtActivityFindFirstOrThrowArgs} args - Arguments to find a JwtActivity
     * @example
     * // Get one JwtActivity
     * const jwtActivity = await prisma.jwtActivity.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends JwtActivityFindFirstOrThrowArgs>(args?: SelectSubset<T, JwtActivityFindFirstOrThrowArgs<ExtArgs>>): Prisma__JwtActivityClient<$Result.GetResult<Prisma.$JwtActivityPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more JwtActivities that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JwtActivityFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all JwtActivities
     * const jwtActivities = await prisma.jwtActivity.findMany()
     * 
     * // Get first 10 JwtActivities
     * const jwtActivities = await prisma.jwtActivity.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const jwtActivityWithIdOnly = await prisma.jwtActivity.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends JwtActivityFindManyArgs>(args?: SelectSubset<T, JwtActivityFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$JwtActivityPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a JwtActivity.
     * @param {JwtActivityCreateArgs} args - Arguments to create a JwtActivity.
     * @example
     * // Create one JwtActivity
     * const JwtActivity = await prisma.jwtActivity.create({
     *   data: {
     *     // ... data to create a JwtActivity
     *   }
     * })
     * 
     */
    create<T extends JwtActivityCreateArgs>(args: SelectSubset<T, JwtActivityCreateArgs<ExtArgs>>): Prisma__JwtActivityClient<$Result.GetResult<Prisma.$JwtActivityPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many JwtActivities.
     * @param {JwtActivityCreateManyArgs} args - Arguments to create many JwtActivities.
     * @example
     * // Create many JwtActivities
     * const jwtActivity = await prisma.jwtActivity.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends JwtActivityCreateManyArgs>(args?: SelectSubset<T, JwtActivityCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many JwtActivities and returns the data saved in the database.
     * @param {JwtActivityCreateManyAndReturnArgs} args - Arguments to create many JwtActivities.
     * @example
     * // Create many JwtActivities
     * const jwtActivity = await prisma.jwtActivity.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many JwtActivities and only return the `id`
     * const jwtActivityWithIdOnly = await prisma.jwtActivity.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends JwtActivityCreateManyAndReturnArgs>(args?: SelectSubset<T, JwtActivityCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$JwtActivityPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a JwtActivity.
     * @param {JwtActivityDeleteArgs} args - Arguments to delete one JwtActivity.
     * @example
     * // Delete one JwtActivity
     * const JwtActivity = await prisma.jwtActivity.delete({
     *   where: {
     *     // ... filter to delete one JwtActivity
     *   }
     * })
     * 
     */
    delete<T extends JwtActivityDeleteArgs>(args: SelectSubset<T, JwtActivityDeleteArgs<ExtArgs>>): Prisma__JwtActivityClient<$Result.GetResult<Prisma.$JwtActivityPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one JwtActivity.
     * @param {JwtActivityUpdateArgs} args - Arguments to update one JwtActivity.
     * @example
     * // Update one JwtActivity
     * const jwtActivity = await prisma.jwtActivity.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends JwtActivityUpdateArgs>(args: SelectSubset<T, JwtActivityUpdateArgs<ExtArgs>>): Prisma__JwtActivityClient<$Result.GetResult<Prisma.$JwtActivityPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more JwtActivities.
     * @param {JwtActivityDeleteManyArgs} args - Arguments to filter JwtActivities to delete.
     * @example
     * // Delete a few JwtActivities
     * const { count } = await prisma.jwtActivity.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends JwtActivityDeleteManyArgs>(args?: SelectSubset<T, JwtActivityDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more JwtActivities.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JwtActivityUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many JwtActivities
     * const jwtActivity = await prisma.jwtActivity.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends JwtActivityUpdateManyArgs>(args: SelectSubset<T, JwtActivityUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more JwtActivities and returns the data updated in the database.
     * @param {JwtActivityUpdateManyAndReturnArgs} args - Arguments to update many JwtActivities.
     * @example
     * // Update many JwtActivities
     * const jwtActivity = await prisma.jwtActivity.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more JwtActivities and only return the `id`
     * const jwtActivityWithIdOnly = await prisma.jwtActivity.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends JwtActivityUpdateManyAndReturnArgs>(args: SelectSubset<T, JwtActivityUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$JwtActivityPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one JwtActivity.
     * @param {JwtActivityUpsertArgs} args - Arguments to update or create a JwtActivity.
     * @example
     * // Update or create a JwtActivity
     * const jwtActivity = await prisma.jwtActivity.upsert({
     *   create: {
     *     // ... data to create a JwtActivity
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the JwtActivity we want to update
     *   }
     * })
     */
    upsert<T extends JwtActivityUpsertArgs>(args: SelectSubset<T, JwtActivityUpsertArgs<ExtArgs>>): Prisma__JwtActivityClient<$Result.GetResult<Prisma.$JwtActivityPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of JwtActivities.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JwtActivityCountArgs} args - Arguments to filter JwtActivities to count.
     * @example
     * // Count the number of JwtActivities
     * const count = await prisma.jwtActivity.count({
     *   where: {
     *     // ... the filter for the JwtActivities we want to count
     *   }
     * })
    **/
    count<T extends JwtActivityCountArgs>(
      args?: Subset<T, JwtActivityCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], JwtActivityCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a JwtActivity.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JwtActivityAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends JwtActivityAggregateArgs>(args: Subset<T, JwtActivityAggregateArgs>): Prisma.PrismaPromise<GetJwtActivityAggregateType<T>>

    /**
     * Group by JwtActivity.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JwtActivityGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends JwtActivityGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: JwtActivityGroupByArgs['orderBy'] }
        : { orderBy?: JwtActivityGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, JwtActivityGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetJwtActivityGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the JwtActivity model
   */
  readonly fields: JwtActivityFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for JwtActivity.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__JwtActivityClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    jwtToken<T extends JwtTokenDefaultArgs<ExtArgs> = {}>(args?: Subset<T, JwtTokenDefaultArgs<ExtArgs>>): Prisma__JwtTokenClient<$Result.GetResult<Prisma.$JwtTokenPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the JwtActivity model
   */
  interface JwtActivityFieldRefs {
    readonly id: FieldRef<"JwtActivity", 'Int'>
    readonly tokenId: FieldRef<"JwtActivity", 'String'>
    readonly action: FieldRef<"JwtActivity", 'String'>
    readonly performedAt: FieldRef<"JwtActivity", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * JwtActivity findUnique
   */
  export type JwtActivityFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JwtActivity
     */
    select?: JwtActivitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the JwtActivity
     */
    omit?: JwtActivityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JwtActivityInclude<ExtArgs> | null
    /**
     * Filter, which JwtActivity to fetch.
     */
    where: JwtActivityWhereUniqueInput
  }

  /**
   * JwtActivity findUniqueOrThrow
   */
  export type JwtActivityFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JwtActivity
     */
    select?: JwtActivitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the JwtActivity
     */
    omit?: JwtActivityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JwtActivityInclude<ExtArgs> | null
    /**
     * Filter, which JwtActivity to fetch.
     */
    where: JwtActivityWhereUniqueInput
  }

  /**
   * JwtActivity findFirst
   */
  export type JwtActivityFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JwtActivity
     */
    select?: JwtActivitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the JwtActivity
     */
    omit?: JwtActivityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JwtActivityInclude<ExtArgs> | null
    /**
     * Filter, which JwtActivity to fetch.
     */
    where?: JwtActivityWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of JwtActivities to fetch.
     */
    orderBy?: JwtActivityOrderByWithRelationInput | JwtActivityOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for JwtActivities.
     */
    cursor?: JwtActivityWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` JwtActivities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` JwtActivities.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of JwtActivities.
     */
    distinct?: JwtActivityScalarFieldEnum | JwtActivityScalarFieldEnum[]
  }

  /**
   * JwtActivity findFirstOrThrow
   */
  export type JwtActivityFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JwtActivity
     */
    select?: JwtActivitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the JwtActivity
     */
    omit?: JwtActivityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JwtActivityInclude<ExtArgs> | null
    /**
     * Filter, which JwtActivity to fetch.
     */
    where?: JwtActivityWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of JwtActivities to fetch.
     */
    orderBy?: JwtActivityOrderByWithRelationInput | JwtActivityOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for JwtActivities.
     */
    cursor?: JwtActivityWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` JwtActivities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` JwtActivities.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of JwtActivities.
     */
    distinct?: JwtActivityScalarFieldEnum | JwtActivityScalarFieldEnum[]
  }

  /**
   * JwtActivity findMany
   */
  export type JwtActivityFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JwtActivity
     */
    select?: JwtActivitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the JwtActivity
     */
    omit?: JwtActivityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JwtActivityInclude<ExtArgs> | null
    /**
     * Filter, which JwtActivities to fetch.
     */
    where?: JwtActivityWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of JwtActivities to fetch.
     */
    orderBy?: JwtActivityOrderByWithRelationInput | JwtActivityOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing JwtActivities.
     */
    cursor?: JwtActivityWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` JwtActivities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` JwtActivities.
     */
    skip?: number
    distinct?: JwtActivityScalarFieldEnum | JwtActivityScalarFieldEnum[]
  }

  /**
   * JwtActivity create
   */
  export type JwtActivityCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JwtActivity
     */
    select?: JwtActivitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the JwtActivity
     */
    omit?: JwtActivityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JwtActivityInclude<ExtArgs> | null
    /**
     * The data needed to create a JwtActivity.
     */
    data: XOR<JwtActivityCreateInput, JwtActivityUncheckedCreateInput>
  }

  /**
   * JwtActivity createMany
   */
  export type JwtActivityCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many JwtActivities.
     */
    data: JwtActivityCreateManyInput | JwtActivityCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * JwtActivity createManyAndReturn
   */
  export type JwtActivityCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JwtActivity
     */
    select?: JwtActivitySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the JwtActivity
     */
    omit?: JwtActivityOmit<ExtArgs> | null
    /**
     * The data used to create many JwtActivities.
     */
    data: JwtActivityCreateManyInput | JwtActivityCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JwtActivityIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * JwtActivity update
   */
  export type JwtActivityUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JwtActivity
     */
    select?: JwtActivitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the JwtActivity
     */
    omit?: JwtActivityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JwtActivityInclude<ExtArgs> | null
    /**
     * The data needed to update a JwtActivity.
     */
    data: XOR<JwtActivityUpdateInput, JwtActivityUncheckedUpdateInput>
    /**
     * Choose, which JwtActivity to update.
     */
    where: JwtActivityWhereUniqueInput
  }

  /**
   * JwtActivity updateMany
   */
  export type JwtActivityUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update JwtActivities.
     */
    data: XOR<JwtActivityUpdateManyMutationInput, JwtActivityUncheckedUpdateManyInput>
    /**
     * Filter which JwtActivities to update
     */
    where?: JwtActivityWhereInput
    /**
     * Limit how many JwtActivities to update.
     */
    limit?: number
  }

  /**
   * JwtActivity updateManyAndReturn
   */
  export type JwtActivityUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JwtActivity
     */
    select?: JwtActivitySelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the JwtActivity
     */
    omit?: JwtActivityOmit<ExtArgs> | null
    /**
     * The data used to update JwtActivities.
     */
    data: XOR<JwtActivityUpdateManyMutationInput, JwtActivityUncheckedUpdateManyInput>
    /**
     * Filter which JwtActivities to update
     */
    where?: JwtActivityWhereInput
    /**
     * Limit how many JwtActivities to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JwtActivityIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * JwtActivity upsert
   */
  export type JwtActivityUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JwtActivity
     */
    select?: JwtActivitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the JwtActivity
     */
    omit?: JwtActivityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JwtActivityInclude<ExtArgs> | null
    /**
     * The filter to search for the JwtActivity to update in case it exists.
     */
    where: JwtActivityWhereUniqueInput
    /**
     * In case the JwtActivity found by the `where` argument doesn't exist, create a new JwtActivity with this data.
     */
    create: XOR<JwtActivityCreateInput, JwtActivityUncheckedCreateInput>
    /**
     * In case the JwtActivity was found with the provided `where` argument, update it with this data.
     */
    update: XOR<JwtActivityUpdateInput, JwtActivityUncheckedUpdateInput>
  }

  /**
   * JwtActivity delete
   */
  export type JwtActivityDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JwtActivity
     */
    select?: JwtActivitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the JwtActivity
     */
    omit?: JwtActivityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JwtActivityInclude<ExtArgs> | null
    /**
     * Filter which JwtActivity to delete.
     */
    where: JwtActivityWhereUniqueInput
  }

  /**
   * JwtActivity deleteMany
   */
  export type JwtActivityDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which JwtActivities to delete
     */
    where?: JwtActivityWhereInput
    /**
     * Limit how many JwtActivities to delete.
     */
    limit?: number
  }

  /**
   * JwtActivity without action
   */
  export type JwtActivityDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JwtActivity
     */
    select?: JwtActivitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the JwtActivity
     */
    omit?: JwtActivityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JwtActivityInclude<ExtArgs> | null
  }


  /**
   * Model Locations
   */

  export type AggregateLocations = {
    _count: LocationsCountAggregateOutputType | null
    _avg: LocationsAvgAggregateOutputType | null
    _sum: LocationsSumAggregateOutputType | null
    _min: LocationsMinAggregateOutputType | null
    _max: LocationsMaxAggregateOutputType | null
  }

  export type LocationsAvgAggregateOutputType = {
    id: number | null
    longitude: number | null
    latitude: number | null
  }

  export type LocationsSumAggregateOutputType = {
    id: number | null
    longitude: number | null
    latitude: number | null
  }

  export type LocationsMinAggregateOutputType = {
    id: number | null
    id_device: string | null
    longitude: number | null
    latitude: number | null
    date_l: Date | null
  }

  export type LocationsMaxAggregateOutputType = {
    id: number | null
    id_device: string | null
    longitude: number | null
    latitude: number | null
    date_l: Date | null
  }

  export type LocationsCountAggregateOutputType = {
    id: number
    id_device: number
    longitude: number
    latitude: number
    date_l: number
    _all: number
  }


  export type LocationsAvgAggregateInputType = {
    id?: true
    longitude?: true
    latitude?: true
  }

  export type LocationsSumAggregateInputType = {
    id?: true
    longitude?: true
    latitude?: true
  }

  export type LocationsMinAggregateInputType = {
    id?: true
    id_device?: true
    longitude?: true
    latitude?: true
    date_l?: true
  }

  export type LocationsMaxAggregateInputType = {
    id?: true
    id_device?: true
    longitude?: true
    latitude?: true
    date_l?: true
  }

  export type LocationsCountAggregateInputType = {
    id?: true
    id_device?: true
    longitude?: true
    latitude?: true
    date_l?: true
    _all?: true
  }

  export type LocationsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Locations to aggregate.
     */
    where?: LocationsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Locations to fetch.
     */
    orderBy?: LocationsOrderByWithRelationInput | LocationsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: LocationsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Locations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Locations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Locations
    **/
    _count?: true | LocationsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: LocationsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: LocationsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: LocationsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: LocationsMaxAggregateInputType
  }

  export type GetLocationsAggregateType<T extends LocationsAggregateArgs> = {
        [P in keyof T & keyof AggregateLocations]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateLocations[P]>
      : GetScalarType<T[P], AggregateLocations[P]>
  }




  export type LocationsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LocationsWhereInput
    orderBy?: LocationsOrderByWithAggregationInput | LocationsOrderByWithAggregationInput[]
    by: LocationsScalarFieldEnum[] | LocationsScalarFieldEnum
    having?: LocationsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: LocationsCountAggregateInputType | true
    _avg?: LocationsAvgAggregateInputType
    _sum?: LocationsSumAggregateInputType
    _min?: LocationsMinAggregateInputType
    _max?: LocationsMaxAggregateInputType
  }

  export type LocationsGroupByOutputType = {
    id: number
    id_device: string
    longitude: number
    latitude: number
    date_l: Date
    _count: LocationsCountAggregateOutputType | null
    _avg: LocationsAvgAggregateOutputType | null
    _sum: LocationsSumAggregateOutputType | null
    _min: LocationsMinAggregateOutputType | null
    _max: LocationsMaxAggregateOutputType | null
  }

  type GetLocationsGroupByPayload<T extends LocationsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<LocationsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof LocationsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], LocationsGroupByOutputType[P]>
            : GetScalarType<T[P], LocationsGroupByOutputType[P]>
        }
      >
    >


  export type LocationsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    id_device?: boolean
    longitude?: boolean
    latitude?: boolean
    date_l?: boolean
    device?: boolean | DeviceDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["locations"]>

  export type LocationsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    id_device?: boolean
    longitude?: boolean
    latitude?: boolean
    date_l?: boolean
    device?: boolean | DeviceDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["locations"]>

  export type LocationsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    id_device?: boolean
    longitude?: boolean
    latitude?: boolean
    date_l?: boolean
    device?: boolean | DeviceDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["locations"]>

  export type LocationsSelectScalar = {
    id?: boolean
    id_device?: boolean
    longitude?: boolean
    latitude?: boolean
    date_l?: boolean
  }

  export type LocationsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "id_device" | "longitude" | "latitude" | "date_l", ExtArgs["result"]["locations"]>
  export type LocationsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    device?: boolean | DeviceDefaultArgs<ExtArgs>
  }
  export type LocationsIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    device?: boolean | DeviceDefaultArgs<ExtArgs>
  }
  export type LocationsIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    device?: boolean | DeviceDefaultArgs<ExtArgs>
  }

  export type $LocationsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Locations"
    objects: {
      device: Prisma.$DevicePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      id_device: string
      longitude: number
      latitude: number
      date_l: Date
    }, ExtArgs["result"]["locations"]>
    composites: {}
  }

  type LocationsGetPayload<S extends boolean | null | undefined | LocationsDefaultArgs> = $Result.GetResult<Prisma.$LocationsPayload, S>

  type LocationsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<LocationsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: LocationsCountAggregateInputType | true
    }

  export interface LocationsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Locations'], meta: { name: 'Locations' } }
    /**
     * Find zero or one Locations that matches the filter.
     * @param {LocationsFindUniqueArgs} args - Arguments to find a Locations
     * @example
     * // Get one Locations
     * const locations = await prisma.locations.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends LocationsFindUniqueArgs>(args: SelectSubset<T, LocationsFindUniqueArgs<ExtArgs>>): Prisma__LocationsClient<$Result.GetResult<Prisma.$LocationsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Locations that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {LocationsFindUniqueOrThrowArgs} args - Arguments to find a Locations
     * @example
     * // Get one Locations
     * const locations = await prisma.locations.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends LocationsFindUniqueOrThrowArgs>(args: SelectSubset<T, LocationsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__LocationsClient<$Result.GetResult<Prisma.$LocationsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Locations that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LocationsFindFirstArgs} args - Arguments to find a Locations
     * @example
     * // Get one Locations
     * const locations = await prisma.locations.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends LocationsFindFirstArgs>(args?: SelectSubset<T, LocationsFindFirstArgs<ExtArgs>>): Prisma__LocationsClient<$Result.GetResult<Prisma.$LocationsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Locations that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LocationsFindFirstOrThrowArgs} args - Arguments to find a Locations
     * @example
     * // Get one Locations
     * const locations = await prisma.locations.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends LocationsFindFirstOrThrowArgs>(args?: SelectSubset<T, LocationsFindFirstOrThrowArgs<ExtArgs>>): Prisma__LocationsClient<$Result.GetResult<Prisma.$LocationsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Locations that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LocationsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Locations
     * const locations = await prisma.locations.findMany()
     * 
     * // Get first 10 Locations
     * const locations = await prisma.locations.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const locationsWithIdOnly = await prisma.locations.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends LocationsFindManyArgs>(args?: SelectSubset<T, LocationsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LocationsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Locations.
     * @param {LocationsCreateArgs} args - Arguments to create a Locations.
     * @example
     * // Create one Locations
     * const Locations = await prisma.locations.create({
     *   data: {
     *     // ... data to create a Locations
     *   }
     * })
     * 
     */
    create<T extends LocationsCreateArgs>(args: SelectSubset<T, LocationsCreateArgs<ExtArgs>>): Prisma__LocationsClient<$Result.GetResult<Prisma.$LocationsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Locations.
     * @param {LocationsCreateManyArgs} args - Arguments to create many Locations.
     * @example
     * // Create many Locations
     * const locations = await prisma.locations.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends LocationsCreateManyArgs>(args?: SelectSubset<T, LocationsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Locations and returns the data saved in the database.
     * @param {LocationsCreateManyAndReturnArgs} args - Arguments to create many Locations.
     * @example
     * // Create many Locations
     * const locations = await prisma.locations.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Locations and only return the `id`
     * const locationsWithIdOnly = await prisma.locations.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends LocationsCreateManyAndReturnArgs>(args?: SelectSubset<T, LocationsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LocationsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Locations.
     * @param {LocationsDeleteArgs} args - Arguments to delete one Locations.
     * @example
     * // Delete one Locations
     * const Locations = await prisma.locations.delete({
     *   where: {
     *     // ... filter to delete one Locations
     *   }
     * })
     * 
     */
    delete<T extends LocationsDeleteArgs>(args: SelectSubset<T, LocationsDeleteArgs<ExtArgs>>): Prisma__LocationsClient<$Result.GetResult<Prisma.$LocationsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Locations.
     * @param {LocationsUpdateArgs} args - Arguments to update one Locations.
     * @example
     * // Update one Locations
     * const locations = await prisma.locations.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends LocationsUpdateArgs>(args: SelectSubset<T, LocationsUpdateArgs<ExtArgs>>): Prisma__LocationsClient<$Result.GetResult<Prisma.$LocationsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Locations.
     * @param {LocationsDeleteManyArgs} args - Arguments to filter Locations to delete.
     * @example
     * // Delete a few Locations
     * const { count } = await prisma.locations.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends LocationsDeleteManyArgs>(args?: SelectSubset<T, LocationsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Locations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LocationsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Locations
     * const locations = await prisma.locations.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends LocationsUpdateManyArgs>(args: SelectSubset<T, LocationsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Locations and returns the data updated in the database.
     * @param {LocationsUpdateManyAndReturnArgs} args - Arguments to update many Locations.
     * @example
     * // Update many Locations
     * const locations = await prisma.locations.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Locations and only return the `id`
     * const locationsWithIdOnly = await prisma.locations.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends LocationsUpdateManyAndReturnArgs>(args: SelectSubset<T, LocationsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LocationsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Locations.
     * @param {LocationsUpsertArgs} args - Arguments to update or create a Locations.
     * @example
     * // Update or create a Locations
     * const locations = await prisma.locations.upsert({
     *   create: {
     *     // ... data to create a Locations
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Locations we want to update
     *   }
     * })
     */
    upsert<T extends LocationsUpsertArgs>(args: SelectSubset<T, LocationsUpsertArgs<ExtArgs>>): Prisma__LocationsClient<$Result.GetResult<Prisma.$LocationsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Locations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LocationsCountArgs} args - Arguments to filter Locations to count.
     * @example
     * // Count the number of Locations
     * const count = await prisma.locations.count({
     *   where: {
     *     // ... the filter for the Locations we want to count
     *   }
     * })
    **/
    count<T extends LocationsCountArgs>(
      args?: Subset<T, LocationsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], LocationsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Locations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LocationsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends LocationsAggregateArgs>(args: Subset<T, LocationsAggregateArgs>): Prisma.PrismaPromise<GetLocationsAggregateType<T>>

    /**
     * Group by Locations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LocationsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends LocationsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: LocationsGroupByArgs['orderBy'] }
        : { orderBy?: LocationsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, LocationsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetLocationsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Locations model
   */
  readonly fields: LocationsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Locations.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__LocationsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    device<T extends DeviceDefaultArgs<ExtArgs> = {}>(args?: Subset<T, DeviceDefaultArgs<ExtArgs>>): Prisma__DeviceClient<$Result.GetResult<Prisma.$DevicePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Locations model
   */
  interface LocationsFieldRefs {
    readonly id: FieldRef<"Locations", 'Int'>
    readonly id_device: FieldRef<"Locations", 'String'>
    readonly longitude: FieldRef<"Locations", 'Float'>
    readonly latitude: FieldRef<"Locations", 'Float'>
    readonly date_l: FieldRef<"Locations", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Locations findUnique
   */
  export type LocationsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Locations
     */
    select?: LocationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Locations
     */
    omit?: LocationsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LocationsInclude<ExtArgs> | null
    /**
     * Filter, which Locations to fetch.
     */
    where: LocationsWhereUniqueInput
  }

  /**
   * Locations findUniqueOrThrow
   */
  export type LocationsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Locations
     */
    select?: LocationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Locations
     */
    omit?: LocationsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LocationsInclude<ExtArgs> | null
    /**
     * Filter, which Locations to fetch.
     */
    where: LocationsWhereUniqueInput
  }

  /**
   * Locations findFirst
   */
  export type LocationsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Locations
     */
    select?: LocationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Locations
     */
    omit?: LocationsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LocationsInclude<ExtArgs> | null
    /**
     * Filter, which Locations to fetch.
     */
    where?: LocationsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Locations to fetch.
     */
    orderBy?: LocationsOrderByWithRelationInput | LocationsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Locations.
     */
    cursor?: LocationsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Locations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Locations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Locations.
     */
    distinct?: LocationsScalarFieldEnum | LocationsScalarFieldEnum[]
  }

  /**
   * Locations findFirstOrThrow
   */
  export type LocationsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Locations
     */
    select?: LocationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Locations
     */
    omit?: LocationsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LocationsInclude<ExtArgs> | null
    /**
     * Filter, which Locations to fetch.
     */
    where?: LocationsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Locations to fetch.
     */
    orderBy?: LocationsOrderByWithRelationInput | LocationsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Locations.
     */
    cursor?: LocationsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Locations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Locations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Locations.
     */
    distinct?: LocationsScalarFieldEnum | LocationsScalarFieldEnum[]
  }

  /**
   * Locations findMany
   */
  export type LocationsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Locations
     */
    select?: LocationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Locations
     */
    omit?: LocationsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LocationsInclude<ExtArgs> | null
    /**
     * Filter, which Locations to fetch.
     */
    where?: LocationsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Locations to fetch.
     */
    orderBy?: LocationsOrderByWithRelationInput | LocationsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Locations.
     */
    cursor?: LocationsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Locations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Locations.
     */
    skip?: number
    distinct?: LocationsScalarFieldEnum | LocationsScalarFieldEnum[]
  }

  /**
   * Locations create
   */
  export type LocationsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Locations
     */
    select?: LocationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Locations
     */
    omit?: LocationsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LocationsInclude<ExtArgs> | null
    /**
     * The data needed to create a Locations.
     */
    data: XOR<LocationsCreateInput, LocationsUncheckedCreateInput>
  }

  /**
   * Locations createMany
   */
  export type LocationsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Locations.
     */
    data: LocationsCreateManyInput | LocationsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Locations createManyAndReturn
   */
  export type LocationsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Locations
     */
    select?: LocationsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Locations
     */
    omit?: LocationsOmit<ExtArgs> | null
    /**
     * The data used to create many Locations.
     */
    data: LocationsCreateManyInput | LocationsCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LocationsIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Locations update
   */
  export type LocationsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Locations
     */
    select?: LocationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Locations
     */
    omit?: LocationsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LocationsInclude<ExtArgs> | null
    /**
     * The data needed to update a Locations.
     */
    data: XOR<LocationsUpdateInput, LocationsUncheckedUpdateInput>
    /**
     * Choose, which Locations to update.
     */
    where: LocationsWhereUniqueInput
  }

  /**
   * Locations updateMany
   */
  export type LocationsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Locations.
     */
    data: XOR<LocationsUpdateManyMutationInput, LocationsUncheckedUpdateManyInput>
    /**
     * Filter which Locations to update
     */
    where?: LocationsWhereInput
    /**
     * Limit how many Locations to update.
     */
    limit?: number
  }

  /**
   * Locations updateManyAndReturn
   */
  export type LocationsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Locations
     */
    select?: LocationsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Locations
     */
    omit?: LocationsOmit<ExtArgs> | null
    /**
     * The data used to update Locations.
     */
    data: XOR<LocationsUpdateManyMutationInput, LocationsUncheckedUpdateManyInput>
    /**
     * Filter which Locations to update
     */
    where?: LocationsWhereInput
    /**
     * Limit how many Locations to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LocationsIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Locations upsert
   */
  export type LocationsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Locations
     */
    select?: LocationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Locations
     */
    omit?: LocationsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LocationsInclude<ExtArgs> | null
    /**
     * The filter to search for the Locations to update in case it exists.
     */
    where: LocationsWhereUniqueInput
    /**
     * In case the Locations found by the `where` argument doesn't exist, create a new Locations with this data.
     */
    create: XOR<LocationsCreateInput, LocationsUncheckedCreateInput>
    /**
     * In case the Locations was found with the provided `where` argument, update it with this data.
     */
    update: XOR<LocationsUpdateInput, LocationsUncheckedUpdateInput>
  }

  /**
   * Locations delete
   */
  export type LocationsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Locations
     */
    select?: LocationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Locations
     */
    omit?: LocationsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LocationsInclude<ExtArgs> | null
    /**
     * Filter which Locations to delete.
     */
    where: LocationsWhereUniqueInput
  }

  /**
   * Locations deleteMany
   */
  export type LocationsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Locations to delete
     */
    where?: LocationsWhereInput
    /**
     * Limit how many Locations to delete.
     */
    limit?: number
  }

  /**
   * Locations without action
   */
  export type LocationsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Locations
     */
    select?: LocationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Locations
     */
    omit?: LocationsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LocationsInclude<ExtArgs> | null
  }


  /**
   * Model DeviceConfiguration
   */

  export type AggregateDeviceConfiguration = {
    _count: DeviceConfigurationCountAggregateOutputType | null
    _avg: DeviceConfigurationAvgAggregateOutputType | null
    _sum: DeviceConfigurationSumAggregateOutputType | null
    _min: DeviceConfigurationMinAggregateOutputType | null
    _max: DeviceConfigurationMaxAggregateOutputType | null
  }

  export type DeviceConfigurationAvgAggregateOutputType = {
    id: number | null
    channel: number | null
  }

  export type DeviceConfigurationSumAggregateOutputType = {
    id: number | null
    channel: number | null
  }

  export type DeviceConfigurationMinAggregateOutputType = {
    id: number | null
    id_device: string | null
    device_name: string | null
    mac_address: string | null
    channel: number | null
  }

  export type DeviceConfigurationMaxAggregateOutputType = {
    id: number | null
    id_device: string | null
    device_name: string | null
    mac_address: string | null
    channel: number | null
  }

  export type DeviceConfigurationCountAggregateOutputType = {
    id: number
    id_device: number
    device_name: number
    mac_address: number
    channel: number
    _all: number
  }


  export type DeviceConfigurationAvgAggregateInputType = {
    id?: true
    channel?: true
  }

  export type DeviceConfigurationSumAggregateInputType = {
    id?: true
    channel?: true
  }

  export type DeviceConfigurationMinAggregateInputType = {
    id?: true
    id_device?: true
    device_name?: true
    mac_address?: true
    channel?: true
  }

  export type DeviceConfigurationMaxAggregateInputType = {
    id?: true
    id_device?: true
    device_name?: true
    mac_address?: true
    channel?: true
  }

  export type DeviceConfigurationCountAggregateInputType = {
    id?: true
    id_device?: true
    device_name?: true
    mac_address?: true
    channel?: true
    _all?: true
  }

  export type DeviceConfigurationAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which DeviceConfiguration to aggregate.
     */
    where?: DeviceConfigurationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DeviceConfigurations to fetch.
     */
    orderBy?: DeviceConfigurationOrderByWithRelationInput | DeviceConfigurationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: DeviceConfigurationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DeviceConfigurations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DeviceConfigurations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned DeviceConfigurations
    **/
    _count?: true | DeviceConfigurationCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: DeviceConfigurationAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: DeviceConfigurationSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DeviceConfigurationMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DeviceConfigurationMaxAggregateInputType
  }

  export type GetDeviceConfigurationAggregateType<T extends DeviceConfigurationAggregateArgs> = {
        [P in keyof T & keyof AggregateDeviceConfiguration]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDeviceConfiguration[P]>
      : GetScalarType<T[P], AggregateDeviceConfiguration[P]>
  }




  export type DeviceConfigurationGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DeviceConfigurationWhereInput
    orderBy?: DeviceConfigurationOrderByWithAggregationInput | DeviceConfigurationOrderByWithAggregationInput[]
    by: DeviceConfigurationScalarFieldEnum[] | DeviceConfigurationScalarFieldEnum
    having?: DeviceConfigurationScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DeviceConfigurationCountAggregateInputType | true
    _avg?: DeviceConfigurationAvgAggregateInputType
    _sum?: DeviceConfigurationSumAggregateInputType
    _min?: DeviceConfigurationMinAggregateInputType
    _max?: DeviceConfigurationMaxAggregateInputType
  }

  export type DeviceConfigurationGroupByOutputType = {
    id: number
    id_device: string
    device_name: string
    mac_address: string
    channel: number
    _count: DeviceConfigurationCountAggregateOutputType | null
    _avg: DeviceConfigurationAvgAggregateOutputType | null
    _sum: DeviceConfigurationSumAggregateOutputType | null
    _min: DeviceConfigurationMinAggregateOutputType | null
    _max: DeviceConfigurationMaxAggregateOutputType | null
  }

  type GetDeviceConfigurationGroupByPayload<T extends DeviceConfigurationGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<DeviceConfigurationGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof DeviceConfigurationGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DeviceConfigurationGroupByOutputType[P]>
            : GetScalarType<T[P], DeviceConfigurationGroupByOutputType[P]>
        }
      >
    >


  export type DeviceConfigurationSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    id_device?: boolean
    device_name?: boolean
    mac_address?: boolean
    channel?: boolean
    device?: boolean | DeviceDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["deviceConfiguration"]>

  export type DeviceConfigurationSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    id_device?: boolean
    device_name?: boolean
    mac_address?: boolean
    channel?: boolean
    device?: boolean | DeviceDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["deviceConfiguration"]>

  export type DeviceConfigurationSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    id_device?: boolean
    device_name?: boolean
    mac_address?: boolean
    channel?: boolean
    device?: boolean | DeviceDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["deviceConfiguration"]>

  export type DeviceConfigurationSelectScalar = {
    id?: boolean
    id_device?: boolean
    device_name?: boolean
    mac_address?: boolean
    channel?: boolean
  }

  export type DeviceConfigurationOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "id_device" | "device_name" | "mac_address" | "channel", ExtArgs["result"]["deviceConfiguration"]>
  export type DeviceConfigurationInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    device?: boolean | DeviceDefaultArgs<ExtArgs>
  }
  export type DeviceConfigurationIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    device?: boolean | DeviceDefaultArgs<ExtArgs>
  }
  export type DeviceConfigurationIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    device?: boolean | DeviceDefaultArgs<ExtArgs>
  }

  export type $DeviceConfigurationPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "DeviceConfiguration"
    objects: {
      device: Prisma.$DevicePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      id_device: string
      device_name: string
      mac_address: string
      channel: number
    }, ExtArgs["result"]["deviceConfiguration"]>
    composites: {}
  }

  type DeviceConfigurationGetPayload<S extends boolean | null | undefined | DeviceConfigurationDefaultArgs> = $Result.GetResult<Prisma.$DeviceConfigurationPayload, S>

  type DeviceConfigurationCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<DeviceConfigurationFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: DeviceConfigurationCountAggregateInputType | true
    }

  export interface DeviceConfigurationDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['DeviceConfiguration'], meta: { name: 'DeviceConfiguration' } }
    /**
     * Find zero or one DeviceConfiguration that matches the filter.
     * @param {DeviceConfigurationFindUniqueArgs} args - Arguments to find a DeviceConfiguration
     * @example
     * // Get one DeviceConfiguration
     * const deviceConfiguration = await prisma.deviceConfiguration.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends DeviceConfigurationFindUniqueArgs>(args: SelectSubset<T, DeviceConfigurationFindUniqueArgs<ExtArgs>>): Prisma__DeviceConfigurationClient<$Result.GetResult<Prisma.$DeviceConfigurationPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one DeviceConfiguration that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {DeviceConfigurationFindUniqueOrThrowArgs} args - Arguments to find a DeviceConfiguration
     * @example
     * // Get one DeviceConfiguration
     * const deviceConfiguration = await prisma.deviceConfiguration.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends DeviceConfigurationFindUniqueOrThrowArgs>(args: SelectSubset<T, DeviceConfigurationFindUniqueOrThrowArgs<ExtArgs>>): Prisma__DeviceConfigurationClient<$Result.GetResult<Prisma.$DeviceConfigurationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first DeviceConfiguration that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DeviceConfigurationFindFirstArgs} args - Arguments to find a DeviceConfiguration
     * @example
     * // Get one DeviceConfiguration
     * const deviceConfiguration = await prisma.deviceConfiguration.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends DeviceConfigurationFindFirstArgs>(args?: SelectSubset<T, DeviceConfigurationFindFirstArgs<ExtArgs>>): Prisma__DeviceConfigurationClient<$Result.GetResult<Prisma.$DeviceConfigurationPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first DeviceConfiguration that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DeviceConfigurationFindFirstOrThrowArgs} args - Arguments to find a DeviceConfiguration
     * @example
     * // Get one DeviceConfiguration
     * const deviceConfiguration = await prisma.deviceConfiguration.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends DeviceConfigurationFindFirstOrThrowArgs>(args?: SelectSubset<T, DeviceConfigurationFindFirstOrThrowArgs<ExtArgs>>): Prisma__DeviceConfigurationClient<$Result.GetResult<Prisma.$DeviceConfigurationPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more DeviceConfigurations that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DeviceConfigurationFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all DeviceConfigurations
     * const deviceConfigurations = await prisma.deviceConfiguration.findMany()
     * 
     * // Get first 10 DeviceConfigurations
     * const deviceConfigurations = await prisma.deviceConfiguration.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const deviceConfigurationWithIdOnly = await prisma.deviceConfiguration.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends DeviceConfigurationFindManyArgs>(args?: SelectSubset<T, DeviceConfigurationFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DeviceConfigurationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a DeviceConfiguration.
     * @param {DeviceConfigurationCreateArgs} args - Arguments to create a DeviceConfiguration.
     * @example
     * // Create one DeviceConfiguration
     * const DeviceConfiguration = await prisma.deviceConfiguration.create({
     *   data: {
     *     // ... data to create a DeviceConfiguration
     *   }
     * })
     * 
     */
    create<T extends DeviceConfigurationCreateArgs>(args: SelectSubset<T, DeviceConfigurationCreateArgs<ExtArgs>>): Prisma__DeviceConfigurationClient<$Result.GetResult<Prisma.$DeviceConfigurationPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many DeviceConfigurations.
     * @param {DeviceConfigurationCreateManyArgs} args - Arguments to create many DeviceConfigurations.
     * @example
     * // Create many DeviceConfigurations
     * const deviceConfiguration = await prisma.deviceConfiguration.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends DeviceConfigurationCreateManyArgs>(args?: SelectSubset<T, DeviceConfigurationCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many DeviceConfigurations and returns the data saved in the database.
     * @param {DeviceConfigurationCreateManyAndReturnArgs} args - Arguments to create many DeviceConfigurations.
     * @example
     * // Create many DeviceConfigurations
     * const deviceConfiguration = await prisma.deviceConfiguration.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many DeviceConfigurations and only return the `id`
     * const deviceConfigurationWithIdOnly = await prisma.deviceConfiguration.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends DeviceConfigurationCreateManyAndReturnArgs>(args?: SelectSubset<T, DeviceConfigurationCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DeviceConfigurationPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a DeviceConfiguration.
     * @param {DeviceConfigurationDeleteArgs} args - Arguments to delete one DeviceConfiguration.
     * @example
     * // Delete one DeviceConfiguration
     * const DeviceConfiguration = await prisma.deviceConfiguration.delete({
     *   where: {
     *     // ... filter to delete one DeviceConfiguration
     *   }
     * })
     * 
     */
    delete<T extends DeviceConfigurationDeleteArgs>(args: SelectSubset<T, DeviceConfigurationDeleteArgs<ExtArgs>>): Prisma__DeviceConfigurationClient<$Result.GetResult<Prisma.$DeviceConfigurationPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one DeviceConfiguration.
     * @param {DeviceConfigurationUpdateArgs} args - Arguments to update one DeviceConfiguration.
     * @example
     * // Update one DeviceConfiguration
     * const deviceConfiguration = await prisma.deviceConfiguration.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends DeviceConfigurationUpdateArgs>(args: SelectSubset<T, DeviceConfigurationUpdateArgs<ExtArgs>>): Prisma__DeviceConfigurationClient<$Result.GetResult<Prisma.$DeviceConfigurationPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more DeviceConfigurations.
     * @param {DeviceConfigurationDeleteManyArgs} args - Arguments to filter DeviceConfigurations to delete.
     * @example
     * // Delete a few DeviceConfigurations
     * const { count } = await prisma.deviceConfiguration.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends DeviceConfigurationDeleteManyArgs>(args?: SelectSubset<T, DeviceConfigurationDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more DeviceConfigurations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DeviceConfigurationUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many DeviceConfigurations
     * const deviceConfiguration = await prisma.deviceConfiguration.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends DeviceConfigurationUpdateManyArgs>(args: SelectSubset<T, DeviceConfigurationUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more DeviceConfigurations and returns the data updated in the database.
     * @param {DeviceConfigurationUpdateManyAndReturnArgs} args - Arguments to update many DeviceConfigurations.
     * @example
     * // Update many DeviceConfigurations
     * const deviceConfiguration = await prisma.deviceConfiguration.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more DeviceConfigurations and only return the `id`
     * const deviceConfigurationWithIdOnly = await prisma.deviceConfiguration.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends DeviceConfigurationUpdateManyAndReturnArgs>(args: SelectSubset<T, DeviceConfigurationUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DeviceConfigurationPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one DeviceConfiguration.
     * @param {DeviceConfigurationUpsertArgs} args - Arguments to update or create a DeviceConfiguration.
     * @example
     * // Update or create a DeviceConfiguration
     * const deviceConfiguration = await prisma.deviceConfiguration.upsert({
     *   create: {
     *     // ... data to create a DeviceConfiguration
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the DeviceConfiguration we want to update
     *   }
     * })
     */
    upsert<T extends DeviceConfigurationUpsertArgs>(args: SelectSubset<T, DeviceConfigurationUpsertArgs<ExtArgs>>): Prisma__DeviceConfigurationClient<$Result.GetResult<Prisma.$DeviceConfigurationPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of DeviceConfigurations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DeviceConfigurationCountArgs} args - Arguments to filter DeviceConfigurations to count.
     * @example
     * // Count the number of DeviceConfigurations
     * const count = await prisma.deviceConfiguration.count({
     *   where: {
     *     // ... the filter for the DeviceConfigurations we want to count
     *   }
     * })
    **/
    count<T extends DeviceConfigurationCountArgs>(
      args?: Subset<T, DeviceConfigurationCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DeviceConfigurationCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a DeviceConfiguration.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DeviceConfigurationAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends DeviceConfigurationAggregateArgs>(args: Subset<T, DeviceConfigurationAggregateArgs>): Prisma.PrismaPromise<GetDeviceConfigurationAggregateType<T>>

    /**
     * Group by DeviceConfiguration.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DeviceConfigurationGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends DeviceConfigurationGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: DeviceConfigurationGroupByArgs['orderBy'] }
        : { orderBy?: DeviceConfigurationGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, DeviceConfigurationGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDeviceConfigurationGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the DeviceConfiguration model
   */
  readonly fields: DeviceConfigurationFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for DeviceConfiguration.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__DeviceConfigurationClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    device<T extends DeviceDefaultArgs<ExtArgs> = {}>(args?: Subset<T, DeviceDefaultArgs<ExtArgs>>): Prisma__DeviceClient<$Result.GetResult<Prisma.$DevicePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the DeviceConfiguration model
   */
  interface DeviceConfigurationFieldRefs {
    readonly id: FieldRef<"DeviceConfiguration", 'Int'>
    readonly id_device: FieldRef<"DeviceConfiguration", 'String'>
    readonly device_name: FieldRef<"DeviceConfiguration", 'String'>
    readonly mac_address: FieldRef<"DeviceConfiguration", 'String'>
    readonly channel: FieldRef<"DeviceConfiguration", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * DeviceConfiguration findUnique
   */
  export type DeviceConfigurationFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DeviceConfiguration
     */
    select?: DeviceConfigurationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DeviceConfiguration
     */
    omit?: DeviceConfigurationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DeviceConfigurationInclude<ExtArgs> | null
    /**
     * Filter, which DeviceConfiguration to fetch.
     */
    where: DeviceConfigurationWhereUniqueInput
  }

  /**
   * DeviceConfiguration findUniqueOrThrow
   */
  export type DeviceConfigurationFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DeviceConfiguration
     */
    select?: DeviceConfigurationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DeviceConfiguration
     */
    omit?: DeviceConfigurationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DeviceConfigurationInclude<ExtArgs> | null
    /**
     * Filter, which DeviceConfiguration to fetch.
     */
    where: DeviceConfigurationWhereUniqueInput
  }

  /**
   * DeviceConfiguration findFirst
   */
  export type DeviceConfigurationFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DeviceConfiguration
     */
    select?: DeviceConfigurationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DeviceConfiguration
     */
    omit?: DeviceConfigurationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DeviceConfigurationInclude<ExtArgs> | null
    /**
     * Filter, which DeviceConfiguration to fetch.
     */
    where?: DeviceConfigurationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DeviceConfigurations to fetch.
     */
    orderBy?: DeviceConfigurationOrderByWithRelationInput | DeviceConfigurationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for DeviceConfigurations.
     */
    cursor?: DeviceConfigurationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DeviceConfigurations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DeviceConfigurations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of DeviceConfigurations.
     */
    distinct?: DeviceConfigurationScalarFieldEnum | DeviceConfigurationScalarFieldEnum[]
  }

  /**
   * DeviceConfiguration findFirstOrThrow
   */
  export type DeviceConfigurationFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DeviceConfiguration
     */
    select?: DeviceConfigurationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DeviceConfiguration
     */
    omit?: DeviceConfigurationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DeviceConfigurationInclude<ExtArgs> | null
    /**
     * Filter, which DeviceConfiguration to fetch.
     */
    where?: DeviceConfigurationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DeviceConfigurations to fetch.
     */
    orderBy?: DeviceConfigurationOrderByWithRelationInput | DeviceConfigurationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for DeviceConfigurations.
     */
    cursor?: DeviceConfigurationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DeviceConfigurations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DeviceConfigurations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of DeviceConfigurations.
     */
    distinct?: DeviceConfigurationScalarFieldEnum | DeviceConfigurationScalarFieldEnum[]
  }

  /**
   * DeviceConfiguration findMany
   */
  export type DeviceConfigurationFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DeviceConfiguration
     */
    select?: DeviceConfigurationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DeviceConfiguration
     */
    omit?: DeviceConfigurationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DeviceConfigurationInclude<ExtArgs> | null
    /**
     * Filter, which DeviceConfigurations to fetch.
     */
    where?: DeviceConfigurationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DeviceConfigurations to fetch.
     */
    orderBy?: DeviceConfigurationOrderByWithRelationInput | DeviceConfigurationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing DeviceConfigurations.
     */
    cursor?: DeviceConfigurationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DeviceConfigurations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DeviceConfigurations.
     */
    skip?: number
    distinct?: DeviceConfigurationScalarFieldEnum | DeviceConfigurationScalarFieldEnum[]
  }

  /**
   * DeviceConfiguration create
   */
  export type DeviceConfigurationCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DeviceConfiguration
     */
    select?: DeviceConfigurationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DeviceConfiguration
     */
    omit?: DeviceConfigurationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DeviceConfigurationInclude<ExtArgs> | null
    /**
     * The data needed to create a DeviceConfiguration.
     */
    data: XOR<DeviceConfigurationCreateInput, DeviceConfigurationUncheckedCreateInput>
  }

  /**
   * DeviceConfiguration createMany
   */
  export type DeviceConfigurationCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many DeviceConfigurations.
     */
    data: DeviceConfigurationCreateManyInput | DeviceConfigurationCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * DeviceConfiguration createManyAndReturn
   */
  export type DeviceConfigurationCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DeviceConfiguration
     */
    select?: DeviceConfigurationSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the DeviceConfiguration
     */
    omit?: DeviceConfigurationOmit<ExtArgs> | null
    /**
     * The data used to create many DeviceConfigurations.
     */
    data: DeviceConfigurationCreateManyInput | DeviceConfigurationCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DeviceConfigurationIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * DeviceConfiguration update
   */
  export type DeviceConfigurationUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DeviceConfiguration
     */
    select?: DeviceConfigurationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DeviceConfiguration
     */
    omit?: DeviceConfigurationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DeviceConfigurationInclude<ExtArgs> | null
    /**
     * The data needed to update a DeviceConfiguration.
     */
    data: XOR<DeviceConfigurationUpdateInput, DeviceConfigurationUncheckedUpdateInput>
    /**
     * Choose, which DeviceConfiguration to update.
     */
    where: DeviceConfigurationWhereUniqueInput
  }

  /**
   * DeviceConfiguration updateMany
   */
  export type DeviceConfigurationUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update DeviceConfigurations.
     */
    data: XOR<DeviceConfigurationUpdateManyMutationInput, DeviceConfigurationUncheckedUpdateManyInput>
    /**
     * Filter which DeviceConfigurations to update
     */
    where?: DeviceConfigurationWhereInput
    /**
     * Limit how many DeviceConfigurations to update.
     */
    limit?: number
  }

  /**
   * DeviceConfiguration updateManyAndReturn
   */
  export type DeviceConfigurationUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DeviceConfiguration
     */
    select?: DeviceConfigurationSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the DeviceConfiguration
     */
    omit?: DeviceConfigurationOmit<ExtArgs> | null
    /**
     * The data used to update DeviceConfigurations.
     */
    data: XOR<DeviceConfigurationUpdateManyMutationInput, DeviceConfigurationUncheckedUpdateManyInput>
    /**
     * Filter which DeviceConfigurations to update
     */
    where?: DeviceConfigurationWhereInput
    /**
     * Limit how many DeviceConfigurations to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DeviceConfigurationIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * DeviceConfiguration upsert
   */
  export type DeviceConfigurationUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DeviceConfiguration
     */
    select?: DeviceConfigurationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DeviceConfiguration
     */
    omit?: DeviceConfigurationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DeviceConfigurationInclude<ExtArgs> | null
    /**
     * The filter to search for the DeviceConfiguration to update in case it exists.
     */
    where: DeviceConfigurationWhereUniqueInput
    /**
     * In case the DeviceConfiguration found by the `where` argument doesn't exist, create a new DeviceConfiguration with this data.
     */
    create: XOR<DeviceConfigurationCreateInput, DeviceConfigurationUncheckedCreateInput>
    /**
     * In case the DeviceConfiguration was found with the provided `where` argument, update it with this data.
     */
    update: XOR<DeviceConfigurationUpdateInput, DeviceConfigurationUncheckedUpdateInput>
  }

  /**
   * DeviceConfiguration delete
   */
  export type DeviceConfigurationDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DeviceConfiguration
     */
    select?: DeviceConfigurationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DeviceConfiguration
     */
    omit?: DeviceConfigurationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DeviceConfigurationInclude<ExtArgs> | null
    /**
     * Filter which DeviceConfiguration to delete.
     */
    where: DeviceConfigurationWhereUniqueInput
  }

  /**
   * DeviceConfiguration deleteMany
   */
  export type DeviceConfigurationDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which DeviceConfigurations to delete
     */
    where?: DeviceConfigurationWhereInput
    /**
     * Limit how many DeviceConfigurations to delete.
     */
    limit?: number
  }

  /**
   * DeviceConfiguration without action
   */
  export type DeviceConfigurationDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DeviceConfiguration
     */
    select?: DeviceConfigurationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DeviceConfiguration
     */
    omit?: DeviceConfigurationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DeviceConfigurationInclude<ExtArgs> | null
  }


  /**
   * Model Connection
   */

  export type AggregateConnection = {
    _count: ConnectionCountAggregateOutputType | null
    _avg: ConnectionAvgAggregateOutputType | null
    _sum: ConnectionSumAggregateOutputType | null
    _min: ConnectionMinAggregateOutputType | null
    _max: ConnectionMaxAggregateOutputType | null
  }

  export type ConnectionAvgAggregateOutputType = {
    id: number | null
  }

  export type ConnectionSumAggregateOutputType = {
    id: number | null
  }

  export type ConnectionMinAggregateOutputType = {
    id: number | null
    id_usuario: string | null
    name_usuario_invitado: string | null
    id_device: string | null
    type_connection: string | null
  }

  export type ConnectionMaxAggregateOutputType = {
    id: number | null
    id_usuario: string | null
    name_usuario_invitado: string | null
    id_device: string | null
    type_connection: string | null
  }

  export type ConnectionCountAggregateOutputType = {
    id: number
    id_usuario: number
    name_usuario_invitado: number
    id_device: number
    type_connection: number
    _all: number
  }


  export type ConnectionAvgAggregateInputType = {
    id?: true
  }

  export type ConnectionSumAggregateInputType = {
    id?: true
  }

  export type ConnectionMinAggregateInputType = {
    id?: true
    id_usuario?: true
    name_usuario_invitado?: true
    id_device?: true
    type_connection?: true
  }

  export type ConnectionMaxAggregateInputType = {
    id?: true
    id_usuario?: true
    name_usuario_invitado?: true
    id_device?: true
    type_connection?: true
  }

  export type ConnectionCountAggregateInputType = {
    id?: true
    id_usuario?: true
    name_usuario_invitado?: true
    id_device?: true
    type_connection?: true
    _all?: true
  }

  export type ConnectionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Connection to aggregate.
     */
    where?: ConnectionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Connections to fetch.
     */
    orderBy?: ConnectionOrderByWithRelationInput | ConnectionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ConnectionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Connections from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Connections.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Connections
    **/
    _count?: true | ConnectionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ConnectionAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ConnectionSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ConnectionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ConnectionMaxAggregateInputType
  }

  export type GetConnectionAggregateType<T extends ConnectionAggregateArgs> = {
        [P in keyof T & keyof AggregateConnection]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateConnection[P]>
      : GetScalarType<T[P], AggregateConnection[P]>
  }




  export type ConnectionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ConnectionWhereInput
    orderBy?: ConnectionOrderByWithAggregationInput | ConnectionOrderByWithAggregationInput[]
    by: ConnectionScalarFieldEnum[] | ConnectionScalarFieldEnum
    having?: ConnectionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ConnectionCountAggregateInputType | true
    _avg?: ConnectionAvgAggregateInputType
    _sum?: ConnectionSumAggregateInputType
    _min?: ConnectionMinAggregateInputType
    _max?: ConnectionMaxAggregateInputType
  }

  export type ConnectionGroupByOutputType = {
    id: number
    id_usuario: string
    name_usuario_invitado: string
    id_device: string
    type_connection: string
    _count: ConnectionCountAggregateOutputType | null
    _avg: ConnectionAvgAggregateOutputType | null
    _sum: ConnectionSumAggregateOutputType | null
    _min: ConnectionMinAggregateOutputType | null
    _max: ConnectionMaxAggregateOutputType | null
  }

  type GetConnectionGroupByPayload<T extends ConnectionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ConnectionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ConnectionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ConnectionGroupByOutputType[P]>
            : GetScalarType<T[P], ConnectionGroupByOutputType[P]>
        }
      >
    >


  export type ConnectionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    id_usuario?: boolean
    name_usuario_invitado?: boolean
    id_device?: boolean
    type_connection?: boolean
    device?: boolean | DeviceDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["connection"]>

  export type ConnectionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    id_usuario?: boolean
    name_usuario_invitado?: boolean
    id_device?: boolean
    type_connection?: boolean
    device?: boolean | DeviceDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["connection"]>

  export type ConnectionSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    id_usuario?: boolean
    name_usuario_invitado?: boolean
    id_device?: boolean
    type_connection?: boolean
    device?: boolean | DeviceDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["connection"]>

  export type ConnectionSelectScalar = {
    id?: boolean
    id_usuario?: boolean
    name_usuario_invitado?: boolean
    id_device?: boolean
    type_connection?: boolean
  }

  export type ConnectionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "id_usuario" | "name_usuario_invitado" | "id_device" | "type_connection", ExtArgs["result"]["connection"]>
  export type ConnectionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    device?: boolean | DeviceDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type ConnectionIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    device?: boolean | DeviceDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type ConnectionIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    device?: boolean | DeviceDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $ConnectionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Connection"
    objects: {
      device: Prisma.$DevicePayload<ExtArgs>
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      id_usuario: string
      name_usuario_invitado: string
      id_device: string
      type_connection: string
    }, ExtArgs["result"]["connection"]>
    composites: {}
  }

  type ConnectionGetPayload<S extends boolean | null | undefined | ConnectionDefaultArgs> = $Result.GetResult<Prisma.$ConnectionPayload, S>

  type ConnectionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ConnectionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ConnectionCountAggregateInputType | true
    }

  export interface ConnectionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Connection'], meta: { name: 'Connection' } }
    /**
     * Find zero or one Connection that matches the filter.
     * @param {ConnectionFindUniqueArgs} args - Arguments to find a Connection
     * @example
     * // Get one Connection
     * const connection = await prisma.connection.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ConnectionFindUniqueArgs>(args: SelectSubset<T, ConnectionFindUniqueArgs<ExtArgs>>): Prisma__ConnectionClient<$Result.GetResult<Prisma.$ConnectionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Connection that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ConnectionFindUniqueOrThrowArgs} args - Arguments to find a Connection
     * @example
     * // Get one Connection
     * const connection = await prisma.connection.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ConnectionFindUniqueOrThrowArgs>(args: SelectSubset<T, ConnectionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ConnectionClient<$Result.GetResult<Prisma.$ConnectionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Connection that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConnectionFindFirstArgs} args - Arguments to find a Connection
     * @example
     * // Get one Connection
     * const connection = await prisma.connection.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ConnectionFindFirstArgs>(args?: SelectSubset<T, ConnectionFindFirstArgs<ExtArgs>>): Prisma__ConnectionClient<$Result.GetResult<Prisma.$ConnectionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Connection that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConnectionFindFirstOrThrowArgs} args - Arguments to find a Connection
     * @example
     * // Get one Connection
     * const connection = await prisma.connection.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ConnectionFindFirstOrThrowArgs>(args?: SelectSubset<T, ConnectionFindFirstOrThrowArgs<ExtArgs>>): Prisma__ConnectionClient<$Result.GetResult<Prisma.$ConnectionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Connections that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConnectionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Connections
     * const connections = await prisma.connection.findMany()
     * 
     * // Get first 10 Connections
     * const connections = await prisma.connection.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const connectionWithIdOnly = await prisma.connection.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ConnectionFindManyArgs>(args?: SelectSubset<T, ConnectionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ConnectionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Connection.
     * @param {ConnectionCreateArgs} args - Arguments to create a Connection.
     * @example
     * // Create one Connection
     * const Connection = await prisma.connection.create({
     *   data: {
     *     // ... data to create a Connection
     *   }
     * })
     * 
     */
    create<T extends ConnectionCreateArgs>(args: SelectSubset<T, ConnectionCreateArgs<ExtArgs>>): Prisma__ConnectionClient<$Result.GetResult<Prisma.$ConnectionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Connections.
     * @param {ConnectionCreateManyArgs} args - Arguments to create many Connections.
     * @example
     * // Create many Connections
     * const connection = await prisma.connection.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ConnectionCreateManyArgs>(args?: SelectSubset<T, ConnectionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Connections and returns the data saved in the database.
     * @param {ConnectionCreateManyAndReturnArgs} args - Arguments to create many Connections.
     * @example
     * // Create many Connections
     * const connection = await prisma.connection.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Connections and only return the `id`
     * const connectionWithIdOnly = await prisma.connection.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ConnectionCreateManyAndReturnArgs>(args?: SelectSubset<T, ConnectionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ConnectionPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Connection.
     * @param {ConnectionDeleteArgs} args - Arguments to delete one Connection.
     * @example
     * // Delete one Connection
     * const Connection = await prisma.connection.delete({
     *   where: {
     *     // ... filter to delete one Connection
     *   }
     * })
     * 
     */
    delete<T extends ConnectionDeleteArgs>(args: SelectSubset<T, ConnectionDeleteArgs<ExtArgs>>): Prisma__ConnectionClient<$Result.GetResult<Prisma.$ConnectionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Connection.
     * @param {ConnectionUpdateArgs} args - Arguments to update one Connection.
     * @example
     * // Update one Connection
     * const connection = await prisma.connection.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ConnectionUpdateArgs>(args: SelectSubset<T, ConnectionUpdateArgs<ExtArgs>>): Prisma__ConnectionClient<$Result.GetResult<Prisma.$ConnectionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Connections.
     * @param {ConnectionDeleteManyArgs} args - Arguments to filter Connections to delete.
     * @example
     * // Delete a few Connections
     * const { count } = await prisma.connection.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ConnectionDeleteManyArgs>(args?: SelectSubset<T, ConnectionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Connections.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConnectionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Connections
     * const connection = await prisma.connection.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ConnectionUpdateManyArgs>(args: SelectSubset<T, ConnectionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Connections and returns the data updated in the database.
     * @param {ConnectionUpdateManyAndReturnArgs} args - Arguments to update many Connections.
     * @example
     * // Update many Connections
     * const connection = await prisma.connection.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Connections and only return the `id`
     * const connectionWithIdOnly = await prisma.connection.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ConnectionUpdateManyAndReturnArgs>(args: SelectSubset<T, ConnectionUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ConnectionPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Connection.
     * @param {ConnectionUpsertArgs} args - Arguments to update or create a Connection.
     * @example
     * // Update or create a Connection
     * const connection = await prisma.connection.upsert({
     *   create: {
     *     // ... data to create a Connection
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Connection we want to update
     *   }
     * })
     */
    upsert<T extends ConnectionUpsertArgs>(args: SelectSubset<T, ConnectionUpsertArgs<ExtArgs>>): Prisma__ConnectionClient<$Result.GetResult<Prisma.$ConnectionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Connections.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConnectionCountArgs} args - Arguments to filter Connections to count.
     * @example
     * // Count the number of Connections
     * const count = await prisma.connection.count({
     *   where: {
     *     // ... the filter for the Connections we want to count
     *   }
     * })
    **/
    count<T extends ConnectionCountArgs>(
      args?: Subset<T, ConnectionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ConnectionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Connection.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConnectionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ConnectionAggregateArgs>(args: Subset<T, ConnectionAggregateArgs>): Prisma.PrismaPromise<GetConnectionAggregateType<T>>

    /**
     * Group by Connection.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConnectionGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ConnectionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ConnectionGroupByArgs['orderBy'] }
        : { orderBy?: ConnectionGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ConnectionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetConnectionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Connection model
   */
  readonly fields: ConnectionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Connection.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ConnectionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    device<T extends DeviceDefaultArgs<ExtArgs> = {}>(args?: Subset<T, DeviceDefaultArgs<ExtArgs>>): Prisma__DeviceClient<$Result.GetResult<Prisma.$DevicePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Connection model
   */
  interface ConnectionFieldRefs {
    readonly id: FieldRef<"Connection", 'Int'>
    readonly id_usuario: FieldRef<"Connection", 'String'>
    readonly name_usuario_invitado: FieldRef<"Connection", 'String'>
    readonly id_device: FieldRef<"Connection", 'String'>
    readonly type_connection: FieldRef<"Connection", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Connection findUnique
   */
  export type ConnectionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Connection
     */
    select?: ConnectionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Connection
     */
    omit?: ConnectionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConnectionInclude<ExtArgs> | null
    /**
     * Filter, which Connection to fetch.
     */
    where: ConnectionWhereUniqueInput
  }

  /**
   * Connection findUniqueOrThrow
   */
  export type ConnectionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Connection
     */
    select?: ConnectionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Connection
     */
    omit?: ConnectionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConnectionInclude<ExtArgs> | null
    /**
     * Filter, which Connection to fetch.
     */
    where: ConnectionWhereUniqueInput
  }

  /**
   * Connection findFirst
   */
  export type ConnectionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Connection
     */
    select?: ConnectionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Connection
     */
    omit?: ConnectionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConnectionInclude<ExtArgs> | null
    /**
     * Filter, which Connection to fetch.
     */
    where?: ConnectionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Connections to fetch.
     */
    orderBy?: ConnectionOrderByWithRelationInput | ConnectionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Connections.
     */
    cursor?: ConnectionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Connections from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Connections.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Connections.
     */
    distinct?: ConnectionScalarFieldEnum | ConnectionScalarFieldEnum[]
  }

  /**
   * Connection findFirstOrThrow
   */
  export type ConnectionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Connection
     */
    select?: ConnectionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Connection
     */
    omit?: ConnectionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConnectionInclude<ExtArgs> | null
    /**
     * Filter, which Connection to fetch.
     */
    where?: ConnectionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Connections to fetch.
     */
    orderBy?: ConnectionOrderByWithRelationInput | ConnectionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Connections.
     */
    cursor?: ConnectionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Connections from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Connections.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Connections.
     */
    distinct?: ConnectionScalarFieldEnum | ConnectionScalarFieldEnum[]
  }

  /**
   * Connection findMany
   */
  export type ConnectionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Connection
     */
    select?: ConnectionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Connection
     */
    omit?: ConnectionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConnectionInclude<ExtArgs> | null
    /**
     * Filter, which Connections to fetch.
     */
    where?: ConnectionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Connections to fetch.
     */
    orderBy?: ConnectionOrderByWithRelationInput | ConnectionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Connections.
     */
    cursor?: ConnectionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Connections from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Connections.
     */
    skip?: number
    distinct?: ConnectionScalarFieldEnum | ConnectionScalarFieldEnum[]
  }

  /**
   * Connection create
   */
  export type ConnectionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Connection
     */
    select?: ConnectionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Connection
     */
    omit?: ConnectionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConnectionInclude<ExtArgs> | null
    /**
     * The data needed to create a Connection.
     */
    data: XOR<ConnectionCreateInput, ConnectionUncheckedCreateInput>
  }

  /**
   * Connection createMany
   */
  export type ConnectionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Connections.
     */
    data: ConnectionCreateManyInput | ConnectionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Connection createManyAndReturn
   */
  export type ConnectionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Connection
     */
    select?: ConnectionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Connection
     */
    omit?: ConnectionOmit<ExtArgs> | null
    /**
     * The data used to create many Connections.
     */
    data: ConnectionCreateManyInput | ConnectionCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConnectionIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Connection update
   */
  export type ConnectionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Connection
     */
    select?: ConnectionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Connection
     */
    omit?: ConnectionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConnectionInclude<ExtArgs> | null
    /**
     * The data needed to update a Connection.
     */
    data: XOR<ConnectionUpdateInput, ConnectionUncheckedUpdateInput>
    /**
     * Choose, which Connection to update.
     */
    where: ConnectionWhereUniqueInput
  }

  /**
   * Connection updateMany
   */
  export type ConnectionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Connections.
     */
    data: XOR<ConnectionUpdateManyMutationInput, ConnectionUncheckedUpdateManyInput>
    /**
     * Filter which Connections to update
     */
    where?: ConnectionWhereInput
    /**
     * Limit how many Connections to update.
     */
    limit?: number
  }

  /**
   * Connection updateManyAndReturn
   */
  export type ConnectionUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Connection
     */
    select?: ConnectionSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Connection
     */
    omit?: ConnectionOmit<ExtArgs> | null
    /**
     * The data used to update Connections.
     */
    data: XOR<ConnectionUpdateManyMutationInput, ConnectionUncheckedUpdateManyInput>
    /**
     * Filter which Connections to update
     */
    where?: ConnectionWhereInput
    /**
     * Limit how many Connections to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConnectionIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Connection upsert
   */
  export type ConnectionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Connection
     */
    select?: ConnectionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Connection
     */
    omit?: ConnectionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConnectionInclude<ExtArgs> | null
    /**
     * The filter to search for the Connection to update in case it exists.
     */
    where: ConnectionWhereUniqueInput
    /**
     * In case the Connection found by the `where` argument doesn't exist, create a new Connection with this data.
     */
    create: XOR<ConnectionCreateInput, ConnectionUncheckedCreateInput>
    /**
     * In case the Connection was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ConnectionUpdateInput, ConnectionUncheckedUpdateInput>
  }

  /**
   * Connection delete
   */
  export type ConnectionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Connection
     */
    select?: ConnectionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Connection
     */
    omit?: ConnectionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConnectionInclude<ExtArgs> | null
    /**
     * Filter which Connection to delete.
     */
    where: ConnectionWhereUniqueInput
  }

  /**
   * Connection deleteMany
   */
  export type ConnectionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Connections to delete
     */
    where?: ConnectionWhereInput
    /**
     * Limit how many Connections to delete.
     */
    limit?: number
  }

  /**
   * Connection without action
   */
  export type ConnectionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Connection
     */
    select?: ConnectionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Connection
     */
    omit?: ConnectionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConnectionInclude<ExtArgs> | null
  }


  /**
   * Model Record
   */

  export type AggregateRecord = {
    _count: RecordCountAggregateOutputType | null
    _avg: RecordAvgAggregateOutputType | null
    _sum: RecordSumAggregateOutputType | null
    _min: RecordMinAggregateOutputType | null
    _max: RecordMaxAggregateOutputType | null
  }

  export type RecordAvgAggregateOutputType = {
    id: number | null
    longitude: number | null
    latitude: number | null
  }

  export type RecordSumAggregateOutputType = {
    id: number | null
    longitude: number | null
    latitude: number | null
  }

  export type RecordMinAggregateOutputType = {
    id: number | null
    id_device: string | null
    longitude: number | null
    latitude: number | null
    date_r: Date | null
  }

  export type RecordMaxAggregateOutputType = {
    id: number | null
    id_device: string | null
    longitude: number | null
    latitude: number | null
    date_r: Date | null
  }

  export type RecordCountAggregateOutputType = {
    id: number
    id_device: number
    longitude: number
    latitude: number
    date_r: number
    _all: number
  }


  export type RecordAvgAggregateInputType = {
    id?: true
    longitude?: true
    latitude?: true
  }

  export type RecordSumAggregateInputType = {
    id?: true
    longitude?: true
    latitude?: true
  }

  export type RecordMinAggregateInputType = {
    id?: true
    id_device?: true
    longitude?: true
    latitude?: true
    date_r?: true
  }

  export type RecordMaxAggregateInputType = {
    id?: true
    id_device?: true
    longitude?: true
    latitude?: true
    date_r?: true
  }

  export type RecordCountAggregateInputType = {
    id?: true
    id_device?: true
    longitude?: true
    latitude?: true
    date_r?: true
    _all?: true
  }

  export type RecordAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Record to aggregate.
     */
    where?: RecordWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Records to fetch.
     */
    orderBy?: RecordOrderByWithRelationInput | RecordOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: RecordWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Records from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Records.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Records
    **/
    _count?: true | RecordCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: RecordAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: RecordSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: RecordMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: RecordMaxAggregateInputType
  }

  export type GetRecordAggregateType<T extends RecordAggregateArgs> = {
        [P in keyof T & keyof AggregateRecord]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRecord[P]>
      : GetScalarType<T[P], AggregateRecord[P]>
  }




  export type RecordGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RecordWhereInput
    orderBy?: RecordOrderByWithAggregationInput | RecordOrderByWithAggregationInput[]
    by: RecordScalarFieldEnum[] | RecordScalarFieldEnum
    having?: RecordScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: RecordCountAggregateInputType | true
    _avg?: RecordAvgAggregateInputType
    _sum?: RecordSumAggregateInputType
    _min?: RecordMinAggregateInputType
    _max?: RecordMaxAggregateInputType
  }

  export type RecordGroupByOutputType = {
    id: number
    id_device: string
    longitude: number
    latitude: number
    date_r: Date
    _count: RecordCountAggregateOutputType | null
    _avg: RecordAvgAggregateOutputType | null
    _sum: RecordSumAggregateOutputType | null
    _min: RecordMinAggregateOutputType | null
    _max: RecordMaxAggregateOutputType | null
  }

  type GetRecordGroupByPayload<T extends RecordGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<RecordGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof RecordGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], RecordGroupByOutputType[P]>
            : GetScalarType<T[P], RecordGroupByOutputType[P]>
        }
      >
    >


  export type RecordSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    id_device?: boolean
    longitude?: boolean
    latitude?: boolean
    date_r?: boolean
    device?: boolean | DeviceDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["record"]>

  export type RecordSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    id_device?: boolean
    longitude?: boolean
    latitude?: boolean
    date_r?: boolean
    device?: boolean | DeviceDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["record"]>

  export type RecordSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    id_device?: boolean
    longitude?: boolean
    latitude?: boolean
    date_r?: boolean
    device?: boolean | DeviceDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["record"]>

  export type RecordSelectScalar = {
    id?: boolean
    id_device?: boolean
    longitude?: boolean
    latitude?: boolean
    date_r?: boolean
  }

  export type RecordOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "id_device" | "longitude" | "latitude" | "date_r", ExtArgs["result"]["record"]>
  export type RecordInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    device?: boolean | DeviceDefaultArgs<ExtArgs>
  }
  export type RecordIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    device?: boolean | DeviceDefaultArgs<ExtArgs>
  }
  export type RecordIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    device?: boolean | DeviceDefaultArgs<ExtArgs>
  }

  export type $RecordPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Record"
    objects: {
      device: Prisma.$DevicePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      id_device: string
      longitude: number
      latitude: number
      date_r: Date
    }, ExtArgs["result"]["record"]>
    composites: {}
  }

  type RecordGetPayload<S extends boolean | null | undefined | RecordDefaultArgs> = $Result.GetResult<Prisma.$RecordPayload, S>

  type RecordCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<RecordFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: RecordCountAggregateInputType | true
    }

  export interface RecordDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Record'], meta: { name: 'Record' } }
    /**
     * Find zero or one Record that matches the filter.
     * @param {RecordFindUniqueArgs} args - Arguments to find a Record
     * @example
     * // Get one Record
     * const record = await prisma.record.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends RecordFindUniqueArgs>(args: SelectSubset<T, RecordFindUniqueArgs<ExtArgs>>): Prisma__RecordClient<$Result.GetResult<Prisma.$RecordPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Record that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {RecordFindUniqueOrThrowArgs} args - Arguments to find a Record
     * @example
     * // Get one Record
     * const record = await prisma.record.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends RecordFindUniqueOrThrowArgs>(args: SelectSubset<T, RecordFindUniqueOrThrowArgs<ExtArgs>>): Prisma__RecordClient<$Result.GetResult<Prisma.$RecordPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Record that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RecordFindFirstArgs} args - Arguments to find a Record
     * @example
     * // Get one Record
     * const record = await prisma.record.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends RecordFindFirstArgs>(args?: SelectSubset<T, RecordFindFirstArgs<ExtArgs>>): Prisma__RecordClient<$Result.GetResult<Prisma.$RecordPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Record that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RecordFindFirstOrThrowArgs} args - Arguments to find a Record
     * @example
     * // Get one Record
     * const record = await prisma.record.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends RecordFindFirstOrThrowArgs>(args?: SelectSubset<T, RecordFindFirstOrThrowArgs<ExtArgs>>): Prisma__RecordClient<$Result.GetResult<Prisma.$RecordPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Records that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RecordFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Records
     * const records = await prisma.record.findMany()
     * 
     * // Get first 10 Records
     * const records = await prisma.record.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const recordWithIdOnly = await prisma.record.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends RecordFindManyArgs>(args?: SelectSubset<T, RecordFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RecordPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Record.
     * @param {RecordCreateArgs} args - Arguments to create a Record.
     * @example
     * // Create one Record
     * const Record = await prisma.record.create({
     *   data: {
     *     // ... data to create a Record
     *   }
     * })
     * 
     */
    create<T extends RecordCreateArgs>(args: SelectSubset<T, RecordCreateArgs<ExtArgs>>): Prisma__RecordClient<$Result.GetResult<Prisma.$RecordPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Records.
     * @param {RecordCreateManyArgs} args - Arguments to create many Records.
     * @example
     * // Create many Records
     * const record = await prisma.record.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends RecordCreateManyArgs>(args?: SelectSubset<T, RecordCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Records and returns the data saved in the database.
     * @param {RecordCreateManyAndReturnArgs} args - Arguments to create many Records.
     * @example
     * // Create many Records
     * const record = await prisma.record.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Records and only return the `id`
     * const recordWithIdOnly = await prisma.record.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends RecordCreateManyAndReturnArgs>(args?: SelectSubset<T, RecordCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RecordPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Record.
     * @param {RecordDeleteArgs} args - Arguments to delete one Record.
     * @example
     * // Delete one Record
     * const Record = await prisma.record.delete({
     *   where: {
     *     // ... filter to delete one Record
     *   }
     * })
     * 
     */
    delete<T extends RecordDeleteArgs>(args: SelectSubset<T, RecordDeleteArgs<ExtArgs>>): Prisma__RecordClient<$Result.GetResult<Prisma.$RecordPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Record.
     * @param {RecordUpdateArgs} args - Arguments to update one Record.
     * @example
     * // Update one Record
     * const record = await prisma.record.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends RecordUpdateArgs>(args: SelectSubset<T, RecordUpdateArgs<ExtArgs>>): Prisma__RecordClient<$Result.GetResult<Prisma.$RecordPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Records.
     * @param {RecordDeleteManyArgs} args - Arguments to filter Records to delete.
     * @example
     * // Delete a few Records
     * const { count } = await prisma.record.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends RecordDeleteManyArgs>(args?: SelectSubset<T, RecordDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Records.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RecordUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Records
     * const record = await prisma.record.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends RecordUpdateManyArgs>(args: SelectSubset<T, RecordUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Records and returns the data updated in the database.
     * @param {RecordUpdateManyAndReturnArgs} args - Arguments to update many Records.
     * @example
     * // Update many Records
     * const record = await prisma.record.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Records and only return the `id`
     * const recordWithIdOnly = await prisma.record.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends RecordUpdateManyAndReturnArgs>(args: SelectSubset<T, RecordUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RecordPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Record.
     * @param {RecordUpsertArgs} args - Arguments to update or create a Record.
     * @example
     * // Update or create a Record
     * const record = await prisma.record.upsert({
     *   create: {
     *     // ... data to create a Record
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Record we want to update
     *   }
     * })
     */
    upsert<T extends RecordUpsertArgs>(args: SelectSubset<T, RecordUpsertArgs<ExtArgs>>): Prisma__RecordClient<$Result.GetResult<Prisma.$RecordPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Records.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RecordCountArgs} args - Arguments to filter Records to count.
     * @example
     * // Count the number of Records
     * const count = await prisma.record.count({
     *   where: {
     *     // ... the filter for the Records we want to count
     *   }
     * })
    **/
    count<T extends RecordCountArgs>(
      args?: Subset<T, RecordCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], RecordCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Record.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RecordAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends RecordAggregateArgs>(args: Subset<T, RecordAggregateArgs>): Prisma.PrismaPromise<GetRecordAggregateType<T>>

    /**
     * Group by Record.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RecordGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends RecordGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: RecordGroupByArgs['orderBy'] }
        : { orderBy?: RecordGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, RecordGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRecordGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Record model
   */
  readonly fields: RecordFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Record.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__RecordClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    device<T extends DeviceDefaultArgs<ExtArgs> = {}>(args?: Subset<T, DeviceDefaultArgs<ExtArgs>>): Prisma__DeviceClient<$Result.GetResult<Prisma.$DevicePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Record model
   */
  interface RecordFieldRefs {
    readonly id: FieldRef<"Record", 'Int'>
    readonly id_device: FieldRef<"Record", 'String'>
    readonly longitude: FieldRef<"Record", 'Float'>
    readonly latitude: FieldRef<"Record", 'Float'>
    readonly date_r: FieldRef<"Record", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Record findUnique
   */
  export type RecordFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Record
     */
    select?: RecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Record
     */
    omit?: RecordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecordInclude<ExtArgs> | null
    /**
     * Filter, which Record to fetch.
     */
    where: RecordWhereUniqueInput
  }

  /**
   * Record findUniqueOrThrow
   */
  export type RecordFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Record
     */
    select?: RecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Record
     */
    omit?: RecordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecordInclude<ExtArgs> | null
    /**
     * Filter, which Record to fetch.
     */
    where: RecordWhereUniqueInput
  }

  /**
   * Record findFirst
   */
  export type RecordFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Record
     */
    select?: RecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Record
     */
    omit?: RecordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecordInclude<ExtArgs> | null
    /**
     * Filter, which Record to fetch.
     */
    where?: RecordWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Records to fetch.
     */
    orderBy?: RecordOrderByWithRelationInput | RecordOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Records.
     */
    cursor?: RecordWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Records from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Records.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Records.
     */
    distinct?: RecordScalarFieldEnum | RecordScalarFieldEnum[]
  }

  /**
   * Record findFirstOrThrow
   */
  export type RecordFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Record
     */
    select?: RecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Record
     */
    omit?: RecordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecordInclude<ExtArgs> | null
    /**
     * Filter, which Record to fetch.
     */
    where?: RecordWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Records to fetch.
     */
    orderBy?: RecordOrderByWithRelationInput | RecordOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Records.
     */
    cursor?: RecordWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Records from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Records.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Records.
     */
    distinct?: RecordScalarFieldEnum | RecordScalarFieldEnum[]
  }

  /**
   * Record findMany
   */
  export type RecordFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Record
     */
    select?: RecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Record
     */
    omit?: RecordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecordInclude<ExtArgs> | null
    /**
     * Filter, which Records to fetch.
     */
    where?: RecordWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Records to fetch.
     */
    orderBy?: RecordOrderByWithRelationInput | RecordOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Records.
     */
    cursor?: RecordWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Records from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Records.
     */
    skip?: number
    distinct?: RecordScalarFieldEnum | RecordScalarFieldEnum[]
  }

  /**
   * Record create
   */
  export type RecordCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Record
     */
    select?: RecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Record
     */
    omit?: RecordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecordInclude<ExtArgs> | null
    /**
     * The data needed to create a Record.
     */
    data: XOR<RecordCreateInput, RecordUncheckedCreateInput>
  }

  /**
   * Record createMany
   */
  export type RecordCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Records.
     */
    data: RecordCreateManyInput | RecordCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Record createManyAndReturn
   */
  export type RecordCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Record
     */
    select?: RecordSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Record
     */
    omit?: RecordOmit<ExtArgs> | null
    /**
     * The data used to create many Records.
     */
    data: RecordCreateManyInput | RecordCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecordIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Record update
   */
  export type RecordUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Record
     */
    select?: RecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Record
     */
    omit?: RecordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecordInclude<ExtArgs> | null
    /**
     * The data needed to update a Record.
     */
    data: XOR<RecordUpdateInput, RecordUncheckedUpdateInput>
    /**
     * Choose, which Record to update.
     */
    where: RecordWhereUniqueInput
  }

  /**
   * Record updateMany
   */
  export type RecordUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Records.
     */
    data: XOR<RecordUpdateManyMutationInput, RecordUncheckedUpdateManyInput>
    /**
     * Filter which Records to update
     */
    where?: RecordWhereInput
    /**
     * Limit how many Records to update.
     */
    limit?: number
  }

  /**
   * Record updateManyAndReturn
   */
  export type RecordUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Record
     */
    select?: RecordSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Record
     */
    omit?: RecordOmit<ExtArgs> | null
    /**
     * The data used to update Records.
     */
    data: XOR<RecordUpdateManyMutationInput, RecordUncheckedUpdateManyInput>
    /**
     * Filter which Records to update
     */
    where?: RecordWhereInput
    /**
     * Limit how many Records to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecordIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Record upsert
   */
  export type RecordUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Record
     */
    select?: RecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Record
     */
    omit?: RecordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecordInclude<ExtArgs> | null
    /**
     * The filter to search for the Record to update in case it exists.
     */
    where: RecordWhereUniqueInput
    /**
     * In case the Record found by the `where` argument doesn't exist, create a new Record with this data.
     */
    create: XOR<RecordCreateInput, RecordUncheckedCreateInput>
    /**
     * In case the Record was found with the provided `where` argument, update it with this data.
     */
    update: XOR<RecordUpdateInput, RecordUncheckedUpdateInput>
  }

  /**
   * Record delete
   */
  export type RecordDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Record
     */
    select?: RecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Record
     */
    omit?: RecordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecordInclude<ExtArgs> | null
    /**
     * Filter which Record to delete.
     */
    where: RecordWhereUniqueInput
  }

  /**
   * Record deleteMany
   */
  export type RecordDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Records to delete
     */
    where?: RecordWhereInput
    /**
     * Limit how many Records to delete.
     */
    limit?: number
  }

  /**
   * Record without action
   */
  export type RecordDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Record
     */
    select?: RecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Record
     */
    omit?: RecordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecordInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const DeviceScalarFieldEnum: {
    id_device: 'id_device',
    name_device: 'name_device',
    status_d: 'status_d',
    update_date: 'update_date',
    userId: 'userId'
  };

  export type DeviceScalarFieldEnum = (typeof DeviceScalarFieldEnum)[keyof typeof DeviceScalarFieldEnum]


  export const UserScalarFieldEnum: {
    id: 'id',
    username: 'username',
    phone_number: 'phone_number',
    email: 'email',
    password_u: 'password_u',
    creation_date: 'creation_date',
    update_date: 'update_date',
    jwt_version: 'jwt_version',
    last_login: 'last_login',
    role: 'role'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const JwtTokenScalarFieldEnum: {
    id: 'id',
    tokenHash: 'tokenHash',
    userId: 'userId',
    tokenType: 'tokenType',
    createdAt: 'createdAt',
    expiresAt: 'expiresAt',
    lastUsedAt: 'lastUsedAt',
    useCount: 'useCount',
    maxUses: 'maxUses',
    isRevoked: 'isRevoked'
  };

  export type JwtTokenScalarFieldEnum = (typeof JwtTokenScalarFieldEnum)[keyof typeof JwtTokenScalarFieldEnum]


  export const JwtActivityScalarFieldEnum: {
    id: 'id',
    tokenId: 'tokenId',
    action: 'action',
    performedAt: 'performedAt'
  };

  export type JwtActivityScalarFieldEnum = (typeof JwtActivityScalarFieldEnum)[keyof typeof JwtActivityScalarFieldEnum]


  export const LocationsScalarFieldEnum: {
    id: 'id',
    id_device: 'id_device',
    longitude: 'longitude',
    latitude: 'latitude',
    date_l: 'date_l'
  };

  export type LocationsScalarFieldEnum = (typeof LocationsScalarFieldEnum)[keyof typeof LocationsScalarFieldEnum]


  export const DeviceConfigurationScalarFieldEnum: {
    id: 'id',
    id_device: 'id_device',
    device_name: 'device_name',
    mac_address: 'mac_address',
    channel: 'channel'
  };

  export type DeviceConfigurationScalarFieldEnum = (typeof DeviceConfigurationScalarFieldEnum)[keyof typeof DeviceConfigurationScalarFieldEnum]


  export const ConnectionScalarFieldEnum: {
    id: 'id',
    id_usuario: 'id_usuario',
    name_usuario_invitado: 'name_usuario_invitado',
    id_device: 'id_device',
    type_connection: 'type_connection'
  };

  export type ConnectionScalarFieldEnum = (typeof ConnectionScalarFieldEnum)[keyof typeof ConnectionScalarFieldEnum]


  export const RecordScalarFieldEnum: {
    id: 'id',
    id_device: 'id_device',
    longitude: 'longitude',
    latitude: 'latitude',
    date_r: 'date_r'
  };

  export type RecordScalarFieldEnum = (typeof RecordScalarFieldEnum)[keyof typeof RecordScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type DeviceWhereInput = {
    AND?: DeviceWhereInput | DeviceWhereInput[]
    OR?: DeviceWhereInput[]
    NOT?: DeviceWhereInput | DeviceWhereInput[]
    id_device?: StringFilter<"Device"> | string
    name_device?: StringFilter<"Device"> | string
    status_d?: StringFilter<"Device"> | string
    update_date?: DateTimeNullableFilter<"Device"> | Date | string | null
    userId?: StringNullableFilter<"Device"> | string | null
    connections?: ConnectionListRelationFilter
    configuration?: XOR<DeviceConfigurationNullableScalarRelationFilter, DeviceConfigurationWhereInput> | null
    locations?: LocationsListRelationFilter
    records?: RecordListRelationFilter
    user?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
  }

  export type DeviceOrderByWithRelationInput = {
    id_device?: SortOrder
    name_device?: SortOrder
    status_d?: SortOrder
    update_date?: SortOrderInput | SortOrder
    userId?: SortOrderInput | SortOrder
    connections?: ConnectionOrderByRelationAggregateInput
    configuration?: DeviceConfigurationOrderByWithRelationInput
    locations?: LocationsOrderByRelationAggregateInput
    records?: RecordOrderByRelationAggregateInput
    user?: UserOrderByWithRelationInput
  }

  export type DeviceWhereUniqueInput = Prisma.AtLeast<{
    id_device?: string
    AND?: DeviceWhereInput | DeviceWhereInput[]
    OR?: DeviceWhereInput[]
    NOT?: DeviceWhereInput | DeviceWhereInput[]
    name_device?: StringFilter<"Device"> | string
    status_d?: StringFilter<"Device"> | string
    update_date?: DateTimeNullableFilter<"Device"> | Date | string | null
    userId?: StringNullableFilter<"Device"> | string | null
    connections?: ConnectionListRelationFilter
    configuration?: XOR<DeviceConfigurationNullableScalarRelationFilter, DeviceConfigurationWhereInput> | null
    locations?: LocationsListRelationFilter
    records?: RecordListRelationFilter
    user?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
  }, "id_device">

  export type DeviceOrderByWithAggregationInput = {
    id_device?: SortOrder
    name_device?: SortOrder
    status_d?: SortOrder
    update_date?: SortOrderInput | SortOrder
    userId?: SortOrderInput | SortOrder
    _count?: DeviceCountOrderByAggregateInput
    _max?: DeviceMaxOrderByAggregateInput
    _min?: DeviceMinOrderByAggregateInput
  }

  export type DeviceScalarWhereWithAggregatesInput = {
    AND?: DeviceScalarWhereWithAggregatesInput | DeviceScalarWhereWithAggregatesInput[]
    OR?: DeviceScalarWhereWithAggregatesInput[]
    NOT?: DeviceScalarWhereWithAggregatesInput | DeviceScalarWhereWithAggregatesInput[]
    id_device?: StringWithAggregatesFilter<"Device"> | string
    name_device?: StringWithAggregatesFilter<"Device"> | string
    status_d?: StringWithAggregatesFilter<"Device"> | string
    update_date?: DateTimeNullableWithAggregatesFilter<"Device"> | Date | string | null
    userId?: StringNullableWithAggregatesFilter<"Device"> | string | null
  }

  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: StringFilter<"User"> | string
    username?: StringFilter<"User"> | string
    phone_number?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    password_u?: StringFilter<"User"> | string
    creation_date?: DateTimeFilter<"User"> | Date | string
    update_date?: DateTimeNullableFilter<"User"> | Date | string | null
    jwt_version?: IntFilter<"User"> | number
    last_login?: DateTimeNullableFilter<"User"> | Date | string | null
    role?: StringFilter<"User"> | string
    connections?: ConnectionListRelationFilter
    devices?: DeviceListRelationFilter
    jwtTokens?: JwtTokenListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    username?: SortOrder
    phone_number?: SortOrder
    email?: SortOrder
    password_u?: SortOrder
    creation_date?: SortOrder
    update_date?: SortOrderInput | SortOrder
    jwt_version?: SortOrder
    last_login?: SortOrderInput | SortOrder
    role?: SortOrder
    connections?: ConnectionOrderByRelationAggregateInput
    devices?: DeviceOrderByRelationAggregateInput
    jwtTokens?: JwtTokenOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    username?: StringFilter<"User"> | string
    phone_number?: StringFilter<"User"> | string
    password_u?: StringFilter<"User"> | string
    creation_date?: DateTimeFilter<"User"> | Date | string
    update_date?: DateTimeNullableFilter<"User"> | Date | string | null
    jwt_version?: IntFilter<"User"> | number
    last_login?: DateTimeNullableFilter<"User"> | Date | string | null
    role?: StringFilter<"User"> | string
    connections?: ConnectionListRelationFilter
    devices?: DeviceListRelationFilter
    jwtTokens?: JwtTokenListRelationFilter
  }, "id" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    username?: SortOrder
    phone_number?: SortOrder
    email?: SortOrder
    password_u?: SortOrder
    creation_date?: SortOrder
    update_date?: SortOrderInput | SortOrder
    jwt_version?: SortOrder
    last_login?: SortOrderInput | SortOrder
    role?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _avg?: UserAvgOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
    _sum?: UserSumOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"User"> | string
    username?: StringWithAggregatesFilter<"User"> | string
    phone_number?: StringWithAggregatesFilter<"User"> | string
    email?: StringWithAggregatesFilter<"User"> | string
    password_u?: StringWithAggregatesFilter<"User"> | string
    creation_date?: DateTimeWithAggregatesFilter<"User"> | Date | string
    update_date?: DateTimeNullableWithAggregatesFilter<"User"> | Date | string | null
    jwt_version?: IntWithAggregatesFilter<"User"> | number
    last_login?: DateTimeNullableWithAggregatesFilter<"User"> | Date | string | null
    role?: StringWithAggregatesFilter<"User"> | string
  }

  export type JwtTokenWhereInput = {
    AND?: JwtTokenWhereInput | JwtTokenWhereInput[]
    OR?: JwtTokenWhereInput[]
    NOT?: JwtTokenWhereInput | JwtTokenWhereInput[]
    id?: StringFilter<"JwtToken"> | string
    tokenHash?: StringFilter<"JwtToken"> | string
    userId?: StringFilter<"JwtToken"> | string
    tokenType?: StringFilter<"JwtToken"> | string
    createdAt?: DateTimeFilter<"JwtToken"> | Date | string
    expiresAt?: DateTimeFilter<"JwtToken"> | Date | string
    lastUsedAt?: DateTimeNullableFilter<"JwtToken"> | Date | string | null
    useCount?: IntFilter<"JwtToken"> | number
    maxUses?: IntFilter<"JwtToken"> | number
    isRevoked?: BoolFilter<"JwtToken"> | boolean
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    activities?: JwtActivityListRelationFilter
  }

  export type JwtTokenOrderByWithRelationInput = {
    id?: SortOrder
    tokenHash?: SortOrder
    userId?: SortOrder
    tokenType?: SortOrder
    createdAt?: SortOrder
    expiresAt?: SortOrder
    lastUsedAt?: SortOrderInput | SortOrder
    useCount?: SortOrder
    maxUses?: SortOrder
    isRevoked?: SortOrder
    user?: UserOrderByWithRelationInput
    activities?: JwtActivityOrderByRelationAggregateInput
  }

  export type JwtTokenWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    tokenHash?: string
    AND?: JwtTokenWhereInput | JwtTokenWhereInput[]
    OR?: JwtTokenWhereInput[]
    NOT?: JwtTokenWhereInput | JwtTokenWhereInput[]
    userId?: StringFilter<"JwtToken"> | string
    tokenType?: StringFilter<"JwtToken"> | string
    createdAt?: DateTimeFilter<"JwtToken"> | Date | string
    expiresAt?: DateTimeFilter<"JwtToken"> | Date | string
    lastUsedAt?: DateTimeNullableFilter<"JwtToken"> | Date | string | null
    useCount?: IntFilter<"JwtToken"> | number
    maxUses?: IntFilter<"JwtToken"> | number
    isRevoked?: BoolFilter<"JwtToken"> | boolean
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    activities?: JwtActivityListRelationFilter
  }, "id" | "tokenHash">

  export type JwtTokenOrderByWithAggregationInput = {
    id?: SortOrder
    tokenHash?: SortOrder
    userId?: SortOrder
    tokenType?: SortOrder
    createdAt?: SortOrder
    expiresAt?: SortOrder
    lastUsedAt?: SortOrderInput | SortOrder
    useCount?: SortOrder
    maxUses?: SortOrder
    isRevoked?: SortOrder
    _count?: JwtTokenCountOrderByAggregateInput
    _avg?: JwtTokenAvgOrderByAggregateInput
    _max?: JwtTokenMaxOrderByAggregateInput
    _min?: JwtTokenMinOrderByAggregateInput
    _sum?: JwtTokenSumOrderByAggregateInput
  }

  export type JwtTokenScalarWhereWithAggregatesInput = {
    AND?: JwtTokenScalarWhereWithAggregatesInput | JwtTokenScalarWhereWithAggregatesInput[]
    OR?: JwtTokenScalarWhereWithAggregatesInput[]
    NOT?: JwtTokenScalarWhereWithAggregatesInput | JwtTokenScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"JwtToken"> | string
    tokenHash?: StringWithAggregatesFilter<"JwtToken"> | string
    userId?: StringWithAggregatesFilter<"JwtToken"> | string
    tokenType?: StringWithAggregatesFilter<"JwtToken"> | string
    createdAt?: DateTimeWithAggregatesFilter<"JwtToken"> | Date | string
    expiresAt?: DateTimeWithAggregatesFilter<"JwtToken"> | Date | string
    lastUsedAt?: DateTimeNullableWithAggregatesFilter<"JwtToken"> | Date | string | null
    useCount?: IntWithAggregatesFilter<"JwtToken"> | number
    maxUses?: IntWithAggregatesFilter<"JwtToken"> | number
    isRevoked?: BoolWithAggregatesFilter<"JwtToken"> | boolean
  }

  export type JwtActivityWhereInput = {
    AND?: JwtActivityWhereInput | JwtActivityWhereInput[]
    OR?: JwtActivityWhereInput[]
    NOT?: JwtActivityWhereInput | JwtActivityWhereInput[]
    id?: IntFilter<"JwtActivity"> | number
    tokenId?: StringFilter<"JwtActivity"> | string
    action?: StringFilter<"JwtActivity"> | string
    performedAt?: DateTimeFilter<"JwtActivity"> | Date | string
    jwtToken?: XOR<JwtTokenScalarRelationFilter, JwtTokenWhereInput>
  }

  export type JwtActivityOrderByWithRelationInput = {
    id?: SortOrder
    tokenId?: SortOrder
    action?: SortOrder
    performedAt?: SortOrder
    jwtToken?: JwtTokenOrderByWithRelationInput
  }

  export type JwtActivityWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: JwtActivityWhereInput | JwtActivityWhereInput[]
    OR?: JwtActivityWhereInput[]
    NOT?: JwtActivityWhereInput | JwtActivityWhereInput[]
    tokenId?: StringFilter<"JwtActivity"> | string
    action?: StringFilter<"JwtActivity"> | string
    performedAt?: DateTimeFilter<"JwtActivity"> | Date | string
    jwtToken?: XOR<JwtTokenScalarRelationFilter, JwtTokenWhereInput>
  }, "id">

  export type JwtActivityOrderByWithAggregationInput = {
    id?: SortOrder
    tokenId?: SortOrder
    action?: SortOrder
    performedAt?: SortOrder
    _count?: JwtActivityCountOrderByAggregateInput
    _avg?: JwtActivityAvgOrderByAggregateInput
    _max?: JwtActivityMaxOrderByAggregateInput
    _min?: JwtActivityMinOrderByAggregateInput
    _sum?: JwtActivitySumOrderByAggregateInput
  }

  export type JwtActivityScalarWhereWithAggregatesInput = {
    AND?: JwtActivityScalarWhereWithAggregatesInput | JwtActivityScalarWhereWithAggregatesInput[]
    OR?: JwtActivityScalarWhereWithAggregatesInput[]
    NOT?: JwtActivityScalarWhereWithAggregatesInput | JwtActivityScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"JwtActivity"> | number
    tokenId?: StringWithAggregatesFilter<"JwtActivity"> | string
    action?: StringWithAggregatesFilter<"JwtActivity"> | string
    performedAt?: DateTimeWithAggregatesFilter<"JwtActivity"> | Date | string
  }

  export type LocationsWhereInput = {
    AND?: LocationsWhereInput | LocationsWhereInput[]
    OR?: LocationsWhereInput[]
    NOT?: LocationsWhereInput | LocationsWhereInput[]
    id?: IntFilter<"Locations"> | number
    id_device?: StringFilter<"Locations"> | string
    longitude?: FloatFilter<"Locations"> | number
    latitude?: FloatFilter<"Locations"> | number
    date_l?: DateTimeFilter<"Locations"> | Date | string
    device?: XOR<DeviceScalarRelationFilter, DeviceWhereInput>
  }

  export type LocationsOrderByWithRelationInput = {
    id?: SortOrder
    id_device?: SortOrder
    longitude?: SortOrder
    latitude?: SortOrder
    date_l?: SortOrder
    device?: DeviceOrderByWithRelationInput
  }

  export type LocationsWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: LocationsWhereInput | LocationsWhereInput[]
    OR?: LocationsWhereInput[]
    NOT?: LocationsWhereInput | LocationsWhereInput[]
    id_device?: StringFilter<"Locations"> | string
    longitude?: FloatFilter<"Locations"> | number
    latitude?: FloatFilter<"Locations"> | number
    date_l?: DateTimeFilter<"Locations"> | Date | string
    device?: XOR<DeviceScalarRelationFilter, DeviceWhereInput>
  }, "id">

  export type LocationsOrderByWithAggregationInput = {
    id?: SortOrder
    id_device?: SortOrder
    longitude?: SortOrder
    latitude?: SortOrder
    date_l?: SortOrder
    _count?: LocationsCountOrderByAggregateInput
    _avg?: LocationsAvgOrderByAggregateInput
    _max?: LocationsMaxOrderByAggregateInput
    _min?: LocationsMinOrderByAggregateInput
    _sum?: LocationsSumOrderByAggregateInput
  }

  export type LocationsScalarWhereWithAggregatesInput = {
    AND?: LocationsScalarWhereWithAggregatesInput | LocationsScalarWhereWithAggregatesInput[]
    OR?: LocationsScalarWhereWithAggregatesInput[]
    NOT?: LocationsScalarWhereWithAggregatesInput | LocationsScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Locations"> | number
    id_device?: StringWithAggregatesFilter<"Locations"> | string
    longitude?: FloatWithAggregatesFilter<"Locations"> | number
    latitude?: FloatWithAggregatesFilter<"Locations"> | number
    date_l?: DateTimeWithAggregatesFilter<"Locations"> | Date | string
  }

  export type DeviceConfigurationWhereInput = {
    AND?: DeviceConfigurationWhereInput | DeviceConfigurationWhereInput[]
    OR?: DeviceConfigurationWhereInput[]
    NOT?: DeviceConfigurationWhereInput | DeviceConfigurationWhereInput[]
    id?: IntFilter<"DeviceConfiguration"> | number
    id_device?: StringFilter<"DeviceConfiguration"> | string
    device_name?: StringFilter<"DeviceConfiguration"> | string
    mac_address?: StringFilter<"DeviceConfiguration"> | string
    channel?: IntFilter<"DeviceConfiguration"> | number
    device?: XOR<DeviceScalarRelationFilter, DeviceWhereInput>
  }

  export type DeviceConfigurationOrderByWithRelationInput = {
    id?: SortOrder
    id_device?: SortOrder
    device_name?: SortOrder
    mac_address?: SortOrder
    channel?: SortOrder
    device?: DeviceOrderByWithRelationInput
  }

  export type DeviceConfigurationWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    id_device?: string
    AND?: DeviceConfigurationWhereInput | DeviceConfigurationWhereInput[]
    OR?: DeviceConfigurationWhereInput[]
    NOT?: DeviceConfigurationWhereInput | DeviceConfigurationWhereInput[]
    device_name?: StringFilter<"DeviceConfiguration"> | string
    mac_address?: StringFilter<"DeviceConfiguration"> | string
    channel?: IntFilter<"DeviceConfiguration"> | number
    device?: XOR<DeviceScalarRelationFilter, DeviceWhereInput>
  }, "id" | "id_device">

  export type DeviceConfigurationOrderByWithAggregationInput = {
    id?: SortOrder
    id_device?: SortOrder
    device_name?: SortOrder
    mac_address?: SortOrder
    channel?: SortOrder
    _count?: DeviceConfigurationCountOrderByAggregateInput
    _avg?: DeviceConfigurationAvgOrderByAggregateInput
    _max?: DeviceConfigurationMaxOrderByAggregateInput
    _min?: DeviceConfigurationMinOrderByAggregateInput
    _sum?: DeviceConfigurationSumOrderByAggregateInput
  }

  export type DeviceConfigurationScalarWhereWithAggregatesInput = {
    AND?: DeviceConfigurationScalarWhereWithAggregatesInput | DeviceConfigurationScalarWhereWithAggregatesInput[]
    OR?: DeviceConfigurationScalarWhereWithAggregatesInput[]
    NOT?: DeviceConfigurationScalarWhereWithAggregatesInput | DeviceConfigurationScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"DeviceConfiguration"> | number
    id_device?: StringWithAggregatesFilter<"DeviceConfiguration"> | string
    device_name?: StringWithAggregatesFilter<"DeviceConfiguration"> | string
    mac_address?: StringWithAggregatesFilter<"DeviceConfiguration"> | string
    channel?: IntWithAggregatesFilter<"DeviceConfiguration"> | number
  }

  export type ConnectionWhereInput = {
    AND?: ConnectionWhereInput | ConnectionWhereInput[]
    OR?: ConnectionWhereInput[]
    NOT?: ConnectionWhereInput | ConnectionWhereInput[]
    id?: IntFilter<"Connection"> | number
    id_usuario?: StringFilter<"Connection"> | string
    name_usuario_invitado?: StringFilter<"Connection"> | string
    id_device?: StringFilter<"Connection"> | string
    type_connection?: StringFilter<"Connection"> | string
    device?: XOR<DeviceScalarRelationFilter, DeviceWhereInput>
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type ConnectionOrderByWithRelationInput = {
    id?: SortOrder
    id_usuario?: SortOrder
    name_usuario_invitado?: SortOrder
    id_device?: SortOrder
    type_connection?: SortOrder
    device?: DeviceOrderByWithRelationInput
    user?: UserOrderByWithRelationInput
  }

  export type ConnectionWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: ConnectionWhereInput | ConnectionWhereInput[]
    OR?: ConnectionWhereInput[]
    NOT?: ConnectionWhereInput | ConnectionWhereInput[]
    id_usuario?: StringFilter<"Connection"> | string
    name_usuario_invitado?: StringFilter<"Connection"> | string
    id_device?: StringFilter<"Connection"> | string
    type_connection?: StringFilter<"Connection"> | string
    device?: XOR<DeviceScalarRelationFilter, DeviceWhereInput>
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id">

  export type ConnectionOrderByWithAggregationInput = {
    id?: SortOrder
    id_usuario?: SortOrder
    name_usuario_invitado?: SortOrder
    id_device?: SortOrder
    type_connection?: SortOrder
    _count?: ConnectionCountOrderByAggregateInput
    _avg?: ConnectionAvgOrderByAggregateInput
    _max?: ConnectionMaxOrderByAggregateInput
    _min?: ConnectionMinOrderByAggregateInput
    _sum?: ConnectionSumOrderByAggregateInput
  }

  export type ConnectionScalarWhereWithAggregatesInput = {
    AND?: ConnectionScalarWhereWithAggregatesInput | ConnectionScalarWhereWithAggregatesInput[]
    OR?: ConnectionScalarWhereWithAggregatesInput[]
    NOT?: ConnectionScalarWhereWithAggregatesInput | ConnectionScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Connection"> | number
    id_usuario?: StringWithAggregatesFilter<"Connection"> | string
    name_usuario_invitado?: StringWithAggregatesFilter<"Connection"> | string
    id_device?: StringWithAggregatesFilter<"Connection"> | string
    type_connection?: StringWithAggregatesFilter<"Connection"> | string
  }

  export type RecordWhereInput = {
    AND?: RecordWhereInput | RecordWhereInput[]
    OR?: RecordWhereInput[]
    NOT?: RecordWhereInput | RecordWhereInput[]
    id?: IntFilter<"Record"> | number
    id_device?: StringFilter<"Record"> | string
    longitude?: FloatFilter<"Record"> | number
    latitude?: FloatFilter<"Record"> | number
    date_r?: DateTimeFilter<"Record"> | Date | string
    device?: XOR<DeviceScalarRelationFilter, DeviceWhereInput>
  }

  export type RecordOrderByWithRelationInput = {
    id?: SortOrder
    id_device?: SortOrder
    longitude?: SortOrder
    latitude?: SortOrder
    date_r?: SortOrder
    device?: DeviceOrderByWithRelationInput
  }

  export type RecordWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: RecordWhereInput | RecordWhereInput[]
    OR?: RecordWhereInput[]
    NOT?: RecordWhereInput | RecordWhereInput[]
    id_device?: StringFilter<"Record"> | string
    longitude?: FloatFilter<"Record"> | number
    latitude?: FloatFilter<"Record"> | number
    date_r?: DateTimeFilter<"Record"> | Date | string
    device?: XOR<DeviceScalarRelationFilter, DeviceWhereInput>
  }, "id">

  export type RecordOrderByWithAggregationInput = {
    id?: SortOrder
    id_device?: SortOrder
    longitude?: SortOrder
    latitude?: SortOrder
    date_r?: SortOrder
    _count?: RecordCountOrderByAggregateInput
    _avg?: RecordAvgOrderByAggregateInput
    _max?: RecordMaxOrderByAggregateInput
    _min?: RecordMinOrderByAggregateInput
    _sum?: RecordSumOrderByAggregateInput
  }

  export type RecordScalarWhereWithAggregatesInput = {
    AND?: RecordScalarWhereWithAggregatesInput | RecordScalarWhereWithAggregatesInput[]
    OR?: RecordScalarWhereWithAggregatesInput[]
    NOT?: RecordScalarWhereWithAggregatesInput | RecordScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Record"> | number
    id_device?: StringWithAggregatesFilter<"Record"> | string
    longitude?: FloatWithAggregatesFilter<"Record"> | number
    latitude?: FloatWithAggregatesFilter<"Record"> | number
    date_r?: DateTimeWithAggregatesFilter<"Record"> | Date | string
  }

  export type DeviceCreateInput = {
    id_device?: string
    name_device: string
    status_d: string
    update_date?: Date | string | null
    connections?: ConnectionCreateNestedManyWithoutDeviceInput
    configuration?: DeviceConfigurationCreateNestedOneWithoutDeviceInput
    locations?: LocationsCreateNestedManyWithoutDeviceInput
    records?: RecordCreateNestedManyWithoutDeviceInput
    user?: UserCreateNestedOneWithoutDevicesInput
  }

  export type DeviceUncheckedCreateInput = {
    id_device?: string
    name_device: string
    status_d: string
    update_date?: Date | string | null
    userId?: string | null
    connections?: ConnectionUncheckedCreateNestedManyWithoutDeviceInput
    configuration?: DeviceConfigurationUncheckedCreateNestedOneWithoutDeviceInput
    locations?: LocationsUncheckedCreateNestedManyWithoutDeviceInput
    records?: RecordUncheckedCreateNestedManyWithoutDeviceInput
  }

  export type DeviceUpdateInput = {
    id_device?: StringFieldUpdateOperationsInput | string
    name_device?: StringFieldUpdateOperationsInput | string
    status_d?: StringFieldUpdateOperationsInput | string
    update_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    connections?: ConnectionUpdateManyWithoutDeviceNestedInput
    configuration?: DeviceConfigurationUpdateOneWithoutDeviceNestedInput
    locations?: LocationsUpdateManyWithoutDeviceNestedInput
    records?: RecordUpdateManyWithoutDeviceNestedInput
    user?: UserUpdateOneWithoutDevicesNestedInput
  }

  export type DeviceUncheckedUpdateInput = {
    id_device?: StringFieldUpdateOperationsInput | string
    name_device?: StringFieldUpdateOperationsInput | string
    status_d?: StringFieldUpdateOperationsInput | string
    update_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    connections?: ConnectionUncheckedUpdateManyWithoutDeviceNestedInput
    configuration?: DeviceConfigurationUncheckedUpdateOneWithoutDeviceNestedInput
    locations?: LocationsUncheckedUpdateManyWithoutDeviceNestedInput
    records?: RecordUncheckedUpdateManyWithoutDeviceNestedInput
  }

  export type DeviceCreateManyInput = {
    id_device?: string
    name_device: string
    status_d: string
    update_date?: Date | string | null
    userId?: string | null
  }

  export type DeviceUpdateManyMutationInput = {
    id_device?: StringFieldUpdateOperationsInput | string
    name_device?: StringFieldUpdateOperationsInput | string
    status_d?: StringFieldUpdateOperationsInput | string
    update_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type DeviceUncheckedUpdateManyInput = {
    id_device?: StringFieldUpdateOperationsInput | string
    name_device?: StringFieldUpdateOperationsInput | string
    status_d?: StringFieldUpdateOperationsInput | string
    update_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    userId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type UserCreateInput = {
    id?: string
    username: string
    phone_number: string
    email: string
    password_u: string
    creation_date?: Date | string
    update_date?: Date | string | null
    jwt_version?: number
    last_login?: Date | string | null
    role?: string
    connections?: ConnectionCreateNestedManyWithoutUserInput
    devices?: DeviceCreateNestedManyWithoutUserInput
    jwtTokens?: JwtTokenCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: string
    username: string
    phone_number: string
    email: string
    password_u: string
    creation_date?: Date | string
    update_date?: Date | string | null
    jwt_version?: number
    last_login?: Date | string | null
    role?: string
    connections?: ConnectionUncheckedCreateNestedManyWithoutUserInput
    devices?: DeviceUncheckedCreateNestedManyWithoutUserInput
    jwtTokens?: JwtTokenUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    phone_number?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password_u?: StringFieldUpdateOperationsInput | string
    creation_date?: DateTimeFieldUpdateOperationsInput | Date | string
    update_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    jwt_version?: IntFieldUpdateOperationsInput | number
    last_login?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    role?: StringFieldUpdateOperationsInput | string
    connections?: ConnectionUpdateManyWithoutUserNestedInput
    devices?: DeviceUpdateManyWithoutUserNestedInput
    jwtTokens?: JwtTokenUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    phone_number?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password_u?: StringFieldUpdateOperationsInput | string
    creation_date?: DateTimeFieldUpdateOperationsInput | Date | string
    update_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    jwt_version?: IntFieldUpdateOperationsInput | number
    last_login?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    role?: StringFieldUpdateOperationsInput | string
    connections?: ConnectionUncheckedUpdateManyWithoutUserNestedInput
    devices?: DeviceUncheckedUpdateManyWithoutUserNestedInput
    jwtTokens?: JwtTokenUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: string
    username: string
    phone_number: string
    email: string
    password_u: string
    creation_date?: Date | string
    update_date?: Date | string | null
    jwt_version?: number
    last_login?: Date | string | null
    role?: string
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    phone_number?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password_u?: StringFieldUpdateOperationsInput | string
    creation_date?: DateTimeFieldUpdateOperationsInput | Date | string
    update_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    jwt_version?: IntFieldUpdateOperationsInput | number
    last_login?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    role?: StringFieldUpdateOperationsInput | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    phone_number?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password_u?: StringFieldUpdateOperationsInput | string
    creation_date?: DateTimeFieldUpdateOperationsInput | Date | string
    update_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    jwt_version?: IntFieldUpdateOperationsInput | number
    last_login?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    role?: StringFieldUpdateOperationsInput | string
  }

  export type JwtTokenCreateInput = {
    id?: string
    tokenHash: string
    tokenType?: string
    createdAt?: Date | string
    expiresAt: Date | string
    lastUsedAt?: Date | string | null
    useCount?: number
    maxUses?: number
    isRevoked?: boolean
    user: UserCreateNestedOneWithoutJwtTokensInput
    activities?: JwtActivityCreateNestedManyWithoutJwtTokenInput
  }

  export type JwtTokenUncheckedCreateInput = {
    id?: string
    tokenHash: string
    userId: string
    tokenType?: string
    createdAt?: Date | string
    expiresAt: Date | string
    lastUsedAt?: Date | string | null
    useCount?: number
    maxUses?: number
    isRevoked?: boolean
    activities?: JwtActivityUncheckedCreateNestedManyWithoutJwtTokenInput
  }

  export type JwtTokenUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    tokenHash?: StringFieldUpdateOperationsInput | string
    tokenType?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lastUsedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    useCount?: IntFieldUpdateOperationsInput | number
    maxUses?: IntFieldUpdateOperationsInput | number
    isRevoked?: BoolFieldUpdateOperationsInput | boolean
    user?: UserUpdateOneRequiredWithoutJwtTokensNestedInput
    activities?: JwtActivityUpdateManyWithoutJwtTokenNestedInput
  }

  export type JwtTokenUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    tokenHash?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    tokenType?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lastUsedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    useCount?: IntFieldUpdateOperationsInput | number
    maxUses?: IntFieldUpdateOperationsInput | number
    isRevoked?: BoolFieldUpdateOperationsInput | boolean
    activities?: JwtActivityUncheckedUpdateManyWithoutJwtTokenNestedInput
  }

  export type JwtTokenCreateManyInput = {
    id?: string
    tokenHash: string
    userId: string
    tokenType?: string
    createdAt?: Date | string
    expiresAt: Date | string
    lastUsedAt?: Date | string | null
    useCount?: number
    maxUses?: number
    isRevoked?: boolean
  }

  export type JwtTokenUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    tokenHash?: StringFieldUpdateOperationsInput | string
    tokenType?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lastUsedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    useCount?: IntFieldUpdateOperationsInput | number
    maxUses?: IntFieldUpdateOperationsInput | number
    isRevoked?: BoolFieldUpdateOperationsInput | boolean
  }

  export type JwtTokenUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    tokenHash?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    tokenType?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lastUsedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    useCount?: IntFieldUpdateOperationsInput | number
    maxUses?: IntFieldUpdateOperationsInput | number
    isRevoked?: BoolFieldUpdateOperationsInput | boolean
  }

  export type JwtActivityCreateInput = {
    action: string
    performedAt?: Date | string
    jwtToken: JwtTokenCreateNestedOneWithoutActivitiesInput
  }

  export type JwtActivityUncheckedCreateInput = {
    id?: number
    tokenId: string
    action: string
    performedAt?: Date | string
  }

  export type JwtActivityUpdateInput = {
    action?: StringFieldUpdateOperationsInput | string
    performedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    jwtToken?: JwtTokenUpdateOneRequiredWithoutActivitiesNestedInput
  }

  export type JwtActivityUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    tokenId?: StringFieldUpdateOperationsInput | string
    action?: StringFieldUpdateOperationsInput | string
    performedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type JwtActivityCreateManyInput = {
    id?: number
    tokenId: string
    action: string
    performedAt?: Date | string
  }

  export type JwtActivityUpdateManyMutationInput = {
    action?: StringFieldUpdateOperationsInput | string
    performedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type JwtActivityUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    tokenId?: StringFieldUpdateOperationsInput | string
    action?: StringFieldUpdateOperationsInput | string
    performedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LocationsCreateInput = {
    longitude: number
    latitude: number
    date_l?: Date | string
    device: DeviceCreateNestedOneWithoutLocationsInput
  }

  export type LocationsUncheckedCreateInput = {
    id?: number
    id_device: string
    longitude: number
    latitude: number
    date_l?: Date | string
  }

  export type LocationsUpdateInput = {
    longitude?: FloatFieldUpdateOperationsInput | number
    latitude?: FloatFieldUpdateOperationsInput | number
    date_l?: DateTimeFieldUpdateOperationsInput | Date | string
    device?: DeviceUpdateOneRequiredWithoutLocationsNestedInput
  }

  export type LocationsUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    id_device?: StringFieldUpdateOperationsInput | string
    longitude?: FloatFieldUpdateOperationsInput | number
    latitude?: FloatFieldUpdateOperationsInput | number
    date_l?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LocationsCreateManyInput = {
    id?: number
    id_device: string
    longitude: number
    latitude: number
    date_l?: Date | string
  }

  export type LocationsUpdateManyMutationInput = {
    longitude?: FloatFieldUpdateOperationsInput | number
    latitude?: FloatFieldUpdateOperationsInput | number
    date_l?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LocationsUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    id_device?: StringFieldUpdateOperationsInput | string
    longitude?: FloatFieldUpdateOperationsInput | number
    latitude?: FloatFieldUpdateOperationsInput | number
    date_l?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DeviceConfigurationCreateInput = {
    device_name: string
    mac_address: string
    channel: number
    device: DeviceCreateNestedOneWithoutConfigurationInput
  }

  export type DeviceConfigurationUncheckedCreateInput = {
    id?: number
    id_device: string
    device_name: string
    mac_address: string
    channel: number
  }

  export type DeviceConfigurationUpdateInput = {
    device_name?: StringFieldUpdateOperationsInput | string
    mac_address?: StringFieldUpdateOperationsInput | string
    channel?: IntFieldUpdateOperationsInput | number
    device?: DeviceUpdateOneRequiredWithoutConfigurationNestedInput
  }

  export type DeviceConfigurationUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    id_device?: StringFieldUpdateOperationsInput | string
    device_name?: StringFieldUpdateOperationsInput | string
    mac_address?: StringFieldUpdateOperationsInput | string
    channel?: IntFieldUpdateOperationsInput | number
  }

  export type DeviceConfigurationCreateManyInput = {
    id?: number
    id_device: string
    device_name: string
    mac_address: string
    channel: number
  }

  export type DeviceConfigurationUpdateManyMutationInput = {
    device_name?: StringFieldUpdateOperationsInput | string
    mac_address?: StringFieldUpdateOperationsInput | string
    channel?: IntFieldUpdateOperationsInput | number
  }

  export type DeviceConfigurationUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    id_device?: StringFieldUpdateOperationsInput | string
    device_name?: StringFieldUpdateOperationsInput | string
    mac_address?: StringFieldUpdateOperationsInput | string
    channel?: IntFieldUpdateOperationsInput | number
  }

  export type ConnectionCreateInput = {
    name_usuario_invitado: string
    type_connection: string
    device: DeviceCreateNestedOneWithoutConnectionsInput
    user: UserCreateNestedOneWithoutConnectionsInput
  }

  export type ConnectionUncheckedCreateInput = {
    id?: number
    id_usuario: string
    name_usuario_invitado: string
    id_device: string
    type_connection: string
  }

  export type ConnectionUpdateInput = {
    name_usuario_invitado?: StringFieldUpdateOperationsInput | string
    type_connection?: StringFieldUpdateOperationsInput | string
    device?: DeviceUpdateOneRequiredWithoutConnectionsNestedInput
    user?: UserUpdateOneRequiredWithoutConnectionsNestedInput
  }

  export type ConnectionUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    id_usuario?: StringFieldUpdateOperationsInput | string
    name_usuario_invitado?: StringFieldUpdateOperationsInput | string
    id_device?: StringFieldUpdateOperationsInput | string
    type_connection?: StringFieldUpdateOperationsInput | string
  }

  export type ConnectionCreateManyInput = {
    id?: number
    id_usuario: string
    name_usuario_invitado: string
    id_device: string
    type_connection: string
  }

  export type ConnectionUpdateManyMutationInput = {
    name_usuario_invitado?: StringFieldUpdateOperationsInput | string
    type_connection?: StringFieldUpdateOperationsInput | string
  }

  export type ConnectionUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    id_usuario?: StringFieldUpdateOperationsInput | string
    name_usuario_invitado?: StringFieldUpdateOperationsInput | string
    id_device?: StringFieldUpdateOperationsInput | string
    type_connection?: StringFieldUpdateOperationsInput | string
  }

  export type RecordCreateInput = {
    longitude: number
    latitude: number
    date_r?: Date | string
    device: DeviceCreateNestedOneWithoutRecordsInput
  }

  export type RecordUncheckedCreateInput = {
    id?: number
    id_device: string
    longitude: number
    latitude: number
    date_r?: Date | string
  }

  export type RecordUpdateInput = {
    longitude?: FloatFieldUpdateOperationsInput | number
    latitude?: FloatFieldUpdateOperationsInput | number
    date_r?: DateTimeFieldUpdateOperationsInput | Date | string
    device?: DeviceUpdateOneRequiredWithoutRecordsNestedInput
  }

  export type RecordUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    id_device?: StringFieldUpdateOperationsInput | string
    longitude?: FloatFieldUpdateOperationsInput | number
    latitude?: FloatFieldUpdateOperationsInput | number
    date_r?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RecordCreateManyInput = {
    id?: number
    id_device: string
    longitude: number
    latitude: number
    date_r?: Date | string
  }

  export type RecordUpdateManyMutationInput = {
    longitude?: FloatFieldUpdateOperationsInput | number
    latitude?: FloatFieldUpdateOperationsInput | number
    date_r?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RecordUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    id_device?: StringFieldUpdateOperationsInput | string
    longitude?: FloatFieldUpdateOperationsInput | number
    latitude?: FloatFieldUpdateOperationsInput | number
    date_r?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type ConnectionListRelationFilter = {
    every?: ConnectionWhereInput
    some?: ConnectionWhereInput
    none?: ConnectionWhereInput
  }

  export type DeviceConfigurationNullableScalarRelationFilter = {
    is?: DeviceConfigurationWhereInput | null
    isNot?: DeviceConfigurationWhereInput | null
  }

  export type LocationsListRelationFilter = {
    every?: LocationsWhereInput
    some?: LocationsWhereInput
    none?: LocationsWhereInput
  }

  export type RecordListRelationFilter = {
    every?: RecordWhereInput
    some?: RecordWhereInput
    none?: RecordWhereInput
  }

  export type UserNullableScalarRelationFilter = {
    is?: UserWhereInput | null
    isNot?: UserWhereInput | null
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type ConnectionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type LocationsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type RecordOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type DeviceCountOrderByAggregateInput = {
    id_device?: SortOrder
    name_device?: SortOrder
    status_d?: SortOrder
    update_date?: SortOrder
    userId?: SortOrder
  }

  export type DeviceMaxOrderByAggregateInput = {
    id_device?: SortOrder
    name_device?: SortOrder
    status_d?: SortOrder
    update_date?: SortOrder
    userId?: SortOrder
  }

  export type DeviceMinOrderByAggregateInput = {
    id_device?: SortOrder
    name_device?: SortOrder
    status_d?: SortOrder
    update_date?: SortOrder
    userId?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type DeviceListRelationFilter = {
    every?: DeviceWhereInput
    some?: DeviceWhereInput
    none?: DeviceWhereInput
  }

  export type JwtTokenListRelationFilter = {
    every?: JwtTokenWhereInput
    some?: JwtTokenWhereInput
    none?: JwtTokenWhereInput
  }

  export type DeviceOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type JwtTokenOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    username?: SortOrder
    phone_number?: SortOrder
    email?: SortOrder
    password_u?: SortOrder
    creation_date?: SortOrder
    update_date?: SortOrder
    jwt_version?: SortOrder
    last_login?: SortOrder
    role?: SortOrder
  }

  export type UserAvgOrderByAggregateInput = {
    jwt_version?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    username?: SortOrder
    phone_number?: SortOrder
    email?: SortOrder
    password_u?: SortOrder
    creation_date?: SortOrder
    update_date?: SortOrder
    jwt_version?: SortOrder
    last_login?: SortOrder
    role?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    username?: SortOrder
    phone_number?: SortOrder
    email?: SortOrder
    password_u?: SortOrder
    creation_date?: SortOrder
    update_date?: SortOrder
    jwt_version?: SortOrder
    last_login?: SortOrder
    role?: SortOrder
  }

  export type UserSumOrderByAggregateInput = {
    jwt_version?: SortOrder
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type JwtActivityListRelationFilter = {
    every?: JwtActivityWhereInput
    some?: JwtActivityWhereInput
    none?: JwtActivityWhereInput
  }

  export type JwtActivityOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type JwtTokenCountOrderByAggregateInput = {
    id?: SortOrder
    tokenHash?: SortOrder
    userId?: SortOrder
    tokenType?: SortOrder
    createdAt?: SortOrder
    expiresAt?: SortOrder
    lastUsedAt?: SortOrder
    useCount?: SortOrder
    maxUses?: SortOrder
    isRevoked?: SortOrder
  }

  export type JwtTokenAvgOrderByAggregateInput = {
    useCount?: SortOrder
    maxUses?: SortOrder
  }

  export type JwtTokenMaxOrderByAggregateInput = {
    id?: SortOrder
    tokenHash?: SortOrder
    userId?: SortOrder
    tokenType?: SortOrder
    createdAt?: SortOrder
    expiresAt?: SortOrder
    lastUsedAt?: SortOrder
    useCount?: SortOrder
    maxUses?: SortOrder
    isRevoked?: SortOrder
  }

  export type JwtTokenMinOrderByAggregateInput = {
    id?: SortOrder
    tokenHash?: SortOrder
    userId?: SortOrder
    tokenType?: SortOrder
    createdAt?: SortOrder
    expiresAt?: SortOrder
    lastUsedAt?: SortOrder
    useCount?: SortOrder
    maxUses?: SortOrder
    isRevoked?: SortOrder
  }

  export type JwtTokenSumOrderByAggregateInput = {
    useCount?: SortOrder
    maxUses?: SortOrder
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type JwtTokenScalarRelationFilter = {
    is?: JwtTokenWhereInput
    isNot?: JwtTokenWhereInput
  }

  export type JwtActivityCountOrderByAggregateInput = {
    id?: SortOrder
    tokenId?: SortOrder
    action?: SortOrder
    performedAt?: SortOrder
  }

  export type JwtActivityAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type JwtActivityMaxOrderByAggregateInput = {
    id?: SortOrder
    tokenId?: SortOrder
    action?: SortOrder
    performedAt?: SortOrder
  }

  export type JwtActivityMinOrderByAggregateInput = {
    id?: SortOrder
    tokenId?: SortOrder
    action?: SortOrder
    performedAt?: SortOrder
  }

  export type JwtActivitySumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type FloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type DeviceScalarRelationFilter = {
    is?: DeviceWhereInput
    isNot?: DeviceWhereInput
  }

  export type LocationsCountOrderByAggregateInput = {
    id?: SortOrder
    id_device?: SortOrder
    longitude?: SortOrder
    latitude?: SortOrder
    date_l?: SortOrder
  }

  export type LocationsAvgOrderByAggregateInput = {
    id?: SortOrder
    longitude?: SortOrder
    latitude?: SortOrder
  }

  export type LocationsMaxOrderByAggregateInput = {
    id?: SortOrder
    id_device?: SortOrder
    longitude?: SortOrder
    latitude?: SortOrder
    date_l?: SortOrder
  }

  export type LocationsMinOrderByAggregateInput = {
    id?: SortOrder
    id_device?: SortOrder
    longitude?: SortOrder
    latitude?: SortOrder
    date_l?: SortOrder
  }

  export type LocationsSumOrderByAggregateInput = {
    id?: SortOrder
    longitude?: SortOrder
    latitude?: SortOrder
  }

  export type FloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type DeviceConfigurationCountOrderByAggregateInput = {
    id?: SortOrder
    id_device?: SortOrder
    device_name?: SortOrder
    mac_address?: SortOrder
    channel?: SortOrder
  }

  export type DeviceConfigurationAvgOrderByAggregateInput = {
    id?: SortOrder
    channel?: SortOrder
  }

  export type DeviceConfigurationMaxOrderByAggregateInput = {
    id?: SortOrder
    id_device?: SortOrder
    device_name?: SortOrder
    mac_address?: SortOrder
    channel?: SortOrder
  }

  export type DeviceConfigurationMinOrderByAggregateInput = {
    id?: SortOrder
    id_device?: SortOrder
    device_name?: SortOrder
    mac_address?: SortOrder
    channel?: SortOrder
  }

  export type DeviceConfigurationSumOrderByAggregateInput = {
    id?: SortOrder
    channel?: SortOrder
  }

  export type ConnectionCountOrderByAggregateInput = {
    id?: SortOrder
    id_usuario?: SortOrder
    name_usuario_invitado?: SortOrder
    id_device?: SortOrder
    type_connection?: SortOrder
  }

  export type ConnectionAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type ConnectionMaxOrderByAggregateInput = {
    id?: SortOrder
    id_usuario?: SortOrder
    name_usuario_invitado?: SortOrder
    id_device?: SortOrder
    type_connection?: SortOrder
  }

  export type ConnectionMinOrderByAggregateInput = {
    id?: SortOrder
    id_usuario?: SortOrder
    name_usuario_invitado?: SortOrder
    id_device?: SortOrder
    type_connection?: SortOrder
  }

  export type ConnectionSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type RecordCountOrderByAggregateInput = {
    id?: SortOrder
    id_device?: SortOrder
    longitude?: SortOrder
    latitude?: SortOrder
    date_r?: SortOrder
  }

  export type RecordAvgOrderByAggregateInput = {
    id?: SortOrder
    longitude?: SortOrder
    latitude?: SortOrder
  }

  export type RecordMaxOrderByAggregateInput = {
    id?: SortOrder
    id_device?: SortOrder
    longitude?: SortOrder
    latitude?: SortOrder
    date_r?: SortOrder
  }

  export type RecordMinOrderByAggregateInput = {
    id?: SortOrder
    id_device?: SortOrder
    longitude?: SortOrder
    latitude?: SortOrder
    date_r?: SortOrder
  }

  export type RecordSumOrderByAggregateInput = {
    id?: SortOrder
    longitude?: SortOrder
    latitude?: SortOrder
  }

  export type ConnectionCreateNestedManyWithoutDeviceInput = {
    create?: XOR<ConnectionCreateWithoutDeviceInput, ConnectionUncheckedCreateWithoutDeviceInput> | ConnectionCreateWithoutDeviceInput[] | ConnectionUncheckedCreateWithoutDeviceInput[]
    connectOrCreate?: ConnectionCreateOrConnectWithoutDeviceInput | ConnectionCreateOrConnectWithoutDeviceInput[]
    createMany?: ConnectionCreateManyDeviceInputEnvelope
    connect?: ConnectionWhereUniqueInput | ConnectionWhereUniqueInput[]
  }

  export type DeviceConfigurationCreateNestedOneWithoutDeviceInput = {
    create?: XOR<DeviceConfigurationCreateWithoutDeviceInput, DeviceConfigurationUncheckedCreateWithoutDeviceInput>
    connectOrCreate?: DeviceConfigurationCreateOrConnectWithoutDeviceInput
    connect?: DeviceConfigurationWhereUniqueInput
  }

  export type LocationsCreateNestedManyWithoutDeviceInput = {
    create?: XOR<LocationsCreateWithoutDeviceInput, LocationsUncheckedCreateWithoutDeviceInput> | LocationsCreateWithoutDeviceInput[] | LocationsUncheckedCreateWithoutDeviceInput[]
    connectOrCreate?: LocationsCreateOrConnectWithoutDeviceInput | LocationsCreateOrConnectWithoutDeviceInput[]
    createMany?: LocationsCreateManyDeviceInputEnvelope
    connect?: LocationsWhereUniqueInput | LocationsWhereUniqueInput[]
  }

  export type RecordCreateNestedManyWithoutDeviceInput = {
    create?: XOR<RecordCreateWithoutDeviceInput, RecordUncheckedCreateWithoutDeviceInput> | RecordCreateWithoutDeviceInput[] | RecordUncheckedCreateWithoutDeviceInput[]
    connectOrCreate?: RecordCreateOrConnectWithoutDeviceInput | RecordCreateOrConnectWithoutDeviceInput[]
    createMany?: RecordCreateManyDeviceInputEnvelope
    connect?: RecordWhereUniqueInput | RecordWhereUniqueInput[]
  }

  export type UserCreateNestedOneWithoutDevicesInput = {
    create?: XOR<UserCreateWithoutDevicesInput, UserUncheckedCreateWithoutDevicesInput>
    connectOrCreate?: UserCreateOrConnectWithoutDevicesInput
    connect?: UserWhereUniqueInput
  }

  export type ConnectionUncheckedCreateNestedManyWithoutDeviceInput = {
    create?: XOR<ConnectionCreateWithoutDeviceInput, ConnectionUncheckedCreateWithoutDeviceInput> | ConnectionCreateWithoutDeviceInput[] | ConnectionUncheckedCreateWithoutDeviceInput[]
    connectOrCreate?: ConnectionCreateOrConnectWithoutDeviceInput | ConnectionCreateOrConnectWithoutDeviceInput[]
    createMany?: ConnectionCreateManyDeviceInputEnvelope
    connect?: ConnectionWhereUniqueInput | ConnectionWhereUniqueInput[]
  }

  export type DeviceConfigurationUncheckedCreateNestedOneWithoutDeviceInput = {
    create?: XOR<DeviceConfigurationCreateWithoutDeviceInput, DeviceConfigurationUncheckedCreateWithoutDeviceInput>
    connectOrCreate?: DeviceConfigurationCreateOrConnectWithoutDeviceInput
    connect?: DeviceConfigurationWhereUniqueInput
  }

  export type LocationsUncheckedCreateNestedManyWithoutDeviceInput = {
    create?: XOR<LocationsCreateWithoutDeviceInput, LocationsUncheckedCreateWithoutDeviceInput> | LocationsCreateWithoutDeviceInput[] | LocationsUncheckedCreateWithoutDeviceInput[]
    connectOrCreate?: LocationsCreateOrConnectWithoutDeviceInput | LocationsCreateOrConnectWithoutDeviceInput[]
    createMany?: LocationsCreateManyDeviceInputEnvelope
    connect?: LocationsWhereUniqueInput | LocationsWhereUniqueInput[]
  }

  export type RecordUncheckedCreateNestedManyWithoutDeviceInput = {
    create?: XOR<RecordCreateWithoutDeviceInput, RecordUncheckedCreateWithoutDeviceInput> | RecordCreateWithoutDeviceInput[] | RecordUncheckedCreateWithoutDeviceInput[]
    connectOrCreate?: RecordCreateOrConnectWithoutDeviceInput | RecordCreateOrConnectWithoutDeviceInput[]
    createMany?: RecordCreateManyDeviceInputEnvelope
    connect?: RecordWhereUniqueInput | RecordWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type ConnectionUpdateManyWithoutDeviceNestedInput = {
    create?: XOR<ConnectionCreateWithoutDeviceInput, ConnectionUncheckedCreateWithoutDeviceInput> | ConnectionCreateWithoutDeviceInput[] | ConnectionUncheckedCreateWithoutDeviceInput[]
    connectOrCreate?: ConnectionCreateOrConnectWithoutDeviceInput | ConnectionCreateOrConnectWithoutDeviceInput[]
    upsert?: ConnectionUpsertWithWhereUniqueWithoutDeviceInput | ConnectionUpsertWithWhereUniqueWithoutDeviceInput[]
    createMany?: ConnectionCreateManyDeviceInputEnvelope
    set?: ConnectionWhereUniqueInput | ConnectionWhereUniqueInput[]
    disconnect?: ConnectionWhereUniqueInput | ConnectionWhereUniqueInput[]
    delete?: ConnectionWhereUniqueInput | ConnectionWhereUniqueInput[]
    connect?: ConnectionWhereUniqueInput | ConnectionWhereUniqueInput[]
    update?: ConnectionUpdateWithWhereUniqueWithoutDeviceInput | ConnectionUpdateWithWhereUniqueWithoutDeviceInput[]
    updateMany?: ConnectionUpdateManyWithWhereWithoutDeviceInput | ConnectionUpdateManyWithWhereWithoutDeviceInput[]
    deleteMany?: ConnectionScalarWhereInput | ConnectionScalarWhereInput[]
  }

  export type DeviceConfigurationUpdateOneWithoutDeviceNestedInput = {
    create?: XOR<DeviceConfigurationCreateWithoutDeviceInput, DeviceConfigurationUncheckedCreateWithoutDeviceInput>
    connectOrCreate?: DeviceConfigurationCreateOrConnectWithoutDeviceInput
    upsert?: DeviceConfigurationUpsertWithoutDeviceInput
    disconnect?: DeviceConfigurationWhereInput | boolean
    delete?: DeviceConfigurationWhereInput | boolean
    connect?: DeviceConfigurationWhereUniqueInput
    update?: XOR<XOR<DeviceConfigurationUpdateToOneWithWhereWithoutDeviceInput, DeviceConfigurationUpdateWithoutDeviceInput>, DeviceConfigurationUncheckedUpdateWithoutDeviceInput>
  }

  export type LocationsUpdateManyWithoutDeviceNestedInput = {
    create?: XOR<LocationsCreateWithoutDeviceInput, LocationsUncheckedCreateWithoutDeviceInput> | LocationsCreateWithoutDeviceInput[] | LocationsUncheckedCreateWithoutDeviceInput[]
    connectOrCreate?: LocationsCreateOrConnectWithoutDeviceInput | LocationsCreateOrConnectWithoutDeviceInput[]
    upsert?: LocationsUpsertWithWhereUniqueWithoutDeviceInput | LocationsUpsertWithWhereUniqueWithoutDeviceInput[]
    createMany?: LocationsCreateManyDeviceInputEnvelope
    set?: LocationsWhereUniqueInput | LocationsWhereUniqueInput[]
    disconnect?: LocationsWhereUniqueInput | LocationsWhereUniqueInput[]
    delete?: LocationsWhereUniqueInput | LocationsWhereUniqueInput[]
    connect?: LocationsWhereUniqueInput | LocationsWhereUniqueInput[]
    update?: LocationsUpdateWithWhereUniqueWithoutDeviceInput | LocationsUpdateWithWhereUniqueWithoutDeviceInput[]
    updateMany?: LocationsUpdateManyWithWhereWithoutDeviceInput | LocationsUpdateManyWithWhereWithoutDeviceInput[]
    deleteMany?: LocationsScalarWhereInput | LocationsScalarWhereInput[]
  }

  export type RecordUpdateManyWithoutDeviceNestedInput = {
    create?: XOR<RecordCreateWithoutDeviceInput, RecordUncheckedCreateWithoutDeviceInput> | RecordCreateWithoutDeviceInput[] | RecordUncheckedCreateWithoutDeviceInput[]
    connectOrCreate?: RecordCreateOrConnectWithoutDeviceInput | RecordCreateOrConnectWithoutDeviceInput[]
    upsert?: RecordUpsertWithWhereUniqueWithoutDeviceInput | RecordUpsertWithWhereUniqueWithoutDeviceInput[]
    createMany?: RecordCreateManyDeviceInputEnvelope
    set?: RecordWhereUniqueInput | RecordWhereUniqueInput[]
    disconnect?: RecordWhereUniqueInput | RecordWhereUniqueInput[]
    delete?: RecordWhereUniqueInput | RecordWhereUniqueInput[]
    connect?: RecordWhereUniqueInput | RecordWhereUniqueInput[]
    update?: RecordUpdateWithWhereUniqueWithoutDeviceInput | RecordUpdateWithWhereUniqueWithoutDeviceInput[]
    updateMany?: RecordUpdateManyWithWhereWithoutDeviceInput | RecordUpdateManyWithWhereWithoutDeviceInput[]
    deleteMany?: RecordScalarWhereInput | RecordScalarWhereInput[]
  }

  export type UserUpdateOneWithoutDevicesNestedInput = {
    create?: XOR<UserCreateWithoutDevicesInput, UserUncheckedCreateWithoutDevicesInput>
    connectOrCreate?: UserCreateOrConnectWithoutDevicesInput
    upsert?: UserUpsertWithoutDevicesInput
    disconnect?: UserWhereInput | boolean
    delete?: UserWhereInput | boolean
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutDevicesInput, UserUpdateWithoutDevicesInput>, UserUncheckedUpdateWithoutDevicesInput>
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type ConnectionUncheckedUpdateManyWithoutDeviceNestedInput = {
    create?: XOR<ConnectionCreateWithoutDeviceInput, ConnectionUncheckedCreateWithoutDeviceInput> | ConnectionCreateWithoutDeviceInput[] | ConnectionUncheckedCreateWithoutDeviceInput[]
    connectOrCreate?: ConnectionCreateOrConnectWithoutDeviceInput | ConnectionCreateOrConnectWithoutDeviceInput[]
    upsert?: ConnectionUpsertWithWhereUniqueWithoutDeviceInput | ConnectionUpsertWithWhereUniqueWithoutDeviceInput[]
    createMany?: ConnectionCreateManyDeviceInputEnvelope
    set?: ConnectionWhereUniqueInput | ConnectionWhereUniqueInput[]
    disconnect?: ConnectionWhereUniqueInput | ConnectionWhereUniqueInput[]
    delete?: ConnectionWhereUniqueInput | ConnectionWhereUniqueInput[]
    connect?: ConnectionWhereUniqueInput | ConnectionWhereUniqueInput[]
    update?: ConnectionUpdateWithWhereUniqueWithoutDeviceInput | ConnectionUpdateWithWhereUniqueWithoutDeviceInput[]
    updateMany?: ConnectionUpdateManyWithWhereWithoutDeviceInput | ConnectionUpdateManyWithWhereWithoutDeviceInput[]
    deleteMany?: ConnectionScalarWhereInput | ConnectionScalarWhereInput[]
  }

  export type DeviceConfigurationUncheckedUpdateOneWithoutDeviceNestedInput = {
    create?: XOR<DeviceConfigurationCreateWithoutDeviceInput, DeviceConfigurationUncheckedCreateWithoutDeviceInput>
    connectOrCreate?: DeviceConfigurationCreateOrConnectWithoutDeviceInput
    upsert?: DeviceConfigurationUpsertWithoutDeviceInput
    disconnect?: DeviceConfigurationWhereInput | boolean
    delete?: DeviceConfigurationWhereInput | boolean
    connect?: DeviceConfigurationWhereUniqueInput
    update?: XOR<XOR<DeviceConfigurationUpdateToOneWithWhereWithoutDeviceInput, DeviceConfigurationUpdateWithoutDeviceInput>, DeviceConfigurationUncheckedUpdateWithoutDeviceInput>
  }

  export type LocationsUncheckedUpdateManyWithoutDeviceNestedInput = {
    create?: XOR<LocationsCreateWithoutDeviceInput, LocationsUncheckedCreateWithoutDeviceInput> | LocationsCreateWithoutDeviceInput[] | LocationsUncheckedCreateWithoutDeviceInput[]
    connectOrCreate?: LocationsCreateOrConnectWithoutDeviceInput | LocationsCreateOrConnectWithoutDeviceInput[]
    upsert?: LocationsUpsertWithWhereUniqueWithoutDeviceInput | LocationsUpsertWithWhereUniqueWithoutDeviceInput[]
    createMany?: LocationsCreateManyDeviceInputEnvelope
    set?: LocationsWhereUniqueInput | LocationsWhereUniqueInput[]
    disconnect?: LocationsWhereUniqueInput | LocationsWhereUniqueInput[]
    delete?: LocationsWhereUniqueInput | LocationsWhereUniqueInput[]
    connect?: LocationsWhereUniqueInput | LocationsWhereUniqueInput[]
    update?: LocationsUpdateWithWhereUniqueWithoutDeviceInput | LocationsUpdateWithWhereUniqueWithoutDeviceInput[]
    updateMany?: LocationsUpdateManyWithWhereWithoutDeviceInput | LocationsUpdateManyWithWhereWithoutDeviceInput[]
    deleteMany?: LocationsScalarWhereInput | LocationsScalarWhereInput[]
  }

  export type RecordUncheckedUpdateManyWithoutDeviceNestedInput = {
    create?: XOR<RecordCreateWithoutDeviceInput, RecordUncheckedCreateWithoutDeviceInput> | RecordCreateWithoutDeviceInput[] | RecordUncheckedCreateWithoutDeviceInput[]
    connectOrCreate?: RecordCreateOrConnectWithoutDeviceInput | RecordCreateOrConnectWithoutDeviceInput[]
    upsert?: RecordUpsertWithWhereUniqueWithoutDeviceInput | RecordUpsertWithWhereUniqueWithoutDeviceInput[]
    createMany?: RecordCreateManyDeviceInputEnvelope
    set?: RecordWhereUniqueInput | RecordWhereUniqueInput[]
    disconnect?: RecordWhereUniqueInput | RecordWhereUniqueInput[]
    delete?: RecordWhereUniqueInput | RecordWhereUniqueInput[]
    connect?: RecordWhereUniqueInput | RecordWhereUniqueInput[]
    update?: RecordUpdateWithWhereUniqueWithoutDeviceInput | RecordUpdateWithWhereUniqueWithoutDeviceInput[]
    updateMany?: RecordUpdateManyWithWhereWithoutDeviceInput | RecordUpdateManyWithWhereWithoutDeviceInput[]
    deleteMany?: RecordScalarWhereInput | RecordScalarWhereInput[]
  }

  export type ConnectionCreateNestedManyWithoutUserInput = {
    create?: XOR<ConnectionCreateWithoutUserInput, ConnectionUncheckedCreateWithoutUserInput> | ConnectionCreateWithoutUserInput[] | ConnectionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ConnectionCreateOrConnectWithoutUserInput | ConnectionCreateOrConnectWithoutUserInput[]
    createMany?: ConnectionCreateManyUserInputEnvelope
    connect?: ConnectionWhereUniqueInput | ConnectionWhereUniqueInput[]
  }

  export type DeviceCreateNestedManyWithoutUserInput = {
    create?: XOR<DeviceCreateWithoutUserInput, DeviceUncheckedCreateWithoutUserInput> | DeviceCreateWithoutUserInput[] | DeviceUncheckedCreateWithoutUserInput[]
    connectOrCreate?: DeviceCreateOrConnectWithoutUserInput | DeviceCreateOrConnectWithoutUserInput[]
    createMany?: DeviceCreateManyUserInputEnvelope
    connect?: DeviceWhereUniqueInput | DeviceWhereUniqueInput[]
  }

  export type JwtTokenCreateNestedManyWithoutUserInput = {
    create?: XOR<JwtTokenCreateWithoutUserInput, JwtTokenUncheckedCreateWithoutUserInput> | JwtTokenCreateWithoutUserInput[] | JwtTokenUncheckedCreateWithoutUserInput[]
    connectOrCreate?: JwtTokenCreateOrConnectWithoutUserInput | JwtTokenCreateOrConnectWithoutUserInput[]
    createMany?: JwtTokenCreateManyUserInputEnvelope
    connect?: JwtTokenWhereUniqueInput | JwtTokenWhereUniqueInput[]
  }

  export type ConnectionUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<ConnectionCreateWithoutUserInput, ConnectionUncheckedCreateWithoutUserInput> | ConnectionCreateWithoutUserInput[] | ConnectionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ConnectionCreateOrConnectWithoutUserInput | ConnectionCreateOrConnectWithoutUserInput[]
    createMany?: ConnectionCreateManyUserInputEnvelope
    connect?: ConnectionWhereUniqueInput | ConnectionWhereUniqueInput[]
  }

  export type DeviceUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<DeviceCreateWithoutUserInput, DeviceUncheckedCreateWithoutUserInput> | DeviceCreateWithoutUserInput[] | DeviceUncheckedCreateWithoutUserInput[]
    connectOrCreate?: DeviceCreateOrConnectWithoutUserInput | DeviceCreateOrConnectWithoutUserInput[]
    createMany?: DeviceCreateManyUserInputEnvelope
    connect?: DeviceWhereUniqueInput | DeviceWhereUniqueInput[]
  }

  export type JwtTokenUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<JwtTokenCreateWithoutUserInput, JwtTokenUncheckedCreateWithoutUserInput> | JwtTokenCreateWithoutUserInput[] | JwtTokenUncheckedCreateWithoutUserInput[]
    connectOrCreate?: JwtTokenCreateOrConnectWithoutUserInput | JwtTokenCreateOrConnectWithoutUserInput[]
    createMany?: JwtTokenCreateManyUserInputEnvelope
    connect?: JwtTokenWhereUniqueInput | JwtTokenWhereUniqueInput[]
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type ConnectionUpdateManyWithoutUserNestedInput = {
    create?: XOR<ConnectionCreateWithoutUserInput, ConnectionUncheckedCreateWithoutUserInput> | ConnectionCreateWithoutUserInput[] | ConnectionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ConnectionCreateOrConnectWithoutUserInput | ConnectionCreateOrConnectWithoutUserInput[]
    upsert?: ConnectionUpsertWithWhereUniqueWithoutUserInput | ConnectionUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: ConnectionCreateManyUserInputEnvelope
    set?: ConnectionWhereUniqueInput | ConnectionWhereUniqueInput[]
    disconnect?: ConnectionWhereUniqueInput | ConnectionWhereUniqueInput[]
    delete?: ConnectionWhereUniqueInput | ConnectionWhereUniqueInput[]
    connect?: ConnectionWhereUniqueInput | ConnectionWhereUniqueInput[]
    update?: ConnectionUpdateWithWhereUniqueWithoutUserInput | ConnectionUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: ConnectionUpdateManyWithWhereWithoutUserInput | ConnectionUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: ConnectionScalarWhereInput | ConnectionScalarWhereInput[]
  }

  export type DeviceUpdateManyWithoutUserNestedInput = {
    create?: XOR<DeviceCreateWithoutUserInput, DeviceUncheckedCreateWithoutUserInput> | DeviceCreateWithoutUserInput[] | DeviceUncheckedCreateWithoutUserInput[]
    connectOrCreate?: DeviceCreateOrConnectWithoutUserInput | DeviceCreateOrConnectWithoutUserInput[]
    upsert?: DeviceUpsertWithWhereUniqueWithoutUserInput | DeviceUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: DeviceCreateManyUserInputEnvelope
    set?: DeviceWhereUniqueInput | DeviceWhereUniqueInput[]
    disconnect?: DeviceWhereUniqueInput | DeviceWhereUniqueInput[]
    delete?: DeviceWhereUniqueInput | DeviceWhereUniqueInput[]
    connect?: DeviceWhereUniqueInput | DeviceWhereUniqueInput[]
    update?: DeviceUpdateWithWhereUniqueWithoutUserInput | DeviceUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: DeviceUpdateManyWithWhereWithoutUserInput | DeviceUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: DeviceScalarWhereInput | DeviceScalarWhereInput[]
  }

  export type JwtTokenUpdateManyWithoutUserNestedInput = {
    create?: XOR<JwtTokenCreateWithoutUserInput, JwtTokenUncheckedCreateWithoutUserInput> | JwtTokenCreateWithoutUserInput[] | JwtTokenUncheckedCreateWithoutUserInput[]
    connectOrCreate?: JwtTokenCreateOrConnectWithoutUserInput | JwtTokenCreateOrConnectWithoutUserInput[]
    upsert?: JwtTokenUpsertWithWhereUniqueWithoutUserInput | JwtTokenUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: JwtTokenCreateManyUserInputEnvelope
    set?: JwtTokenWhereUniqueInput | JwtTokenWhereUniqueInput[]
    disconnect?: JwtTokenWhereUniqueInput | JwtTokenWhereUniqueInput[]
    delete?: JwtTokenWhereUniqueInput | JwtTokenWhereUniqueInput[]
    connect?: JwtTokenWhereUniqueInput | JwtTokenWhereUniqueInput[]
    update?: JwtTokenUpdateWithWhereUniqueWithoutUserInput | JwtTokenUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: JwtTokenUpdateManyWithWhereWithoutUserInput | JwtTokenUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: JwtTokenScalarWhereInput | JwtTokenScalarWhereInput[]
  }

  export type ConnectionUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<ConnectionCreateWithoutUserInput, ConnectionUncheckedCreateWithoutUserInput> | ConnectionCreateWithoutUserInput[] | ConnectionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ConnectionCreateOrConnectWithoutUserInput | ConnectionCreateOrConnectWithoutUserInput[]
    upsert?: ConnectionUpsertWithWhereUniqueWithoutUserInput | ConnectionUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: ConnectionCreateManyUserInputEnvelope
    set?: ConnectionWhereUniqueInput | ConnectionWhereUniqueInput[]
    disconnect?: ConnectionWhereUniqueInput | ConnectionWhereUniqueInput[]
    delete?: ConnectionWhereUniqueInput | ConnectionWhereUniqueInput[]
    connect?: ConnectionWhereUniqueInput | ConnectionWhereUniqueInput[]
    update?: ConnectionUpdateWithWhereUniqueWithoutUserInput | ConnectionUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: ConnectionUpdateManyWithWhereWithoutUserInput | ConnectionUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: ConnectionScalarWhereInput | ConnectionScalarWhereInput[]
  }

  export type DeviceUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<DeviceCreateWithoutUserInput, DeviceUncheckedCreateWithoutUserInput> | DeviceCreateWithoutUserInput[] | DeviceUncheckedCreateWithoutUserInput[]
    connectOrCreate?: DeviceCreateOrConnectWithoutUserInput | DeviceCreateOrConnectWithoutUserInput[]
    upsert?: DeviceUpsertWithWhereUniqueWithoutUserInput | DeviceUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: DeviceCreateManyUserInputEnvelope
    set?: DeviceWhereUniqueInput | DeviceWhereUniqueInput[]
    disconnect?: DeviceWhereUniqueInput | DeviceWhereUniqueInput[]
    delete?: DeviceWhereUniqueInput | DeviceWhereUniqueInput[]
    connect?: DeviceWhereUniqueInput | DeviceWhereUniqueInput[]
    update?: DeviceUpdateWithWhereUniqueWithoutUserInput | DeviceUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: DeviceUpdateManyWithWhereWithoutUserInput | DeviceUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: DeviceScalarWhereInput | DeviceScalarWhereInput[]
  }

  export type JwtTokenUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<JwtTokenCreateWithoutUserInput, JwtTokenUncheckedCreateWithoutUserInput> | JwtTokenCreateWithoutUserInput[] | JwtTokenUncheckedCreateWithoutUserInput[]
    connectOrCreate?: JwtTokenCreateOrConnectWithoutUserInput | JwtTokenCreateOrConnectWithoutUserInput[]
    upsert?: JwtTokenUpsertWithWhereUniqueWithoutUserInput | JwtTokenUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: JwtTokenCreateManyUserInputEnvelope
    set?: JwtTokenWhereUniqueInput | JwtTokenWhereUniqueInput[]
    disconnect?: JwtTokenWhereUniqueInput | JwtTokenWhereUniqueInput[]
    delete?: JwtTokenWhereUniqueInput | JwtTokenWhereUniqueInput[]
    connect?: JwtTokenWhereUniqueInput | JwtTokenWhereUniqueInput[]
    update?: JwtTokenUpdateWithWhereUniqueWithoutUserInput | JwtTokenUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: JwtTokenUpdateManyWithWhereWithoutUserInput | JwtTokenUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: JwtTokenScalarWhereInput | JwtTokenScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutJwtTokensInput = {
    create?: XOR<UserCreateWithoutJwtTokensInput, UserUncheckedCreateWithoutJwtTokensInput>
    connectOrCreate?: UserCreateOrConnectWithoutJwtTokensInput
    connect?: UserWhereUniqueInput
  }

  export type JwtActivityCreateNestedManyWithoutJwtTokenInput = {
    create?: XOR<JwtActivityCreateWithoutJwtTokenInput, JwtActivityUncheckedCreateWithoutJwtTokenInput> | JwtActivityCreateWithoutJwtTokenInput[] | JwtActivityUncheckedCreateWithoutJwtTokenInput[]
    connectOrCreate?: JwtActivityCreateOrConnectWithoutJwtTokenInput | JwtActivityCreateOrConnectWithoutJwtTokenInput[]
    createMany?: JwtActivityCreateManyJwtTokenInputEnvelope
    connect?: JwtActivityWhereUniqueInput | JwtActivityWhereUniqueInput[]
  }

  export type JwtActivityUncheckedCreateNestedManyWithoutJwtTokenInput = {
    create?: XOR<JwtActivityCreateWithoutJwtTokenInput, JwtActivityUncheckedCreateWithoutJwtTokenInput> | JwtActivityCreateWithoutJwtTokenInput[] | JwtActivityUncheckedCreateWithoutJwtTokenInput[]
    connectOrCreate?: JwtActivityCreateOrConnectWithoutJwtTokenInput | JwtActivityCreateOrConnectWithoutJwtTokenInput[]
    createMany?: JwtActivityCreateManyJwtTokenInputEnvelope
    connect?: JwtActivityWhereUniqueInput | JwtActivityWhereUniqueInput[]
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type UserUpdateOneRequiredWithoutJwtTokensNestedInput = {
    create?: XOR<UserCreateWithoutJwtTokensInput, UserUncheckedCreateWithoutJwtTokensInput>
    connectOrCreate?: UserCreateOrConnectWithoutJwtTokensInput
    upsert?: UserUpsertWithoutJwtTokensInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutJwtTokensInput, UserUpdateWithoutJwtTokensInput>, UserUncheckedUpdateWithoutJwtTokensInput>
  }

  export type JwtActivityUpdateManyWithoutJwtTokenNestedInput = {
    create?: XOR<JwtActivityCreateWithoutJwtTokenInput, JwtActivityUncheckedCreateWithoutJwtTokenInput> | JwtActivityCreateWithoutJwtTokenInput[] | JwtActivityUncheckedCreateWithoutJwtTokenInput[]
    connectOrCreate?: JwtActivityCreateOrConnectWithoutJwtTokenInput | JwtActivityCreateOrConnectWithoutJwtTokenInput[]
    upsert?: JwtActivityUpsertWithWhereUniqueWithoutJwtTokenInput | JwtActivityUpsertWithWhereUniqueWithoutJwtTokenInput[]
    createMany?: JwtActivityCreateManyJwtTokenInputEnvelope
    set?: JwtActivityWhereUniqueInput | JwtActivityWhereUniqueInput[]
    disconnect?: JwtActivityWhereUniqueInput | JwtActivityWhereUniqueInput[]
    delete?: JwtActivityWhereUniqueInput | JwtActivityWhereUniqueInput[]
    connect?: JwtActivityWhereUniqueInput | JwtActivityWhereUniqueInput[]
    update?: JwtActivityUpdateWithWhereUniqueWithoutJwtTokenInput | JwtActivityUpdateWithWhereUniqueWithoutJwtTokenInput[]
    updateMany?: JwtActivityUpdateManyWithWhereWithoutJwtTokenInput | JwtActivityUpdateManyWithWhereWithoutJwtTokenInput[]
    deleteMany?: JwtActivityScalarWhereInput | JwtActivityScalarWhereInput[]
  }

  export type JwtActivityUncheckedUpdateManyWithoutJwtTokenNestedInput = {
    create?: XOR<JwtActivityCreateWithoutJwtTokenInput, JwtActivityUncheckedCreateWithoutJwtTokenInput> | JwtActivityCreateWithoutJwtTokenInput[] | JwtActivityUncheckedCreateWithoutJwtTokenInput[]
    connectOrCreate?: JwtActivityCreateOrConnectWithoutJwtTokenInput | JwtActivityCreateOrConnectWithoutJwtTokenInput[]
    upsert?: JwtActivityUpsertWithWhereUniqueWithoutJwtTokenInput | JwtActivityUpsertWithWhereUniqueWithoutJwtTokenInput[]
    createMany?: JwtActivityCreateManyJwtTokenInputEnvelope
    set?: JwtActivityWhereUniqueInput | JwtActivityWhereUniqueInput[]
    disconnect?: JwtActivityWhereUniqueInput | JwtActivityWhereUniqueInput[]
    delete?: JwtActivityWhereUniqueInput | JwtActivityWhereUniqueInput[]
    connect?: JwtActivityWhereUniqueInput | JwtActivityWhereUniqueInput[]
    update?: JwtActivityUpdateWithWhereUniqueWithoutJwtTokenInput | JwtActivityUpdateWithWhereUniqueWithoutJwtTokenInput[]
    updateMany?: JwtActivityUpdateManyWithWhereWithoutJwtTokenInput | JwtActivityUpdateManyWithWhereWithoutJwtTokenInput[]
    deleteMany?: JwtActivityScalarWhereInput | JwtActivityScalarWhereInput[]
  }

  export type JwtTokenCreateNestedOneWithoutActivitiesInput = {
    create?: XOR<JwtTokenCreateWithoutActivitiesInput, JwtTokenUncheckedCreateWithoutActivitiesInput>
    connectOrCreate?: JwtTokenCreateOrConnectWithoutActivitiesInput
    connect?: JwtTokenWhereUniqueInput
  }

  export type JwtTokenUpdateOneRequiredWithoutActivitiesNestedInput = {
    create?: XOR<JwtTokenCreateWithoutActivitiesInput, JwtTokenUncheckedCreateWithoutActivitiesInput>
    connectOrCreate?: JwtTokenCreateOrConnectWithoutActivitiesInput
    upsert?: JwtTokenUpsertWithoutActivitiesInput
    connect?: JwtTokenWhereUniqueInput
    update?: XOR<XOR<JwtTokenUpdateToOneWithWhereWithoutActivitiesInput, JwtTokenUpdateWithoutActivitiesInput>, JwtTokenUncheckedUpdateWithoutActivitiesInput>
  }

  export type DeviceCreateNestedOneWithoutLocationsInput = {
    create?: XOR<DeviceCreateWithoutLocationsInput, DeviceUncheckedCreateWithoutLocationsInput>
    connectOrCreate?: DeviceCreateOrConnectWithoutLocationsInput
    connect?: DeviceWhereUniqueInput
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type DeviceUpdateOneRequiredWithoutLocationsNestedInput = {
    create?: XOR<DeviceCreateWithoutLocationsInput, DeviceUncheckedCreateWithoutLocationsInput>
    connectOrCreate?: DeviceCreateOrConnectWithoutLocationsInput
    upsert?: DeviceUpsertWithoutLocationsInput
    connect?: DeviceWhereUniqueInput
    update?: XOR<XOR<DeviceUpdateToOneWithWhereWithoutLocationsInput, DeviceUpdateWithoutLocationsInput>, DeviceUncheckedUpdateWithoutLocationsInput>
  }

  export type DeviceCreateNestedOneWithoutConfigurationInput = {
    create?: XOR<DeviceCreateWithoutConfigurationInput, DeviceUncheckedCreateWithoutConfigurationInput>
    connectOrCreate?: DeviceCreateOrConnectWithoutConfigurationInput
    connect?: DeviceWhereUniqueInput
  }

  export type DeviceUpdateOneRequiredWithoutConfigurationNestedInput = {
    create?: XOR<DeviceCreateWithoutConfigurationInput, DeviceUncheckedCreateWithoutConfigurationInput>
    connectOrCreate?: DeviceCreateOrConnectWithoutConfigurationInput
    upsert?: DeviceUpsertWithoutConfigurationInput
    connect?: DeviceWhereUniqueInput
    update?: XOR<XOR<DeviceUpdateToOneWithWhereWithoutConfigurationInput, DeviceUpdateWithoutConfigurationInput>, DeviceUncheckedUpdateWithoutConfigurationInput>
  }

  export type DeviceCreateNestedOneWithoutConnectionsInput = {
    create?: XOR<DeviceCreateWithoutConnectionsInput, DeviceUncheckedCreateWithoutConnectionsInput>
    connectOrCreate?: DeviceCreateOrConnectWithoutConnectionsInput
    connect?: DeviceWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutConnectionsInput = {
    create?: XOR<UserCreateWithoutConnectionsInput, UserUncheckedCreateWithoutConnectionsInput>
    connectOrCreate?: UserCreateOrConnectWithoutConnectionsInput
    connect?: UserWhereUniqueInput
  }

  export type DeviceUpdateOneRequiredWithoutConnectionsNestedInput = {
    create?: XOR<DeviceCreateWithoutConnectionsInput, DeviceUncheckedCreateWithoutConnectionsInput>
    connectOrCreate?: DeviceCreateOrConnectWithoutConnectionsInput
    upsert?: DeviceUpsertWithoutConnectionsInput
    connect?: DeviceWhereUniqueInput
    update?: XOR<XOR<DeviceUpdateToOneWithWhereWithoutConnectionsInput, DeviceUpdateWithoutConnectionsInput>, DeviceUncheckedUpdateWithoutConnectionsInput>
  }

  export type UserUpdateOneRequiredWithoutConnectionsNestedInput = {
    create?: XOR<UserCreateWithoutConnectionsInput, UserUncheckedCreateWithoutConnectionsInput>
    connectOrCreate?: UserCreateOrConnectWithoutConnectionsInput
    upsert?: UserUpsertWithoutConnectionsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutConnectionsInput, UserUpdateWithoutConnectionsInput>, UserUncheckedUpdateWithoutConnectionsInput>
  }

  export type DeviceCreateNestedOneWithoutRecordsInput = {
    create?: XOR<DeviceCreateWithoutRecordsInput, DeviceUncheckedCreateWithoutRecordsInput>
    connectOrCreate?: DeviceCreateOrConnectWithoutRecordsInput
    connect?: DeviceWhereUniqueInput
  }

  export type DeviceUpdateOneRequiredWithoutRecordsNestedInput = {
    create?: XOR<DeviceCreateWithoutRecordsInput, DeviceUncheckedCreateWithoutRecordsInput>
    connectOrCreate?: DeviceCreateOrConnectWithoutRecordsInput
    upsert?: DeviceUpsertWithoutRecordsInput
    connect?: DeviceWhereUniqueInput
    update?: XOR<XOR<DeviceUpdateToOneWithWhereWithoutRecordsInput, DeviceUpdateWithoutRecordsInput>, DeviceUncheckedUpdateWithoutRecordsInput>
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedFloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type ConnectionCreateWithoutDeviceInput = {
    name_usuario_invitado: string
    type_connection: string
    user: UserCreateNestedOneWithoutConnectionsInput
  }

  export type ConnectionUncheckedCreateWithoutDeviceInput = {
    id?: number
    id_usuario: string
    name_usuario_invitado: string
    type_connection: string
  }

  export type ConnectionCreateOrConnectWithoutDeviceInput = {
    where: ConnectionWhereUniqueInput
    create: XOR<ConnectionCreateWithoutDeviceInput, ConnectionUncheckedCreateWithoutDeviceInput>
  }

  export type ConnectionCreateManyDeviceInputEnvelope = {
    data: ConnectionCreateManyDeviceInput | ConnectionCreateManyDeviceInput[]
    skipDuplicates?: boolean
  }

  export type DeviceConfigurationCreateWithoutDeviceInput = {
    device_name: string
    mac_address: string
    channel: number
  }

  export type DeviceConfigurationUncheckedCreateWithoutDeviceInput = {
    id?: number
    device_name: string
    mac_address: string
    channel: number
  }

  export type DeviceConfigurationCreateOrConnectWithoutDeviceInput = {
    where: DeviceConfigurationWhereUniqueInput
    create: XOR<DeviceConfigurationCreateWithoutDeviceInput, DeviceConfigurationUncheckedCreateWithoutDeviceInput>
  }

  export type LocationsCreateWithoutDeviceInput = {
    longitude: number
    latitude: number
    date_l?: Date | string
  }

  export type LocationsUncheckedCreateWithoutDeviceInput = {
    id?: number
    longitude: number
    latitude: number
    date_l?: Date | string
  }

  export type LocationsCreateOrConnectWithoutDeviceInput = {
    where: LocationsWhereUniqueInput
    create: XOR<LocationsCreateWithoutDeviceInput, LocationsUncheckedCreateWithoutDeviceInput>
  }

  export type LocationsCreateManyDeviceInputEnvelope = {
    data: LocationsCreateManyDeviceInput | LocationsCreateManyDeviceInput[]
    skipDuplicates?: boolean
  }

  export type RecordCreateWithoutDeviceInput = {
    longitude: number
    latitude: number
    date_r?: Date | string
  }

  export type RecordUncheckedCreateWithoutDeviceInput = {
    id?: number
    longitude: number
    latitude: number
    date_r?: Date | string
  }

  export type RecordCreateOrConnectWithoutDeviceInput = {
    where: RecordWhereUniqueInput
    create: XOR<RecordCreateWithoutDeviceInput, RecordUncheckedCreateWithoutDeviceInput>
  }

  export type RecordCreateManyDeviceInputEnvelope = {
    data: RecordCreateManyDeviceInput | RecordCreateManyDeviceInput[]
    skipDuplicates?: boolean
  }

  export type UserCreateWithoutDevicesInput = {
    id?: string
    username: string
    phone_number: string
    email: string
    password_u: string
    creation_date?: Date | string
    update_date?: Date | string | null
    jwt_version?: number
    last_login?: Date | string | null
    role?: string
    connections?: ConnectionCreateNestedManyWithoutUserInput
    jwtTokens?: JwtTokenCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutDevicesInput = {
    id?: string
    username: string
    phone_number: string
    email: string
    password_u: string
    creation_date?: Date | string
    update_date?: Date | string | null
    jwt_version?: number
    last_login?: Date | string | null
    role?: string
    connections?: ConnectionUncheckedCreateNestedManyWithoutUserInput
    jwtTokens?: JwtTokenUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutDevicesInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutDevicesInput, UserUncheckedCreateWithoutDevicesInput>
  }

  export type ConnectionUpsertWithWhereUniqueWithoutDeviceInput = {
    where: ConnectionWhereUniqueInput
    update: XOR<ConnectionUpdateWithoutDeviceInput, ConnectionUncheckedUpdateWithoutDeviceInput>
    create: XOR<ConnectionCreateWithoutDeviceInput, ConnectionUncheckedCreateWithoutDeviceInput>
  }

  export type ConnectionUpdateWithWhereUniqueWithoutDeviceInput = {
    where: ConnectionWhereUniqueInput
    data: XOR<ConnectionUpdateWithoutDeviceInput, ConnectionUncheckedUpdateWithoutDeviceInput>
  }

  export type ConnectionUpdateManyWithWhereWithoutDeviceInput = {
    where: ConnectionScalarWhereInput
    data: XOR<ConnectionUpdateManyMutationInput, ConnectionUncheckedUpdateManyWithoutDeviceInput>
  }

  export type ConnectionScalarWhereInput = {
    AND?: ConnectionScalarWhereInput | ConnectionScalarWhereInput[]
    OR?: ConnectionScalarWhereInput[]
    NOT?: ConnectionScalarWhereInput | ConnectionScalarWhereInput[]
    id?: IntFilter<"Connection"> | number
    id_usuario?: StringFilter<"Connection"> | string
    name_usuario_invitado?: StringFilter<"Connection"> | string
    id_device?: StringFilter<"Connection"> | string
    type_connection?: StringFilter<"Connection"> | string
  }

  export type DeviceConfigurationUpsertWithoutDeviceInput = {
    update: XOR<DeviceConfigurationUpdateWithoutDeviceInput, DeviceConfigurationUncheckedUpdateWithoutDeviceInput>
    create: XOR<DeviceConfigurationCreateWithoutDeviceInput, DeviceConfigurationUncheckedCreateWithoutDeviceInput>
    where?: DeviceConfigurationWhereInput
  }

  export type DeviceConfigurationUpdateToOneWithWhereWithoutDeviceInput = {
    where?: DeviceConfigurationWhereInput
    data: XOR<DeviceConfigurationUpdateWithoutDeviceInput, DeviceConfigurationUncheckedUpdateWithoutDeviceInput>
  }

  export type DeviceConfigurationUpdateWithoutDeviceInput = {
    device_name?: StringFieldUpdateOperationsInput | string
    mac_address?: StringFieldUpdateOperationsInput | string
    channel?: IntFieldUpdateOperationsInput | number
  }

  export type DeviceConfigurationUncheckedUpdateWithoutDeviceInput = {
    id?: IntFieldUpdateOperationsInput | number
    device_name?: StringFieldUpdateOperationsInput | string
    mac_address?: StringFieldUpdateOperationsInput | string
    channel?: IntFieldUpdateOperationsInput | number
  }

  export type LocationsUpsertWithWhereUniqueWithoutDeviceInput = {
    where: LocationsWhereUniqueInput
    update: XOR<LocationsUpdateWithoutDeviceInput, LocationsUncheckedUpdateWithoutDeviceInput>
    create: XOR<LocationsCreateWithoutDeviceInput, LocationsUncheckedCreateWithoutDeviceInput>
  }

  export type LocationsUpdateWithWhereUniqueWithoutDeviceInput = {
    where: LocationsWhereUniqueInput
    data: XOR<LocationsUpdateWithoutDeviceInput, LocationsUncheckedUpdateWithoutDeviceInput>
  }

  export type LocationsUpdateManyWithWhereWithoutDeviceInput = {
    where: LocationsScalarWhereInput
    data: XOR<LocationsUpdateManyMutationInput, LocationsUncheckedUpdateManyWithoutDeviceInput>
  }

  export type LocationsScalarWhereInput = {
    AND?: LocationsScalarWhereInput | LocationsScalarWhereInput[]
    OR?: LocationsScalarWhereInput[]
    NOT?: LocationsScalarWhereInput | LocationsScalarWhereInput[]
    id?: IntFilter<"Locations"> | number
    id_device?: StringFilter<"Locations"> | string
    longitude?: FloatFilter<"Locations"> | number
    latitude?: FloatFilter<"Locations"> | number
    date_l?: DateTimeFilter<"Locations"> | Date | string
  }

  export type RecordUpsertWithWhereUniqueWithoutDeviceInput = {
    where: RecordWhereUniqueInput
    update: XOR<RecordUpdateWithoutDeviceInput, RecordUncheckedUpdateWithoutDeviceInput>
    create: XOR<RecordCreateWithoutDeviceInput, RecordUncheckedCreateWithoutDeviceInput>
  }

  export type RecordUpdateWithWhereUniqueWithoutDeviceInput = {
    where: RecordWhereUniqueInput
    data: XOR<RecordUpdateWithoutDeviceInput, RecordUncheckedUpdateWithoutDeviceInput>
  }

  export type RecordUpdateManyWithWhereWithoutDeviceInput = {
    where: RecordScalarWhereInput
    data: XOR<RecordUpdateManyMutationInput, RecordUncheckedUpdateManyWithoutDeviceInput>
  }

  export type RecordScalarWhereInput = {
    AND?: RecordScalarWhereInput | RecordScalarWhereInput[]
    OR?: RecordScalarWhereInput[]
    NOT?: RecordScalarWhereInput | RecordScalarWhereInput[]
    id?: IntFilter<"Record"> | number
    id_device?: StringFilter<"Record"> | string
    longitude?: FloatFilter<"Record"> | number
    latitude?: FloatFilter<"Record"> | number
    date_r?: DateTimeFilter<"Record"> | Date | string
  }

  export type UserUpsertWithoutDevicesInput = {
    update: XOR<UserUpdateWithoutDevicesInput, UserUncheckedUpdateWithoutDevicesInput>
    create: XOR<UserCreateWithoutDevicesInput, UserUncheckedCreateWithoutDevicesInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutDevicesInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutDevicesInput, UserUncheckedUpdateWithoutDevicesInput>
  }

  export type UserUpdateWithoutDevicesInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    phone_number?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password_u?: StringFieldUpdateOperationsInput | string
    creation_date?: DateTimeFieldUpdateOperationsInput | Date | string
    update_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    jwt_version?: IntFieldUpdateOperationsInput | number
    last_login?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    role?: StringFieldUpdateOperationsInput | string
    connections?: ConnectionUpdateManyWithoutUserNestedInput
    jwtTokens?: JwtTokenUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutDevicesInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    phone_number?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password_u?: StringFieldUpdateOperationsInput | string
    creation_date?: DateTimeFieldUpdateOperationsInput | Date | string
    update_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    jwt_version?: IntFieldUpdateOperationsInput | number
    last_login?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    role?: StringFieldUpdateOperationsInput | string
    connections?: ConnectionUncheckedUpdateManyWithoutUserNestedInput
    jwtTokens?: JwtTokenUncheckedUpdateManyWithoutUserNestedInput
  }

  export type ConnectionCreateWithoutUserInput = {
    name_usuario_invitado: string
    type_connection: string
    device: DeviceCreateNestedOneWithoutConnectionsInput
  }

  export type ConnectionUncheckedCreateWithoutUserInput = {
    id?: number
    name_usuario_invitado: string
    id_device: string
    type_connection: string
  }

  export type ConnectionCreateOrConnectWithoutUserInput = {
    where: ConnectionWhereUniqueInput
    create: XOR<ConnectionCreateWithoutUserInput, ConnectionUncheckedCreateWithoutUserInput>
  }

  export type ConnectionCreateManyUserInputEnvelope = {
    data: ConnectionCreateManyUserInput | ConnectionCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type DeviceCreateWithoutUserInput = {
    id_device?: string
    name_device: string
    status_d: string
    update_date?: Date | string | null
    connections?: ConnectionCreateNestedManyWithoutDeviceInput
    configuration?: DeviceConfigurationCreateNestedOneWithoutDeviceInput
    locations?: LocationsCreateNestedManyWithoutDeviceInput
    records?: RecordCreateNestedManyWithoutDeviceInput
  }

  export type DeviceUncheckedCreateWithoutUserInput = {
    id_device?: string
    name_device: string
    status_d: string
    update_date?: Date | string | null
    connections?: ConnectionUncheckedCreateNestedManyWithoutDeviceInput
    configuration?: DeviceConfigurationUncheckedCreateNestedOneWithoutDeviceInput
    locations?: LocationsUncheckedCreateNestedManyWithoutDeviceInput
    records?: RecordUncheckedCreateNestedManyWithoutDeviceInput
  }

  export type DeviceCreateOrConnectWithoutUserInput = {
    where: DeviceWhereUniqueInput
    create: XOR<DeviceCreateWithoutUserInput, DeviceUncheckedCreateWithoutUserInput>
  }

  export type DeviceCreateManyUserInputEnvelope = {
    data: DeviceCreateManyUserInput | DeviceCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type JwtTokenCreateWithoutUserInput = {
    id?: string
    tokenHash: string
    tokenType?: string
    createdAt?: Date | string
    expiresAt: Date | string
    lastUsedAt?: Date | string | null
    useCount?: number
    maxUses?: number
    isRevoked?: boolean
    activities?: JwtActivityCreateNestedManyWithoutJwtTokenInput
  }

  export type JwtTokenUncheckedCreateWithoutUserInput = {
    id?: string
    tokenHash: string
    tokenType?: string
    createdAt?: Date | string
    expiresAt: Date | string
    lastUsedAt?: Date | string | null
    useCount?: number
    maxUses?: number
    isRevoked?: boolean
    activities?: JwtActivityUncheckedCreateNestedManyWithoutJwtTokenInput
  }

  export type JwtTokenCreateOrConnectWithoutUserInput = {
    where: JwtTokenWhereUniqueInput
    create: XOR<JwtTokenCreateWithoutUserInput, JwtTokenUncheckedCreateWithoutUserInput>
  }

  export type JwtTokenCreateManyUserInputEnvelope = {
    data: JwtTokenCreateManyUserInput | JwtTokenCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type ConnectionUpsertWithWhereUniqueWithoutUserInput = {
    where: ConnectionWhereUniqueInput
    update: XOR<ConnectionUpdateWithoutUserInput, ConnectionUncheckedUpdateWithoutUserInput>
    create: XOR<ConnectionCreateWithoutUserInput, ConnectionUncheckedCreateWithoutUserInput>
  }

  export type ConnectionUpdateWithWhereUniqueWithoutUserInput = {
    where: ConnectionWhereUniqueInput
    data: XOR<ConnectionUpdateWithoutUserInput, ConnectionUncheckedUpdateWithoutUserInput>
  }

  export type ConnectionUpdateManyWithWhereWithoutUserInput = {
    where: ConnectionScalarWhereInput
    data: XOR<ConnectionUpdateManyMutationInput, ConnectionUncheckedUpdateManyWithoutUserInput>
  }

  export type DeviceUpsertWithWhereUniqueWithoutUserInput = {
    where: DeviceWhereUniqueInput
    update: XOR<DeviceUpdateWithoutUserInput, DeviceUncheckedUpdateWithoutUserInput>
    create: XOR<DeviceCreateWithoutUserInput, DeviceUncheckedCreateWithoutUserInput>
  }

  export type DeviceUpdateWithWhereUniqueWithoutUserInput = {
    where: DeviceWhereUniqueInput
    data: XOR<DeviceUpdateWithoutUserInput, DeviceUncheckedUpdateWithoutUserInput>
  }

  export type DeviceUpdateManyWithWhereWithoutUserInput = {
    where: DeviceScalarWhereInput
    data: XOR<DeviceUpdateManyMutationInput, DeviceUncheckedUpdateManyWithoutUserInput>
  }

  export type DeviceScalarWhereInput = {
    AND?: DeviceScalarWhereInput | DeviceScalarWhereInput[]
    OR?: DeviceScalarWhereInput[]
    NOT?: DeviceScalarWhereInput | DeviceScalarWhereInput[]
    id_device?: StringFilter<"Device"> | string
    name_device?: StringFilter<"Device"> | string
    status_d?: StringFilter<"Device"> | string
    update_date?: DateTimeNullableFilter<"Device"> | Date | string | null
    userId?: StringNullableFilter<"Device"> | string | null
  }

  export type JwtTokenUpsertWithWhereUniqueWithoutUserInput = {
    where: JwtTokenWhereUniqueInput
    update: XOR<JwtTokenUpdateWithoutUserInput, JwtTokenUncheckedUpdateWithoutUserInput>
    create: XOR<JwtTokenCreateWithoutUserInput, JwtTokenUncheckedCreateWithoutUserInput>
  }

  export type JwtTokenUpdateWithWhereUniqueWithoutUserInput = {
    where: JwtTokenWhereUniqueInput
    data: XOR<JwtTokenUpdateWithoutUserInput, JwtTokenUncheckedUpdateWithoutUserInput>
  }

  export type JwtTokenUpdateManyWithWhereWithoutUserInput = {
    where: JwtTokenScalarWhereInput
    data: XOR<JwtTokenUpdateManyMutationInput, JwtTokenUncheckedUpdateManyWithoutUserInput>
  }

  export type JwtTokenScalarWhereInput = {
    AND?: JwtTokenScalarWhereInput | JwtTokenScalarWhereInput[]
    OR?: JwtTokenScalarWhereInput[]
    NOT?: JwtTokenScalarWhereInput | JwtTokenScalarWhereInput[]
    id?: StringFilter<"JwtToken"> | string
    tokenHash?: StringFilter<"JwtToken"> | string
    userId?: StringFilter<"JwtToken"> | string
    tokenType?: StringFilter<"JwtToken"> | string
    createdAt?: DateTimeFilter<"JwtToken"> | Date | string
    expiresAt?: DateTimeFilter<"JwtToken"> | Date | string
    lastUsedAt?: DateTimeNullableFilter<"JwtToken"> | Date | string | null
    useCount?: IntFilter<"JwtToken"> | number
    maxUses?: IntFilter<"JwtToken"> | number
    isRevoked?: BoolFilter<"JwtToken"> | boolean
  }

  export type UserCreateWithoutJwtTokensInput = {
    id?: string
    username: string
    phone_number: string
    email: string
    password_u: string
    creation_date?: Date | string
    update_date?: Date | string | null
    jwt_version?: number
    last_login?: Date | string | null
    role?: string
    connections?: ConnectionCreateNestedManyWithoutUserInput
    devices?: DeviceCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutJwtTokensInput = {
    id?: string
    username: string
    phone_number: string
    email: string
    password_u: string
    creation_date?: Date | string
    update_date?: Date | string | null
    jwt_version?: number
    last_login?: Date | string | null
    role?: string
    connections?: ConnectionUncheckedCreateNestedManyWithoutUserInput
    devices?: DeviceUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutJwtTokensInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutJwtTokensInput, UserUncheckedCreateWithoutJwtTokensInput>
  }

  export type JwtActivityCreateWithoutJwtTokenInput = {
    action: string
    performedAt?: Date | string
  }

  export type JwtActivityUncheckedCreateWithoutJwtTokenInput = {
    id?: number
    action: string
    performedAt?: Date | string
  }

  export type JwtActivityCreateOrConnectWithoutJwtTokenInput = {
    where: JwtActivityWhereUniqueInput
    create: XOR<JwtActivityCreateWithoutJwtTokenInput, JwtActivityUncheckedCreateWithoutJwtTokenInput>
  }

  export type JwtActivityCreateManyJwtTokenInputEnvelope = {
    data: JwtActivityCreateManyJwtTokenInput | JwtActivityCreateManyJwtTokenInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithoutJwtTokensInput = {
    update: XOR<UserUpdateWithoutJwtTokensInput, UserUncheckedUpdateWithoutJwtTokensInput>
    create: XOR<UserCreateWithoutJwtTokensInput, UserUncheckedCreateWithoutJwtTokensInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutJwtTokensInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutJwtTokensInput, UserUncheckedUpdateWithoutJwtTokensInput>
  }

  export type UserUpdateWithoutJwtTokensInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    phone_number?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password_u?: StringFieldUpdateOperationsInput | string
    creation_date?: DateTimeFieldUpdateOperationsInput | Date | string
    update_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    jwt_version?: IntFieldUpdateOperationsInput | number
    last_login?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    role?: StringFieldUpdateOperationsInput | string
    connections?: ConnectionUpdateManyWithoutUserNestedInput
    devices?: DeviceUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutJwtTokensInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    phone_number?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password_u?: StringFieldUpdateOperationsInput | string
    creation_date?: DateTimeFieldUpdateOperationsInput | Date | string
    update_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    jwt_version?: IntFieldUpdateOperationsInput | number
    last_login?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    role?: StringFieldUpdateOperationsInput | string
    connections?: ConnectionUncheckedUpdateManyWithoutUserNestedInput
    devices?: DeviceUncheckedUpdateManyWithoutUserNestedInput
  }

  export type JwtActivityUpsertWithWhereUniqueWithoutJwtTokenInput = {
    where: JwtActivityWhereUniqueInput
    update: XOR<JwtActivityUpdateWithoutJwtTokenInput, JwtActivityUncheckedUpdateWithoutJwtTokenInput>
    create: XOR<JwtActivityCreateWithoutJwtTokenInput, JwtActivityUncheckedCreateWithoutJwtTokenInput>
  }

  export type JwtActivityUpdateWithWhereUniqueWithoutJwtTokenInput = {
    where: JwtActivityWhereUniqueInput
    data: XOR<JwtActivityUpdateWithoutJwtTokenInput, JwtActivityUncheckedUpdateWithoutJwtTokenInput>
  }

  export type JwtActivityUpdateManyWithWhereWithoutJwtTokenInput = {
    where: JwtActivityScalarWhereInput
    data: XOR<JwtActivityUpdateManyMutationInput, JwtActivityUncheckedUpdateManyWithoutJwtTokenInput>
  }

  export type JwtActivityScalarWhereInput = {
    AND?: JwtActivityScalarWhereInput | JwtActivityScalarWhereInput[]
    OR?: JwtActivityScalarWhereInput[]
    NOT?: JwtActivityScalarWhereInput | JwtActivityScalarWhereInput[]
    id?: IntFilter<"JwtActivity"> | number
    tokenId?: StringFilter<"JwtActivity"> | string
    action?: StringFilter<"JwtActivity"> | string
    performedAt?: DateTimeFilter<"JwtActivity"> | Date | string
  }

  export type JwtTokenCreateWithoutActivitiesInput = {
    id?: string
    tokenHash: string
    tokenType?: string
    createdAt?: Date | string
    expiresAt: Date | string
    lastUsedAt?: Date | string | null
    useCount?: number
    maxUses?: number
    isRevoked?: boolean
    user: UserCreateNestedOneWithoutJwtTokensInput
  }

  export type JwtTokenUncheckedCreateWithoutActivitiesInput = {
    id?: string
    tokenHash: string
    userId: string
    tokenType?: string
    createdAt?: Date | string
    expiresAt: Date | string
    lastUsedAt?: Date | string | null
    useCount?: number
    maxUses?: number
    isRevoked?: boolean
  }

  export type JwtTokenCreateOrConnectWithoutActivitiesInput = {
    where: JwtTokenWhereUniqueInput
    create: XOR<JwtTokenCreateWithoutActivitiesInput, JwtTokenUncheckedCreateWithoutActivitiesInput>
  }

  export type JwtTokenUpsertWithoutActivitiesInput = {
    update: XOR<JwtTokenUpdateWithoutActivitiesInput, JwtTokenUncheckedUpdateWithoutActivitiesInput>
    create: XOR<JwtTokenCreateWithoutActivitiesInput, JwtTokenUncheckedCreateWithoutActivitiesInput>
    where?: JwtTokenWhereInput
  }

  export type JwtTokenUpdateToOneWithWhereWithoutActivitiesInput = {
    where?: JwtTokenWhereInput
    data: XOR<JwtTokenUpdateWithoutActivitiesInput, JwtTokenUncheckedUpdateWithoutActivitiesInput>
  }

  export type JwtTokenUpdateWithoutActivitiesInput = {
    id?: StringFieldUpdateOperationsInput | string
    tokenHash?: StringFieldUpdateOperationsInput | string
    tokenType?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lastUsedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    useCount?: IntFieldUpdateOperationsInput | number
    maxUses?: IntFieldUpdateOperationsInput | number
    isRevoked?: BoolFieldUpdateOperationsInput | boolean
    user?: UserUpdateOneRequiredWithoutJwtTokensNestedInput
  }

  export type JwtTokenUncheckedUpdateWithoutActivitiesInput = {
    id?: StringFieldUpdateOperationsInput | string
    tokenHash?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    tokenType?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lastUsedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    useCount?: IntFieldUpdateOperationsInput | number
    maxUses?: IntFieldUpdateOperationsInput | number
    isRevoked?: BoolFieldUpdateOperationsInput | boolean
  }

  export type DeviceCreateWithoutLocationsInput = {
    id_device?: string
    name_device: string
    status_d: string
    update_date?: Date | string | null
    connections?: ConnectionCreateNestedManyWithoutDeviceInput
    configuration?: DeviceConfigurationCreateNestedOneWithoutDeviceInput
    records?: RecordCreateNestedManyWithoutDeviceInput
    user?: UserCreateNestedOneWithoutDevicesInput
  }

  export type DeviceUncheckedCreateWithoutLocationsInput = {
    id_device?: string
    name_device: string
    status_d: string
    update_date?: Date | string | null
    userId?: string | null
    connections?: ConnectionUncheckedCreateNestedManyWithoutDeviceInput
    configuration?: DeviceConfigurationUncheckedCreateNestedOneWithoutDeviceInput
    records?: RecordUncheckedCreateNestedManyWithoutDeviceInput
  }

  export type DeviceCreateOrConnectWithoutLocationsInput = {
    where: DeviceWhereUniqueInput
    create: XOR<DeviceCreateWithoutLocationsInput, DeviceUncheckedCreateWithoutLocationsInput>
  }

  export type DeviceUpsertWithoutLocationsInput = {
    update: XOR<DeviceUpdateWithoutLocationsInput, DeviceUncheckedUpdateWithoutLocationsInput>
    create: XOR<DeviceCreateWithoutLocationsInput, DeviceUncheckedCreateWithoutLocationsInput>
    where?: DeviceWhereInput
  }

  export type DeviceUpdateToOneWithWhereWithoutLocationsInput = {
    where?: DeviceWhereInput
    data: XOR<DeviceUpdateWithoutLocationsInput, DeviceUncheckedUpdateWithoutLocationsInput>
  }

  export type DeviceUpdateWithoutLocationsInput = {
    id_device?: StringFieldUpdateOperationsInput | string
    name_device?: StringFieldUpdateOperationsInput | string
    status_d?: StringFieldUpdateOperationsInput | string
    update_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    connections?: ConnectionUpdateManyWithoutDeviceNestedInput
    configuration?: DeviceConfigurationUpdateOneWithoutDeviceNestedInput
    records?: RecordUpdateManyWithoutDeviceNestedInput
    user?: UserUpdateOneWithoutDevicesNestedInput
  }

  export type DeviceUncheckedUpdateWithoutLocationsInput = {
    id_device?: StringFieldUpdateOperationsInput | string
    name_device?: StringFieldUpdateOperationsInput | string
    status_d?: StringFieldUpdateOperationsInput | string
    update_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    connections?: ConnectionUncheckedUpdateManyWithoutDeviceNestedInput
    configuration?: DeviceConfigurationUncheckedUpdateOneWithoutDeviceNestedInput
    records?: RecordUncheckedUpdateManyWithoutDeviceNestedInput
  }

  export type DeviceCreateWithoutConfigurationInput = {
    id_device?: string
    name_device: string
    status_d: string
    update_date?: Date | string | null
    connections?: ConnectionCreateNestedManyWithoutDeviceInput
    locations?: LocationsCreateNestedManyWithoutDeviceInput
    records?: RecordCreateNestedManyWithoutDeviceInput
    user?: UserCreateNestedOneWithoutDevicesInput
  }

  export type DeviceUncheckedCreateWithoutConfigurationInput = {
    id_device?: string
    name_device: string
    status_d: string
    update_date?: Date | string | null
    userId?: string | null
    connections?: ConnectionUncheckedCreateNestedManyWithoutDeviceInput
    locations?: LocationsUncheckedCreateNestedManyWithoutDeviceInput
    records?: RecordUncheckedCreateNestedManyWithoutDeviceInput
  }

  export type DeviceCreateOrConnectWithoutConfigurationInput = {
    where: DeviceWhereUniqueInput
    create: XOR<DeviceCreateWithoutConfigurationInput, DeviceUncheckedCreateWithoutConfigurationInput>
  }

  export type DeviceUpsertWithoutConfigurationInput = {
    update: XOR<DeviceUpdateWithoutConfigurationInput, DeviceUncheckedUpdateWithoutConfigurationInput>
    create: XOR<DeviceCreateWithoutConfigurationInput, DeviceUncheckedCreateWithoutConfigurationInput>
    where?: DeviceWhereInput
  }

  export type DeviceUpdateToOneWithWhereWithoutConfigurationInput = {
    where?: DeviceWhereInput
    data: XOR<DeviceUpdateWithoutConfigurationInput, DeviceUncheckedUpdateWithoutConfigurationInput>
  }

  export type DeviceUpdateWithoutConfigurationInput = {
    id_device?: StringFieldUpdateOperationsInput | string
    name_device?: StringFieldUpdateOperationsInput | string
    status_d?: StringFieldUpdateOperationsInput | string
    update_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    connections?: ConnectionUpdateManyWithoutDeviceNestedInput
    locations?: LocationsUpdateManyWithoutDeviceNestedInput
    records?: RecordUpdateManyWithoutDeviceNestedInput
    user?: UserUpdateOneWithoutDevicesNestedInput
  }

  export type DeviceUncheckedUpdateWithoutConfigurationInput = {
    id_device?: StringFieldUpdateOperationsInput | string
    name_device?: StringFieldUpdateOperationsInput | string
    status_d?: StringFieldUpdateOperationsInput | string
    update_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    connections?: ConnectionUncheckedUpdateManyWithoutDeviceNestedInput
    locations?: LocationsUncheckedUpdateManyWithoutDeviceNestedInput
    records?: RecordUncheckedUpdateManyWithoutDeviceNestedInput
  }

  export type DeviceCreateWithoutConnectionsInput = {
    id_device?: string
    name_device: string
    status_d: string
    update_date?: Date | string | null
    configuration?: DeviceConfigurationCreateNestedOneWithoutDeviceInput
    locations?: LocationsCreateNestedManyWithoutDeviceInput
    records?: RecordCreateNestedManyWithoutDeviceInput
    user?: UserCreateNestedOneWithoutDevicesInput
  }

  export type DeviceUncheckedCreateWithoutConnectionsInput = {
    id_device?: string
    name_device: string
    status_d: string
    update_date?: Date | string | null
    userId?: string | null
    configuration?: DeviceConfigurationUncheckedCreateNestedOneWithoutDeviceInput
    locations?: LocationsUncheckedCreateNestedManyWithoutDeviceInput
    records?: RecordUncheckedCreateNestedManyWithoutDeviceInput
  }

  export type DeviceCreateOrConnectWithoutConnectionsInput = {
    where: DeviceWhereUniqueInput
    create: XOR<DeviceCreateWithoutConnectionsInput, DeviceUncheckedCreateWithoutConnectionsInput>
  }

  export type UserCreateWithoutConnectionsInput = {
    id?: string
    username: string
    phone_number: string
    email: string
    password_u: string
    creation_date?: Date | string
    update_date?: Date | string | null
    jwt_version?: number
    last_login?: Date | string | null
    role?: string
    devices?: DeviceCreateNestedManyWithoutUserInput
    jwtTokens?: JwtTokenCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutConnectionsInput = {
    id?: string
    username: string
    phone_number: string
    email: string
    password_u: string
    creation_date?: Date | string
    update_date?: Date | string | null
    jwt_version?: number
    last_login?: Date | string | null
    role?: string
    devices?: DeviceUncheckedCreateNestedManyWithoutUserInput
    jwtTokens?: JwtTokenUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutConnectionsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutConnectionsInput, UserUncheckedCreateWithoutConnectionsInput>
  }

  export type DeviceUpsertWithoutConnectionsInput = {
    update: XOR<DeviceUpdateWithoutConnectionsInput, DeviceUncheckedUpdateWithoutConnectionsInput>
    create: XOR<DeviceCreateWithoutConnectionsInput, DeviceUncheckedCreateWithoutConnectionsInput>
    where?: DeviceWhereInput
  }

  export type DeviceUpdateToOneWithWhereWithoutConnectionsInput = {
    where?: DeviceWhereInput
    data: XOR<DeviceUpdateWithoutConnectionsInput, DeviceUncheckedUpdateWithoutConnectionsInput>
  }

  export type DeviceUpdateWithoutConnectionsInput = {
    id_device?: StringFieldUpdateOperationsInput | string
    name_device?: StringFieldUpdateOperationsInput | string
    status_d?: StringFieldUpdateOperationsInput | string
    update_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    configuration?: DeviceConfigurationUpdateOneWithoutDeviceNestedInput
    locations?: LocationsUpdateManyWithoutDeviceNestedInput
    records?: RecordUpdateManyWithoutDeviceNestedInput
    user?: UserUpdateOneWithoutDevicesNestedInput
  }

  export type DeviceUncheckedUpdateWithoutConnectionsInput = {
    id_device?: StringFieldUpdateOperationsInput | string
    name_device?: StringFieldUpdateOperationsInput | string
    status_d?: StringFieldUpdateOperationsInput | string
    update_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    configuration?: DeviceConfigurationUncheckedUpdateOneWithoutDeviceNestedInput
    locations?: LocationsUncheckedUpdateManyWithoutDeviceNestedInput
    records?: RecordUncheckedUpdateManyWithoutDeviceNestedInput
  }

  export type UserUpsertWithoutConnectionsInput = {
    update: XOR<UserUpdateWithoutConnectionsInput, UserUncheckedUpdateWithoutConnectionsInput>
    create: XOR<UserCreateWithoutConnectionsInput, UserUncheckedCreateWithoutConnectionsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutConnectionsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutConnectionsInput, UserUncheckedUpdateWithoutConnectionsInput>
  }

  export type UserUpdateWithoutConnectionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    phone_number?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password_u?: StringFieldUpdateOperationsInput | string
    creation_date?: DateTimeFieldUpdateOperationsInput | Date | string
    update_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    jwt_version?: IntFieldUpdateOperationsInput | number
    last_login?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    role?: StringFieldUpdateOperationsInput | string
    devices?: DeviceUpdateManyWithoutUserNestedInput
    jwtTokens?: JwtTokenUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutConnectionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    phone_number?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password_u?: StringFieldUpdateOperationsInput | string
    creation_date?: DateTimeFieldUpdateOperationsInput | Date | string
    update_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    jwt_version?: IntFieldUpdateOperationsInput | number
    last_login?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    role?: StringFieldUpdateOperationsInput | string
    devices?: DeviceUncheckedUpdateManyWithoutUserNestedInput
    jwtTokens?: JwtTokenUncheckedUpdateManyWithoutUserNestedInput
  }

  export type DeviceCreateWithoutRecordsInput = {
    id_device?: string
    name_device: string
    status_d: string
    update_date?: Date | string | null
    connections?: ConnectionCreateNestedManyWithoutDeviceInput
    configuration?: DeviceConfigurationCreateNestedOneWithoutDeviceInput
    locations?: LocationsCreateNestedManyWithoutDeviceInput
    user?: UserCreateNestedOneWithoutDevicesInput
  }

  export type DeviceUncheckedCreateWithoutRecordsInput = {
    id_device?: string
    name_device: string
    status_d: string
    update_date?: Date | string | null
    userId?: string | null
    connections?: ConnectionUncheckedCreateNestedManyWithoutDeviceInput
    configuration?: DeviceConfigurationUncheckedCreateNestedOneWithoutDeviceInput
    locations?: LocationsUncheckedCreateNestedManyWithoutDeviceInput
  }

  export type DeviceCreateOrConnectWithoutRecordsInput = {
    where: DeviceWhereUniqueInput
    create: XOR<DeviceCreateWithoutRecordsInput, DeviceUncheckedCreateWithoutRecordsInput>
  }

  export type DeviceUpsertWithoutRecordsInput = {
    update: XOR<DeviceUpdateWithoutRecordsInput, DeviceUncheckedUpdateWithoutRecordsInput>
    create: XOR<DeviceCreateWithoutRecordsInput, DeviceUncheckedCreateWithoutRecordsInput>
    where?: DeviceWhereInput
  }

  export type DeviceUpdateToOneWithWhereWithoutRecordsInput = {
    where?: DeviceWhereInput
    data: XOR<DeviceUpdateWithoutRecordsInput, DeviceUncheckedUpdateWithoutRecordsInput>
  }

  export type DeviceUpdateWithoutRecordsInput = {
    id_device?: StringFieldUpdateOperationsInput | string
    name_device?: StringFieldUpdateOperationsInput | string
    status_d?: StringFieldUpdateOperationsInput | string
    update_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    connections?: ConnectionUpdateManyWithoutDeviceNestedInput
    configuration?: DeviceConfigurationUpdateOneWithoutDeviceNestedInput
    locations?: LocationsUpdateManyWithoutDeviceNestedInput
    user?: UserUpdateOneWithoutDevicesNestedInput
  }

  export type DeviceUncheckedUpdateWithoutRecordsInput = {
    id_device?: StringFieldUpdateOperationsInput | string
    name_device?: StringFieldUpdateOperationsInput | string
    status_d?: StringFieldUpdateOperationsInput | string
    update_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    connections?: ConnectionUncheckedUpdateManyWithoutDeviceNestedInput
    configuration?: DeviceConfigurationUncheckedUpdateOneWithoutDeviceNestedInput
    locations?: LocationsUncheckedUpdateManyWithoutDeviceNestedInput
  }

  export type ConnectionCreateManyDeviceInput = {
    id?: number
    id_usuario: string
    name_usuario_invitado: string
    type_connection: string
  }

  export type LocationsCreateManyDeviceInput = {
    id?: number
    longitude: number
    latitude: number
    date_l?: Date | string
  }

  export type RecordCreateManyDeviceInput = {
    id?: number
    longitude: number
    latitude: number
    date_r?: Date | string
  }

  export type ConnectionUpdateWithoutDeviceInput = {
    name_usuario_invitado?: StringFieldUpdateOperationsInput | string
    type_connection?: StringFieldUpdateOperationsInput | string
    user?: UserUpdateOneRequiredWithoutConnectionsNestedInput
  }

  export type ConnectionUncheckedUpdateWithoutDeviceInput = {
    id?: IntFieldUpdateOperationsInput | number
    id_usuario?: StringFieldUpdateOperationsInput | string
    name_usuario_invitado?: StringFieldUpdateOperationsInput | string
    type_connection?: StringFieldUpdateOperationsInput | string
  }

  export type ConnectionUncheckedUpdateManyWithoutDeviceInput = {
    id?: IntFieldUpdateOperationsInput | number
    id_usuario?: StringFieldUpdateOperationsInput | string
    name_usuario_invitado?: StringFieldUpdateOperationsInput | string
    type_connection?: StringFieldUpdateOperationsInput | string
  }

  export type LocationsUpdateWithoutDeviceInput = {
    longitude?: FloatFieldUpdateOperationsInput | number
    latitude?: FloatFieldUpdateOperationsInput | number
    date_l?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LocationsUncheckedUpdateWithoutDeviceInput = {
    id?: IntFieldUpdateOperationsInput | number
    longitude?: FloatFieldUpdateOperationsInput | number
    latitude?: FloatFieldUpdateOperationsInput | number
    date_l?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LocationsUncheckedUpdateManyWithoutDeviceInput = {
    id?: IntFieldUpdateOperationsInput | number
    longitude?: FloatFieldUpdateOperationsInput | number
    latitude?: FloatFieldUpdateOperationsInput | number
    date_l?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RecordUpdateWithoutDeviceInput = {
    longitude?: FloatFieldUpdateOperationsInput | number
    latitude?: FloatFieldUpdateOperationsInput | number
    date_r?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RecordUncheckedUpdateWithoutDeviceInput = {
    id?: IntFieldUpdateOperationsInput | number
    longitude?: FloatFieldUpdateOperationsInput | number
    latitude?: FloatFieldUpdateOperationsInput | number
    date_r?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RecordUncheckedUpdateManyWithoutDeviceInput = {
    id?: IntFieldUpdateOperationsInput | number
    longitude?: FloatFieldUpdateOperationsInput | number
    latitude?: FloatFieldUpdateOperationsInput | number
    date_r?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ConnectionCreateManyUserInput = {
    id?: number
    name_usuario_invitado: string
    id_device: string
    type_connection: string
  }

  export type DeviceCreateManyUserInput = {
    id_device?: string
    name_device: string
    status_d: string
    update_date?: Date | string | null
  }

  export type JwtTokenCreateManyUserInput = {
    id?: string
    tokenHash: string
    tokenType?: string
    createdAt?: Date | string
    expiresAt: Date | string
    lastUsedAt?: Date | string | null
    useCount?: number
    maxUses?: number
    isRevoked?: boolean
  }

  export type ConnectionUpdateWithoutUserInput = {
    name_usuario_invitado?: StringFieldUpdateOperationsInput | string
    type_connection?: StringFieldUpdateOperationsInput | string
    device?: DeviceUpdateOneRequiredWithoutConnectionsNestedInput
  }

  export type ConnectionUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    name_usuario_invitado?: StringFieldUpdateOperationsInput | string
    id_device?: StringFieldUpdateOperationsInput | string
    type_connection?: StringFieldUpdateOperationsInput | string
  }

  export type ConnectionUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    name_usuario_invitado?: StringFieldUpdateOperationsInput | string
    id_device?: StringFieldUpdateOperationsInput | string
    type_connection?: StringFieldUpdateOperationsInput | string
  }

  export type DeviceUpdateWithoutUserInput = {
    id_device?: StringFieldUpdateOperationsInput | string
    name_device?: StringFieldUpdateOperationsInput | string
    status_d?: StringFieldUpdateOperationsInput | string
    update_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    connections?: ConnectionUpdateManyWithoutDeviceNestedInput
    configuration?: DeviceConfigurationUpdateOneWithoutDeviceNestedInput
    locations?: LocationsUpdateManyWithoutDeviceNestedInput
    records?: RecordUpdateManyWithoutDeviceNestedInput
  }

  export type DeviceUncheckedUpdateWithoutUserInput = {
    id_device?: StringFieldUpdateOperationsInput | string
    name_device?: StringFieldUpdateOperationsInput | string
    status_d?: StringFieldUpdateOperationsInput | string
    update_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    connections?: ConnectionUncheckedUpdateManyWithoutDeviceNestedInput
    configuration?: DeviceConfigurationUncheckedUpdateOneWithoutDeviceNestedInput
    locations?: LocationsUncheckedUpdateManyWithoutDeviceNestedInput
    records?: RecordUncheckedUpdateManyWithoutDeviceNestedInput
  }

  export type DeviceUncheckedUpdateManyWithoutUserInput = {
    id_device?: StringFieldUpdateOperationsInput | string
    name_device?: StringFieldUpdateOperationsInput | string
    status_d?: StringFieldUpdateOperationsInput | string
    update_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type JwtTokenUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    tokenHash?: StringFieldUpdateOperationsInput | string
    tokenType?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lastUsedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    useCount?: IntFieldUpdateOperationsInput | number
    maxUses?: IntFieldUpdateOperationsInput | number
    isRevoked?: BoolFieldUpdateOperationsInput | boolean
    activities?: JwtActivityUpdateManyWithoutJwtTokenNestedInput
  }

  export type JwtTokenUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    tokenHash?: StringFieldUpdateOperationsInput | string
    tokenType?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lastUsedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    useCount?: IntFieldUpdateOperationsInput | number
    maxUses?: IntFieldUpdateOperationsInput | number
    isRevoked?: BoolFieldUpdateOperationsInput | boolean
    activities?: JwtActivityUncheckedUpdateManyWithoutJwtTokenNestedInput
  }

  export type JwtTokenUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    tokenHash?: StringFieldUpdateOperationsInput | string
    tokenType?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lastUsedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    useCount?: IntFieldUpdateOperationsInput | number
    maxUses?: IntFieldUpdateOperationsInput | number
    isRevoked?: BoolFieldUpdateOperationsInput | boolean
  }

  export type JwtActivityCreateManyJwtTokenInput = {
    id?: number
    action: string
    performedAt?: Date | string
  }

  export type JwtActivityUpdateWithoutJwtTokenInput = {
    action?: StringFieldUpdateOperationsInput | string
    performedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type JwtActivityUncheckedUpdateWithoutJwtTokenInput = {
    id?: IntFieldUpdateOperationsInput | number
    action?: StringFieldUpdateOperationsInput | string
    performedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type JwtActivityUncheckedUpdateManyWithoutJwtTokenInput = {
    id?: IntFieldUpdateOperationsInput | number
    action?: StringFieldUpdateOperationsInput | string
    performedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}
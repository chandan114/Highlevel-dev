import { config } from './config';
const ENV = config.cluster;

const jioConfig = {
  jiox0: {
    ASP_APP_ID: '605c6efd5ab8c845def75ae3',
    TEST_CONFIG: 'JIOX0 flat',
    EMI_URL: 'https://rtss-sit.jioconnect.com/MappServer5/pinelab/offers',
    FE_CHANNEL_ID: 'asp',
    GST_CONFIG: {
      TOKEN_URL: 'https://jiogst-sit.gw.jio.com/token',
      GST_VALIDATE_URL: 'https://jiogst-sit.gw.jio.com/PublicSearch/1.0',
      MUTUAL_SSL_KEY: 'd2c138f3-3f74-44f4-893e-f9f27b147d1d',
      SIGNATURE:
        'eVz+l/PXgAhrYm2rFMH9hBiZfCcpRSnBsKi29g6XiOzrma68DGQi4fVyRa63majNk7PHqENdyPLgl44aPbSE7zN75Hgi8+2Th1ujZRKkfiAPgIHvbi2D1c2I9rK1nyGd80s+X+doBeEz76o4Z5MXjeyUpaUts2CYW4fcgDud30K37zTWLTgqFY4VDHy725DmJacPUlA78x3uLoUVGnt1abP8Dlh3PM7hL6zqj4iVLkpy/cQ8SzjyCuEXauyQPO+nN6zs/frtIF++aquANiMn5XUySuvL0sx1S76hwH/WpIC0IsqTktprsZDSUNuhaL1sA6+omr0kT955e16l11IQnw==',
      AUTH: 'Basic NTlmTEJBbmY4WkR1djhidFRUQUZSZGpxdkNzYTpVVjdPN004RVFhNkIzdmowUzh4TEdPd09qYlFh',
      ASP_CLIENT_ID: 'ASP9X1W9UCPOOQGDKZS',
      ASP_CLIENT_SECRET: '3556d020-7230-45f8-8da9-d407360ef970',
    },
    PROMOTION_URL:
      'https://devfin.ril.com/MASP_Services/API/V1.0/ProductDetail',
    COMPUTRON: {
      CLIENT_ID: '62b9c6007c7f826714467d11',
      CLIENT_SECRET: '1f9frIkqG',
      CLIENT_SALT:
        '5219292c99a986c71102817897482a8b91c2bcc849f5edd4483e9190d4f5cdc2',
      MAIN_URL: 'https://api.jiox2.de/__jiomart/oms',
    },
    HOGWARTS: {
      CLIENT_ID: '62b9c6007c7f826714467d11',
      CLIENT_SECRET: '1f9frIkqG',
      CLIENT_SALT:
        '5219292c99a986c71102817897482a8b91c2bcc849f5edd4483e9190d4f5cdc2',
    },
    STORMBREAKER: {
      MAIN_URL: 'https://api.jiox2.de/__jiomart/logistics',
      INTERNAL_URL: 'https://api.jiox2.de/__jiomart/logistics-internal',
      X_OMS_APPLICATION_ID: 'morningstar',
      X_OMS_APPLICATION_TOKEN: '311E6D8D5C295512CE4BC6BBD413F',
    },
    MEGATRON: {
      MAIN_URL: 'https://api.jiox0.de/platform/cart/',
    },
    RPOS: {
      MAIN_URL:
        'https://devfin.ril.com/OnlineOrderingAPI_FYND/Api/v1.0/Checkout',
      GT_MAIN_URL: '',
      CREDENTIAL: {
        USERNAME: 'O!mU$er',
        PASSWORD: 'P@ssw0rd',
      },
    },
    CUSTOMER_DATA: {
      MAIN_URL: 'https://test-jiomart.netmeds.com/mst/rest/v1',
    },
    FYND_OMS: {
      MAIN_URL:
        'https://api.jiox0.de/__jiomart/oms/external/api/v1/asp/order/create/',
      CREDENTIAL: {
        INTEGRATION_ID: '5ea6821b3425bb07c82a25c1',
        INTEGRATION_TOKEN: 'qO2p_wQkq',
      },
    },
    JIO_PAY_URL: {
      MAIN_URL: 'https://api.jiox0.de/service/application/payment',
    },
    CLIENT_CERIFICATES: {
      GT_CERT: 'masp_pem_jiox5.pem',
      GT_KEY: 'masp_pem_jiox5.pem',
    },
    PRISM: {
      MAIN_URL: 'https://api.jiox0.de/prism',
    },
    JUSPAY_EMI_BASIC_AUTH: 'MTc0RTUxMkQ4OUU0MjY0QjRGNUEwN0Y4RjM5QTIwOg==',
    TENANT_IDS: ['1005'],
    EMI_CHECKSUM_KEY:
      'RDSDSDSJDKSMDWOIWPIOEWDKLSDSLJDKLSZQAAKDJSLKDJSLXEWIYOIWEASIURSKALWALSALSDSJDKLSDSOJDKLSDJSLKDPPLKDJSLDEDBBDSDSDDSDSDSDSDSDSDSD',
    FDK: {
      CLIENT_ID: config.PARTNERS_API_KEY,
      CLIENT_SECRET: config.PARTNERS_API_SECRET,
      CLUSTER_URL: 'https://api.jiox0.de',
    },
    FIELD_FORCE_CREDENTIALS: {
      USERNAME: 'FIELD_FORCE',
      PASSWORD: 'ASP@890fieldForce',
      SECRET: 'ThisISASecret',
    },
    GST_Encrypt_Key: '3Rwmhqk1VP',
    OTP_LOGIN_URL:
      'https://jio-clickstream-product-suggestion.extensions.jiox0.de',
    CACHE_DOMAIN: 'jiomart-asp.jiohostx0.de',
    '62a6e359d83a8b6a324f1d83': {
      TEST_CONFIG: 'JIOX0 b2b',
      EMI_CHANNEL_ID: 'RPOSASP',
      FILTER: true,
      FE_CHANNEL_ID: 'b2b',
      EMI_URL: 'https://rtss-sit.jioconnect.com/MappServer5/pinelab/offers',
      GST_CONFIG: {
        TOKEN_URL: 'https://jiogst-sit.gw.jio.com/token',
        GST_VALIDATE_URL: 'https://jiogst-sit.gw.jio.com/PublicSearch/1.0',
        MUTUAL_SSL_KEY: 'd2c138f3-3f74-44f4-893e-f9f27b147d1d',
        SIGNATURE:
          'eVz+l/PXgAhrYm2rFMH9hBiZfCcpRSnBsKi29g6XiOzrma68DGQi4fVyRa63majNk7PHqENdyPLgl44aPbSE7zN75Hgi8+2Th1ujZRKkfiAPgIHvbi2D1c2I9rK1nyGd80s+X+doBeEz76o4Z5MXjeyUpaUts2CYW4fcgDud30K37zTWLTgqFY4VDHy725DmJacPUlA78x3uLoUVGnt1abP8Dlh3PM7hL6zqj4iVLkpy/cQ8SzjyCuEXauyQPO+nN6zs/frtIF++aquANiMn5XUySuvL0sx1S76hwH/WpIC0IsqTktprsZDSUNuhaL1sA6+omr0kT955e16l11IQnw==',
        AUTH: 'Basic NTlmTEJBbmY4WkR1djhidFRUQUZSZGpxdkNzYTpVVjdPN004RVFhNkIzdmowUzh4TEdPd09qYlFh',
        ASP_CLIENT_ID: 'ASP9X1W9UCPOOQGDKZS',
        ASP_CLIENT_SECRET: '3556d020-7230-45f8-8da9-d407360ef970',
      },
      PROMOTION_URL:
        'https://devfin.ril.com/MASP_Services/API/V1.0/ProductDetail',
      COMPUTRON: {
        CLIENT_ID: '62b9c6007c7f826714467d11',
        CLIENT_SECRET: '1f9frIkqG',
        CLIENT_SALT:
          '5219292c99a986c71102817897482a8b91c2bcc849f5edd4483e9190d4f5cdc2',
        MAIN_URL: 'https://api.jiox2.de/__jiomart/oms',
      },
      HOGWARTS: {
        CLIENT_ID: '62b9c6007c7f826714467d11',
        CLIENT_SECRET: '1f9frIkqG',
        CLIENT_SALT:
          '5219292c99a986c71102817897482a8b91c2bcc849f5edd4483e9190d4f5cdc2',
      },
      STORMBREAKER: {
        MAIN_URL: 'https://api.jiox2.de/__jiomart/logistics',
        INTERNAL_URL: 'https://api.jiox2.de/__jiomart/logistics-internal',
        X_OMS_APPLICATION_ID: 'morningstar',
        X_OMS_APPLICATION_TOKEN: '311E6D8D5C295512CE4BC6BBD413F',
      },
      MEGATRON: {
        MAIN_URL: 'https://api.jiox0.de/platform/cart/',
      },
      RPOS: {
        MAIN_URL:
          'https://devfin.ril.com/OnlineOrderingAPI_FYND/Api/v1.0/Checkout',
        GT_MAIN_URL: '',
        CREDENTIAL: {
          USERNAME: 'O!mU$er',
          PASSWORD: 'P@ssw0rd',
        },
      },
      CUSTOMER_DATA: {
        MAIN_URL: 'https://test-jiomart.netmeds.com/mst/rest/v1',
      },
      FYND_OMS: {
        MAIN_URL:
          'https://api.jiox0.de/__jiomart/oms/external/api/v1/asp/order/create/',
        CREDENTIAL: {
          INTEGRATION_ID: '5ea6821b3425bb07c82a25c1',
          INTEGRATION_TOKEN: 'qO2p_wQkq',
        },
      },
      JIO_PAY_URL: {
        MAIN_URL: 'https://api.jiox0.de/service/application/payment',
      },
      CLIENT_CERIFICATES: {
        GT_CERT: 'masp_pem_jiox5.pem',
        GT_KEY: 'masp_pem_jiox5.pem',
      },
      PRISM: {
        MAIN_URL: 'https://api.jiox0.de/prism',
      },
      JUSPAY_EMI_BASIC_AUTH: 'MTc0RTUxMkQ4OUU0MjY0QjRGNUEwN0Y4RjM5QTIwOg==',
      TENANT_IDS: ['1005'],
      EMI_CHECKSUM_KEY:
        'RDSDSDSJDKSMDWOIWPIOEWDKLSDSLJDKLSZQAAKDJSLKDJSLXEWIYOIWEASIURSKALWALSALSDSJDKLSDSOJDKLSDJSLKDPPLKDJSLDEDBBDSDSDDSDSDSDSDSDSDSD',
      FDK: {
        CLIENT_ID: config.PARTNERS_API_KEY,
        CLIENT_SECRET: config.PARTNERS_API_SECRET,
        CLUSTER_URL: 'https://api.jiox0.de',
      },
      FIELD_FORCE_CREDENTIALS: {
        USERNAME: 'FIELD_FORCE',
        PASSWORD: 'ASP@890fieldForce',
        SECRET: 'ThisISASecret',
      },
      GST_Encrypt_Key: '3Rwmhqk1VP',
      INVOICE_ENIGMA: {
        CLIENT_ID: '62b9c6007c7f826714467d11',
        CLIENT_SECRET: '1f9frIkqG',
        CLIENT_SALT:
          '5219292c99a986c71102817897482a8b91c2bcc849f5edd4483e9190d4f5cdc2',
        MAIN_URL: 'https://api.jiox0.de/__jiomart/oms',
      },
      OTP_LOGIN_URL:
        'https://jio-clickstream-product-suggestion.extensions.jiox0.de',
      CACHE_DOMAIN: 'jmd-b2b.jiohostx0.de',
    },
    '605c6efd5ab8c845def75ae3': {
      TEST_CONFIG: 'JIOX0 asp2.0',
      EMI_CHANNEL_ID: 'JMDASP',
      FILTER: false,
      FE_CHANNEL_ID: 'asp',
      EMI_URL: 'https://rtss-sit.jioconnect.com/MappServer5/pinelab/offers',
      GST_CONFIG: {
        TOKEN_URL: 'https://jiogst-sit.gw.jio.com/token',
        GST_VALIDATE_URL: 'https://jiogst-sit.gw.jio.com/PublicSearch/1.0',
        MUTUAL_SSL_KEY: 'd2c138f3-3f74-44f4-893e-f9f27b147d1d',
        SIGNATURE:
          'eVz+l/PXgAhrYm2rFMH9hBiZfCcpRSnBsKi29g6XiOzrma68DGQi4fVyRa63majNk7PHqENdyPLgl44aPbSE7zN75Hgi8+2Th1ujZRKkfiAPgIHvbi2D1c2I9rK1nyGd80s+X+doBeEz76o4Z5MXjeyUpaUts2CYW4fcgDud30K37zTWLTgqFY4VDHy725DmJacPUlA78x3uLoUVGnt1abP8Dlh3PM7hL6zqj4iVLkpy/cQ8SzjyCuEXauyQPO+nN6zs/frtIF++aquANiMn5XUySuvL0sx1S76hwH/WpIC0IsqTktprsZDSUNuhaL1sA6+omr0kT955e16l11IQnw==',
        AUTH: 'Basic NTlmTEJBbmY4WkR1djhidFRUQUZSZGpxdkNzYTpVVjdPN004RVFhNkIzdmowUzh4TEdPd09qYlFh',
        ASP_CLIENT_ID: 'ASP9X1W9UCPOOQGDKZS',
        ASP_CLIENT_SECRET: '3556d020-7230-45f8-8da9-d407360ef970',
      },
      PROMOTION_URL:
        'https://devfin.ril.com/MASP_Services/API/V1.0/ProductDetail',
      COMPUTRON: {
        CLIENT_ID: '62b9c6007c7f826714467d11',
        CLIENT_SECRET: '1f9frIkqG',
        CLIENT_SALT:
          '5219292c99a986c71102817897482a8b91c2bcc849f5edd4483e9190d4f5cdc2',
        MAIN_URL: 'https://api.jiox2.de/__jiomart/oms',
      },
      HOGWARTS: {
        CLIENT_ID: '62b9c6007c7f826714467d11',
        CLIENT_SECRET: '1f9frIkqG',
        CLIENT_SALT:
          '5219292c99a986c71102817897482a8b91c2bcc849f5edd4483e9190d4f5cdc2',
      },
      STORMBREAKER: {
        MAIN_URL: 'https://api.jiox2.de/__jiomart/logistics',
        INTERNAL_URL: 'https://api.jiox2.de/__jiomart/logistics-internal',
        X_OMS_APPLICATION_ID: 'morningstar',
        X_OMS_APPLICATION_TOKEN: '311E6D8D5C295512CE4BC6BBD413F',
      },
      MEGATRON: {
        MAIN_URL: 'https://api.jiox0.de/platform/cart/',
      },
      RPOS: {
        MAIN_URL:
          'https://devfin.ril.com/OnlineOrderingAPI_FYND/Api/v1.0/Checkout',
        GT_MAIN_URL: '',
        CREDENTIAL: {
          USERNAME: 'O!mU$er',
          PASSWORD: 'P@ssw0rd',
        },
      },
      CUSTOMER_DATA: {
        MAIN_URL: 'https://test-jiomart.netmeds.com/mst/rest/v1',
      },
      FYND_OMS: {
        MAIN_URL:
          'https://api.jiox0.de/__jiomart/oms/external/api/v1/asp/order/create/',
        CREDENTIAL: {
          INTEGRATION_ID: '5ea6821b3425bb07c82a25c1',
          INTEGRATION_TOKEN: 'qO2p_wQkq',
        },
      },
      JIO_PAY_URL: {
        MAIN_URL: 'https://api.jiox0.de/service/application/payment',
      },
      CLIENT_CERIFICATES: {
        GT_CERT: 'masp_pem_jiox5.pem',
        GT_KEY: 'masp_pem_jiox5.pem',
      },
      PRISM: {
        MAIN_URL: 'https://api.jiox0.de/prism',
      },
      JUSPAY_EMI_BASIC_AUTH: 'MTc0RTUxMkQ4OUU0MjY0QjRGNUEwN0Y4RjM5QTIwOg==',
      TENANT_IDS: ['1005'],
      EMI_CHECKSUM_KEY:
        'RDSDSDSJDKSMDWOIWPIOEWDKLSDSLJDKLSZQAAKDJSLKDJSLXEWIYOIWEASIURSKALWALSALSDSJDKLSDSOJDKLSDJSLKDPPLKDJSLDEDBBDSDSDDSDSDSDSDSDSDSD',
      FDK: {
        CLIENT_ID: config.PARTNERS_API_KEY,
        CLIENT_SECRET: config.PARTNERS_API_SECRET,
        CLUSTER_URL: 'https://api.jiox0.de',
      },
      FIELD_FORCE_CREDENTIALS: {
        USERNAME: 'FIELD_FORCE',
        PASSWORD: 'ASP@890fieldForce',
        SECRET: 'ThisISASecret',
      },
      GST_Encrypt_Key: '3Rwmhqk1VP',
      OTP_LOGIN_URL:
        'https://jio-clickstream-product-suggestion.extensions.jiox0.de',
      CACHE_DOMAIN: 'jiomart-asp.jiohostx0.de',
    },
    asp1: {
      TEST_CONFIG: 'JIOX0 asp1.0',
      EMI_CHANNEL_ID: 'RPOSASP',
      FE_CHANNEL_ID: 'asp',
      EMI_URL: 'https://rtss-sit.jioconnect.com/MappServer5/pinelab/offers',
      GST_CONFIG: {
        TOKEN_URL: 'https://jiogst-sit.gw.jio.com/token',
        GST_VALIDATE_URL: 'https://jiogst-sit.gw.jio.com/PublicSearch/1.0',
        MUTUAL_SSL_KEY: 'd2c138f3-3f74-44f4-893e-f9f27b147d1d',
        SIGNATURE:
          'eVz+l/PXgAhrYm2rFMH9hBiZfCcpRSnBsKi29g6XiOzrma68DGQi4fVyRa63majNk7PHqENdyPLgl44aPbSE7zN75Hgi8+2Th1ujZRKkfiAPgIHvbi2D1c2I9rK1nyGd80s+X+doBeEz76o4Z5MXjeyUpaUts2CYW4fcgDud30K37zTWLTgqFY4VDHy725DmJacPUlA78x3uLoUVGnt1abP8Dlh3PM7hL6zqj4iVLkpy/cQ8SzjyCuEXauyQPO+nN6zs/frtIF++aquANiMn5XUySuvL0sx1S76hwH/WpIC0IsqTktprsZDSUNuhaL1sA6+omr0kT955e16l11IQnw==',
        AUTH: 'Basic NTlmTEJBbmY4WkR1djhidFRUQUZSZGpxdkNzYTpVVjdPN004RVFhNkIzdmowUzh4TEdPd09qYlFh',
        ASP_CLIENT_ID: 'ASP9X1W9UCPOOQGDKZS',
        ASP_CLIENT_SECRET: '3556d020-7230-45f8-8da9-d407360ef970',
      },
      PROMOTION_URL:
        'https://devfin.ril.com/MASP_Services/API/V1.0/ProductDetail',
      COMPUTRON: {
        CLIENT_ID: '62b9c6007c7f826714467d11',
        CLIENT_SECRET: '1f9frIkqG',
        CLIENT_SALT:
          '5219292c99a986c71102817897482a8b91c2bcc849f5edd4483e9190d4f5cdc2',
        MAIN_URL: 'https://api.jiox2.de/__jiomart/oms',
      },
      HOGWARTS: {
        CLIENT_ID: '62b9c6007c7f826714467d11',
        CLIENT_SECRET: '1f9frIkqG',
        CLIENT_SALT:
          '5219292c99a986c71102817897482a8b91c2bcc849f5edd4483e9190d4f5cdc2',
      },
      STORMBREAKER: {
        MAIN_URL: 'https://api.jiox2.de/__jiomart/logistics',
        INTERNAL_URL: 'https://api.jiox2.de/__jiomart/logistics-internal',
        X_OMS_APPLICATION_ID: 'morningstar',
        X_OMS_APPLICATION_TOKEN: '311E6D8D5C295512CE4BC6BBD413F',
      },
      MEGATRON: {
        MAIN_URL: 'https://api.jiox0.de/platform/cart/',
      },
      RPOS: {
        MAIN_URL:
          'https://devfin.ril.com/OnlineOrderingAPI_FYND/Api/v1.0/Checkout',
        GT_MAIN_URL: '',
        CREDENTIAL: {
          USERNAME: 'O!mU$er',
          PASSWORD: 'P@ssw0rd',
        },
      },
      CUSTOMER_DATA: {
        MAIN_URL: 'https://test-jiomart.netmeds.com/mst/rest/v1',
      },
      FYND_OMS: {
        MAIN_URL:
          'https://api.jiox0.de/__jiomart/oms/external/api/v1/asp/order/create/',
        CREDENTIAL: {
          INTEGRATION_ID: '5ea6821b3425bb07c82a25c1',
          INTEGRATION_TOKEN: 'qO2p_wQkq',
        },
      },
      JIO_PAY_URL: {
        MAIN_URL: 'https://api.jiox0.de/service/application/payment',
      },
      CLIENT_CERIFICATES: {
        GT_CERT: 'masp_pem_jiox5.pem',
        GT_KEY: 'masp_pem_jiox5.pem',
      },
      PRISM: {
        MAIN_URL: 'https://api.jiox0.de/prism',
      },
      JUSPAY_EMI_BASIC_AUTH: 'MTc0RTUxMkQ4OUU0MjY0QjRGNUEwN0Y4RjM5QTIwOg==',
      TENANT_IDS: ['1005'],
      EMI_CHECKSUM_KEY:
        'RDSDSDSJDKSMDWOIWPIOEWDKLSDSLJDKLSZQAAKDJSLKDJSLXEWIYOIWEASIURSKALWALSALSDSJDKLSDSOJDKLSDJSLKDPPLKDJSLDEDBBDSDSDDSDSDSDSDSDSDSD',
      FDK: {
        CLIENT_ID: config.PARTNERS_API_KEY,
        CLIENT_SECRET: config.PARTNERS_API_SECRET,
        CLUSTER_URL: 'https://api.jiox0.de',
      },
      FIELD_FORCE_CREDENTIALS: {
        USERNAME: 'FIELD_FORCE',
        PASSWORD: 'ASP@890fieldForce',
        SECRET: 'ThisISASecret',
      },
      GST_Encrypt_Key: '3Rwmhqk1VP',
      OTP_LOGIN_URL:
        'https://jio-clickstream-product-suggestion.extensions.jiox0.de',
      CACHE_DOMAIN: 'jiomart-asp.jiohostx0.de',
    },
  },
  jiox5: {
    ASP_APP_ID: '630622061aa19c15338475d1',
    TEST_CONFIG: 'JIOX5 flat',
    EMI_URL: 'https://rtss-replica.jiolabs.com/MappServer3/pinelab/offers',
    FE_CHANNEL_ID: 'asp',
    GST_CONFIG: {
      TOKEN_URL: 'https://jiogst-sit.gw.jio.com/token',
      GST_VALIDATE_URL: 'https://jiogst-sit.gw.jio.com/PublicSearch/1.0',
      MUTUAL_SSL_KEY: 'd2c138f3-3f74-44f4-893e-f9f27b147d1d',
      SIGNATURE:
        'eVz+l/PXgAhrYm2rFMH9hBiZfCcpRSnBsKi29g6XiOzrma68DGQi4fVyRa63majNk7PHqENdyPLgl44aPbSE7zN75Hgi8+2Th1ujZRKkfiAPgIHvbi2D1c2I9rK1nyGd80s+X+doBeEz76o4Z5MXjeyUpaUts2CYW4fcgDud30K37zTWLTgqFY4VDHy725DmJacPUlA78x3uLoUVGnt1abP8Dlh3PM7hL6zqj4iVLkpy/cQ8SzjyCuEXauyQPO+nN6zs/frtIF++aquANiMn5XUySuvL0sx1S76hwH/WpIC0IsqTktprsZDSUNuhaL1sA6+omr0kT955e16l11IQnw==',
      AUTH: 'Basic NTlmTEJBbmY4WkR1djhidFRUQUZSZGpxdkNzYTpVVjdPN004RVFhNkIzdmowUzh4TEdPd09qYlFh',
      ASP_CLIENT_ID: 'ASP9X1W9UCPOOQGDKZS',
      ASP_CLIENT_SECRET: '3556d020-7230-45f8-8da9-d407360ef970',
    },
    PROMOTION_URL:
      'https://devfin.ril.com/MASP_Services/API/V1.0/ProductDetail',
    COMPUTRON: {
      CLIENT_ID: '635d3cee565dc682a6477827',
      CLIENT_SECRET: 'HEm8uZdr_',
      CLIENT_SALT:
        '912839fd9a57a83c660d0d904a5c6bd61191503f1adf62c7d8f60b9b3026d073',
      MAIN_URL: 'https://api.jiox3.de/__jiomart/oms',
    },
    HOGWARTS: {
      CLIENT_ID: '635d3cee565dc682a6477827',
      CLIENT_SECRET: 'HEm8uZdr_',
      CLIENT_SALT:
        '912839fd9a57a83c660d0d904a5c6bd61191503f1adf62c7d8f60b9b3026d073',
    },
    STORMBREAKER: {
      MAIN_URL: 'https://api.jiox3.de/__jiomart/logistics',
      INTERNAL_URL: 'https://api.jiox3.de/__jiomart/logistics-internal',
      X_OMS_APPLICATION_ID: 'morningstar',
      X_OMS_APPLICATION_TOKEN: 'BByO2kGz9Fh9b2XLjPhFac6RbDFdv',
    },
    MEGATRON: {
      MAIN_URL: 'https://api.jiox5.de/platform/cart/',
    },
    RPOS: {
      MAIN_URL:
        'https://rpospreprod.ril.com/OnlineOrderingAPI_Fynd/Api/v1.0/Checkout',
      GT_MAIN_URL:
        'https://jioforever.rep.jio.com/OnlineOrderingAPI/Api/Checkout',
      CREDENTIAL: {
        USERNAME: 'O!mU$er',
        PASSWORD: 'P@ssw0rd',
      },
    },
    CUSTOMER_DATA: {
      MAIN_URL: 'https://preprod.jionetmeds.com/mst/rest/v1',
    },
    FYND_OMS: {
      MAIN_URL:
        'https://api.jiox5.de/__jiomart/oms/external/api/v1/asp/order/create/',
      CREDENTIAL: {
        INTEGRATION_ID: '5ea6821b3425bb07c82a25c1',
        INTEGRATION_TOKEN: 'qO2p_wQkq',
      },
    },
    JIO_PAY_URL: {
      MAIN_URL: 'https://api.jiox5.de/service/application/payment',
    },
    CLIENT_CERIFICATES: {
      GT_CERT: 'masp_pem_jiox5.pem',
      GT_KEY: 'masp_pem_jiox5.pem',
    },
    PRISM: {
      MAIN_URL: 'https://api.jiox5.de/prism',
    },
    JUSPAY_EMI_BASIC_AUTH: 'MTc0RTUxMkQ4OUU0MjY0QjRGNUEwN0Y4RjM5QTIwOg==',
    TENANT_IDS: ['1005'],
    EMI_CHECKSUM_KEY:
      'RDSDSDSJDKSMDWOIWPIOEWDKLSDSLJDKLSZQAAKDJSLKDJSLXEWIYOIWEASIURSKALWALSALSDSJDKLSDSOJDKLSDJSLKDPPLKDJSLDEDBBDSDSDDSDSDSDSDSDSDSD',
    FDK: {
      CLIENT_ID: config.PARTNERS_API_KEY,
      CLIENT_SECRET: config.PARTNERS_API_SECRET,
      CLUSTER_URL: 'https://api.jiox5.de',
    },
    FIELD_FORCE_CREDENTIALS: {
      USERNAME: 'FIELD_FORCE',
      PASSWORD: 'ASP@890fieldForce',
      SECRET: 'ThisISASecret',
    },
    GST_Encrypt_Key: '3Rwmhqk1VP',
    INVOICE_ENIGMA: {
      MAIN_URL: 'https://api.jiox5.de/__jiomart/oms',
    },
    OTP_LOGIN_URL: 'https://onboarding.jiox5.de',
    CACHE_DOMAIN: 'jmd-asp.jiohostx5.de',
    '608bbefa724f9df13166b545': {
      TEST_CONFIG: 'JIOX5 asp1.0',
      EMI_CHANNEL_ID: 'RPOSASP',
      FE_CHANNEL_ID: 'asp',
      FILTER: false,
      EMI_URL: 'https://rtss-replica.jiolabs.com/MappServer3/pinelab/offers',
      GST_CONFIG: {
        TOKEN_URL: 'https://jiogst-sit.gw.jio.com/token',
        GST_VALIDATE_URL: 'https://jiogst-sit.gw.jio.com/PublicSearch/1.0',
        MUTUAL_SSL_KEY: 'd2c138f3-3f74-44f4-893e-f9f27b147d1d',
        SIGNATURE:
          'eVz+l/PXgAhrYm2rFMH9hBiZfCcpRSnBsKi29g6XiOzrma68DGQi4fVyRa63majNk7PHqENdyPLgl44aPbSE7zN75Hgi8+2Th1ujZRKkfiAPgIHvbi2D1c2I9rK1nyGd80s+X+doBeEz76o4Z5MXjeyUpaUts2CYW4fcgDud30K37zTWLTgqFY4VDHy725DmJacPUlA78x3uLoUVGnt1abP8Dlh3PM7hL6zqj4iVLkpy/cQ8SzjyCuEXauyQPO+nN6zs/frtIF++aquANiMn5XUySuvL0sx1S76hwH/WpIC0IsqTktprsZDSUNuhaL1sA6+omr0kT955e16l11IQnw==',
        AUTH: 'Basic NTlmTEJBbmY4WkR1djhidFRUQUZSZGpxdkNzYTpVVjdPN004RVFhNkIzdmowUzh4TEdPd09qYlFh',
        ASP_CLIENT_ID: 'ASP9X1W9UCPOOQGDKZS',
        ASP_CLIENT_SECRET: '3556d020-7230-45f8-8da9-d407360ef970',
      },
      PROMOTION_URL:
        'https://devfin.ril.com/MASP_Services/API/V1.0/ProductDetail',
      COMPUTRON: {
        CLIENT_ID: '635d3cee565dc682a6477827',
        CLIENT_SECRET: 'HEm8uZdr_',
        CLIENT_SALT:
          '912839fd9a57a83c660d0d904a5c6bd61191503f1adf62c7d8f60b9b3026d073',
        MAIN_URL: 'https://api.jiox3.de/__jiomart/oms',
      },
      HOGWARTS: {
        CLIENT_ID: '635d3cee565dc682a6477827',
        CLIENT_SECRET: 'HEm8uZdr_',
        CLIENT_SALT:
          '912839fd9a57a83c660d0d904a5c6bd61191503f1adf62c7d8f60b9b3026d073',
      },
      STORMBREAKER: {
        MAIN_URL: 'https://api.jiox3.de/__jiomart/logistics',
        INTERNAL_URL: 'https://api.jiox3.de/__jiomart/logistics-internal',
        X_OMS_APPLICATION_ID: 'morningstar',
        X_OMS_APPLICATION_TOKEN: 'BByO2kGz9Fh9b2XLjPhFac6RbDFdv',
      },
      MEGATRON: {
        MAIN_URL: 'https://api.jiox5.de/platform/cart/',
      },
      RPOS: {
        MAIN_URL:
          'https://rpospreprod.ril.com/OnlineOrderingAPI_Fynd/Api/v1.0/Checkout',
        GT_MAIN_URL:
          'https://jioforever.rep.jio.com/OnlineOrderingAPI/Api/Checkout',
        CREDENTIAL: {
          USERNAME: 'O!mU$er',
          PASSWORD: 'P@ssw0rd',
        },
      },
      CUSTOMER_DATA: {
        MAIN_URL: 'https://preprod.jionetmeds.com/mst/rest/v1',
      },
      FYND_OMS: {
        MAIN_URL:
          'https://api.jiox5.de/__jiomart/oms/external/api/v1/asp/order/create/',
        CREDENTIAL: {
          INTEGRATION_ID: '5ea6821b3425bb07c82a25c1',
          INTEGRATION_TOKEN: 'qO2p_wQkq',
        },
      },
      JIO_PAY_URL: {
        MAIN_URL: 'https://api.jiox5.de/service/application/payment',
      },
      CLIENT_CERIFICATES: {
        GT_CERT: 'masp_pem_jiox5.pem',
        GT_KEY: 'masp_pem_jiox5.pem',
      },
      PRISM: {
        MAIN_URL: 'https://api.jiox5.de/prism',
      },
      JUSPAY_EMI_BASIC_AUTH: 'MTc0RTUxMkQ4OUU0MjY0QjRGNUEwN0Y4RjM5QTIwOg==',
      TENANT_IDS: ['1005'],
      EMI_CHECKSUM_KEY:
        'RDSDSDSJDKSMDWOIWPIOEWDKLSDSLJDKLSZQAAKDJSLKDJSLXEWIYOIWEASIURSKALWALSALSDSJDKLSDSOJDKLSDJSLKDPPLKDJSLDEDBBDSDSDDSDSDSDSDSDSDSD',
      FDK: {
        CLIENT_ID: config.PARTNERS_API_KEY,
        CLIENT_SECRET: config.PARTNERS_API_SECRET,
        CLUSTER_URL: 'https://api.jiox5.de',
      },
      FIELD_FORCE_CREDENTIALS: {
        USERNAME: 'FIELD_FORCE',
        PASSWORD: 'ASP@890fieldForce',
        SECRET: 'ThisISASecret',
      },
      GST_Encrypt_Key: '3Rwmhqk1VP',
      OTP_LOGIN_URL: 'https://onboarding.jiox5.de',
      CACHE_DOMAIN: 'jmd-asp.jiohostx5.de',
    },
    '630622061aa19c15338475d1': {
      TEST_CONFIG: 'JIOX5 asp2',
      FE_CHANNEL_ID: 'asp',
      EMI_CHANNEL_ID: 'JMDASP',
      FILTER: false,
      EMI_URL: 'https://rtss-replica.jiolabs.com/MappServer3/pinelab/offers',
      GST_CONFIG: {
        TOKEN_URL: 'https://jiogst-sit.gw.jio.com/token',
        GST_VALIDATE_URL: 'https://jiogst-sit.gw.jio.com/PublicSearch/1.0',
        MUTUAL_SSL_KEY: 'd2c138f3-3f74-44f4-893e-f9f27b147d1d',
        SIGNATURE:
          'eVz+l/PXgAhrYm2rFMH9hBiZfCcpRSnBsKi29g6XiOzrma68DGQi4fVyRa63majNk7PHqENdyPLgl44aPbSE7zN75Hgi8+2Th1ujZRKkfiAPgIHvbi2D1c2I9rK1nyGd80s+X+doBeEz76o4Z5MXjeyUpaUts2CYW4fcgDud30K37zTWLTgqFY4VDHy725DmJacPUlA78x3uLoUVGnt1abP8Dlh3PM7hL6zqj4iVLkpy/cQ8SzjyCuEXauyQPO+nN6zs/frtIF++aquANiMn5XUySuvL0sx1S76hwH/WpIC0IsqTktprsZDSUNuhaL1sA6+omr0kT955e16l11IQnw==',
        AUTH: 'Basic NTlmTEJBbmY4WkR1djhidFRUQUZSZGpxdkNzYTpVVjdPN004RVFhNkIzdmowUzh4TEdPd09qYlFh',
        ASP_CLIENT_ID: 'ASP9X1W9UCPOOQGDKZS',
        ASP_CLIENT_SECRET: '3556d020-7230-45f8-8da9-d407360ef970',
      },
      PROMOTION_URL:
        'https://devfin.ril.com/MASP_Services/API/V1.0/ProductDetail',
      COMPUTRON: {
        CLIENT_ID: '635d3cee565dc682a6477827',
        CLIENT_SECRET: 'HEm8uZdr_',
        CLIENT_SALT:
          '912839fd9a57a83c660d0d904a5c6bd61191503f1adf62c7d8f60b9b3026d073',
        MAIN_URL: 'https://api.jiox3.de/__jiomart/oms',
      },
      HOGWARTS: {
        CLIENT_ID: '635d3cee565dc682a6477827',
        CLIENT_SECRET: 'HEm8uZdr_',
        CLIENT_SALT:
          '912839fd9a57a83c660d0d904a5c6bd61191503f1adf62c7d8f60b9b3026d073',
      },
      STORMBREAKER: {
        MAIN_URL: 'https://api.jiox3.de/__jiomart/logistics',
        INTERNAL_URL: 'https://api.jiox3.de/__jiomart/logistics-internal',
        X_OMS_APPLICATION_ID: 'morningstar',
        X_OMS_APPLICATION_TOKEN: 'BByO2kGz9Fh9b2XLjPhFac6RbDFdv',
      },
      MEGATRON: {
        MAIN_URL: 'https://api.jiox5.de/platform/cart/',
      },
      RPOS: {
        MAIN_URL:
          'https://devfin.ril.com/OnlineOrderingAPI_FYND/Api/v1.0/Checkout',
        GT_MAIN_URL:
          'https://jioforever.rep.jio.com/OnlineOrderingAPI/Api/Checkout',
        CREDENTIAL: {
          USERNAME: 'O!mU$er',
          PASSWORD: 'P@ssw0rd',
        },
      },
      CUSTOMER_DATA: {
        MAIN_URL: 'https://preprod.jionetmeds.com/mst/rest/v1',
      },
      FYND_OMS: {
        MAIN_URL:
          'https://api.jiox5.de/__jiomart/oms/external/api/v1/asp/order/create/',
        CREDENTIAL: {
          INTEGRATION_ID: '5ea6821b3425bb07c82a25c1',
          INTEGRATION_TOKEN: 'qO2p_wQkq',
        },
      },
      JIO_PAY_URL: {
        MAIN_URL: 'https://api.jiox5.de/service/application/payment',
      },
      CLIENT_CERIFICATES: {
        GT_CERT: 'masp_pem_jiox5.pem',
        GT_KEY: 'masp_pem_jiox5.pem',
      },
      PRISM: {
        MAIN_URL: 'https://api.jiox5.de/prism',
      },
      JUSPAY_EMI_BASIC_AUTH: 'MTc0RTUxMkQ4OUU0MjY0QjRGNUEwN0Y4RjM5QTIwOg==',
      TENANT_IDS: ['1005'],
      EMI_CHECKSUM_KEY:
        'RDSDSDSJDKSMDWOIWPIOEWDKLSDSLJDKLSZQAAKDJSLKDJSLXEWIYOIWEASIURSKALWALSALSDSJDKLSDSOJDKLSDJSLKDPPLKDJSLDEDBBDSDSDDSDSDSDSDSDSDSD',
      FDK: {
        CLIENT_ID: config.PARTNERS_API_KEY,
        CLIENT_SECRET: config.PARTNERS_API_SECRET,
        CLUSTER_URL: 'https://api.jiox5.de',
      },
      FIELD_FORCE_CREDENTIALS: {
        USERNAME: 'FIELD_FORCE',
        PASSWORD: 'ASP@890fieldForce',
        SECRET: 'ThisISASecret',
      },
      GST_Encrypt_Key: '3Rwmhqk1VP',
      OTP_LOGIN_URL: 'https://onboarding.jiox5.de',
      CACHE_DOMAIN: 'jmd-asp2.jiohostx5.de',
    },
    '62b2fb8edc9579dd934f3d9f': {
      TEST_CONFIG: 'JIOX5 b2b',
      EMI_CHANNEL_ID: 'RPOSASP',
      FE_CHANNEL_ID: 'b2b',
      FILTER: true,
      EMI_URL: 'https://rtss-replica.jiolabs.com/MappServer3/pinelab/offers',
      GST_CONFIG: {
        TOKEN_URL: 'https://jiogst-sit.gw.jio.com/token',
        GST_VALIDATE_URL: 'https://jiogst-sit.gw.jio.com/PublicSearch/1.0',
        MUTUAL_SSL_KEY: 'd2c138f3-3f74-44f4-893e-f9f27b147d1d',
        SIGNATURE:
          'eVz+l/PXgAhrYm2rFMH9hBiZfCcpRSnBsKi29g6XiOzrma68DGQi4fVyRa63majNk7PHqENdyPLgl44aPbSE7zN75Hgi8+2Th1ujZRKkfiAPgIHvbi2D1c2I9rK1nyGd80s+X+doBeEz76o4Z5MXjeyUpaUts2CYW4fcgDud30K37zTWLTgqFY4VDHy725DmJacPUlA78x3uLoUVGnt1abP8Dlh3PM7hL6zqj4iVLkpy/cQ8SzjyCuEXauyQPO+nN6zs/frtIF++aquANiMn5XUySuvL0sx1S76hwH/WpIC0IsqTktprsZDSUNuhaL1sA6+omr0kT955e16l11IQnw==',
        AUTH: 'Basic NTlmTEJBbmY4WkR1djhidFRUQUZSZGpxdkNzYTpVVjdPN004RVFhNkIzdmowUzh4TEdPd09qYlFh',
        ASP_CLIENT_ID: 'ASP9X1W9UCPOOQGDKZS',
        ASP_CLIENT_SECRET: '3556d020-7230-45f8-8da9-d407360ef970',
      },
      PROMOTION_URL:
        'https://devfin.ril.com/MASP_Services/API/V1.0/ProductDetail',
      COMPUTRON: {
        CLIENT_ID: '635d3cee565dc682a6477827',
        CLIENT_SECRET: 'HEm8uZdr_',
        CLIENT_SALT:
          '912839fd9a57a83c660d0d904a5c6bd61191503f1adf62c7d8f60b9b3026d073',
        MAIN_URL: 'https://api.jiox3.de/__jiomart/oms',
      },
      HOGWARTS: {
        CLIENT_ID: '635d3cee565dc682a6477827',
        CLIENT_SECRET: 'HEm8uZdr_',
        CLIENT_SALT:
          '912839fd9a57a83c660d0d904a5c6bd61191503f1adf62c7d8f60b9b3026d073',
      },
      STORMBREAKER: {
        MAIN_URL: 'https://api.jiox3.de/__jiomart/logistics',
        INTERNAL_URL: 'https://api.jiox3.de/__jiomart/logistics-internal',
        X_OMS_APPLICATION_ID: 'morningstar',
        X_OMS_APPLICATION_TOKEN: 'BByO2kGz9Fh9b2XLjPhFac6RbDFdv',
      },
      MEGATRON: {
        MAIN_URL: 'https://api.jiox5.de/platform/cart/',
      },
      RPOS: {
        MAIN_URL:
          'https://devfin.ril.com/OnlineOrderingAPI_FYND/Api/v1.0/Checkout',
        GT_MAIN_URL:
          'https://jioforever.rep.jio.com/OnlineOrderingAPI/Api/Checkout',
        CREDENTIAL: {
          USERNAME: 'O!mU$er',
          PASSWORD: 'P@ssw0rd',
        },
      },
      CUSTOMER_DATA: {
        MAIN_URL: 'https://preprod.jionetmeds.com/mst/rest/v1',
      },
      FYND_OMS: {
        MAIN_URL:
          'https://api.jiox5.de/__jiomart/oms/external/api/v1/asp/order/create/',
        CREDENTIAL: {
          INTEGRATION_ID: '5ea6821b3425bb07c82a25c1',
          INTEGRATION_TOKEN: 'qO2p_wQkq',
        },
      },
      JIO_PAY_URL: {
        MAIN_URL: 'https://api.jiox5.de/service/application/payment',
      },
      CLIENT_CERIFICATES: {
        GT_CERT: 'masp_pem_jiox5.pem',
        GT_KEY: 'masp_pem_jiox5.pem',
      },
      PRISM: {
        MAIN_URL: 'https://api.jiox5.de/prism',
      },
      JUSPAY_EMI_BASIC_AUTH: 'MTc0RTUxMkQ4OUU0MjY0QjRGNUEwN0Y4RjM5QTIwOg==',
      TENANT_IDS: ['1005'],
      EMI_CHECKSUM_KEY:
        'RDSDSDSJDKSMDWOIWPIOEWDKLSDSLJDKLSZQAAKDJSLKDJSLXEWIYOIWEASIURSKALWALSALSDSJDKLSDSOJDKLSDJSLKDPPLKDJSLDEDBBDSDSDDSDSDSDSDSDSDSD',
      FDK: {
        CLIENT_ID: config.PARTNERS_API_KEY,
        CLIENT_SECRET: config.PARTNERS_API_SECRET,
        CLUSTER_URL: 'https://api.jiox5.de',
      },
      FIELD_FORCE_CREDENTIALS: {
        USERNAME: 'FIELD_FORCE',
        PASSWORD: 'ASP@890fieldForce',
        SECRET: 'ThisISASecret',
      },
      GST_Encrypt_Key: '3Rwmhqk1VP',
      INVOICE_ENIGMA: {
        CLIENT_ID: '635d3cee565dc682a6477827',
        CLIENT_SECRET: 'HEm8uZdr_',
        CLIENT_SALT:
          '912839fd9a57a83c660d0d904a5c6bd61191503f1adf62c7d8f60b9b3026d073',
        MAIN_URL: 'https://api.jiox5.de/__jiomart/oms',
      },
      OTP_LOGIN_URL: 'https://onboarding.jiox5.de',
      CACHE_DOMAIN: 'jmd-b2b.jiohostx5.de',
    },
  },
  jioretailer: {
    ASP_APP_ID: '6316fc9b3fafc461e8639aaf',
    TEST_CONFIG: 'JIOretailer flat',
    FE_CHANNEL_ID: 'asp',
    EMI_URL: 'https://rtss-prod.jioconnect.com/MappServer3/pinelab/offers',
    GST_CONFIG: {
      TOKEN_URL: 'https://gw.jiogst.com/token',
      GST_VALIDATE_URL: 'https://gw.jiogst.com/PublicSearch/1.0',
      MUTUAL_SSL_KEY: '0c10c485-f81b-47c9-974d-abe26475c3f4',
      SIGNATURE:
        'DHOY7YruJgHk2kRc1a1jKz6awd1vJYc0cErtXj/uTHrBYjVT49qHAylBTSdQNU6eBt4y38GksEMVKNBa5eW/d1yxNgdv6J8AGCPfyh3o1EstVD527V6aPlleq/SUM6nA2Gqk2fOz0CBxfN2Ov2kmTU8rOTpangxLVVkp2ueCb4zX2kieVx3qwh5iNUk9xjoAfrACQl2fR2XJKCkAUxLE2u+YGMc/e6wG/lH8OhB8BmXRorORi7+74p4lp31X8qxi7k6cWR5pXhdv4X4R+LEbb/giSflqbySdzaOEO9SwV4a83nBax6LLMZTEpuiUELpHtXAGVwq+RCs54uz+qNKynQ==',
      AUTH: 'Basic VnNLeGtONWYyRUQ0Z3IzbFJKVTdBQThFYW5jYTpIRFZKSDBkVEpVbllrdlg4ZlJnaTZ3dUdoQ2Nh',
      ASP_CLIENT_ID: 'FYND02LWY938D95TGUN5XM',
      ASP_CLIENT_SECRET: '600af1ae-e20e-44f9-9e28-37a1c44262fb',
    },
    PROMOTION_URL:
      'https://devfin.ril.com/MASP_Services/API/V1.0/ProductDetail', // @ToDo need to replace
    COMPUTRON: {
      CLIENT_ID: '609115887ded7831b69763a2',
      CLIENT_SECRET: 'rwvMUMQ8I',
      CLIENT_SALT:
        '709856d66fc64251b8aef10b79bbae80f913d7345597529248e9ff3331757761',
      MAIN_URL: 'https://api.jioecomm.com/__jiomart/oms',
    },
    STORMBREAKER: {
      MAIN_URL: 'https://api.jioecomm.com/__jiomart/logistics',
      INTERNAL_URL: 'https://api.jioecomm.com/__jiomart/logistics-internal',
      X_OMS_APPLICATION_ID: '5ea6821b3425bb07c82a25c1',
      X_OMS_APPLICATION_TOKEN: 'qO2p_wQkq',
    },
    MEGATRON: {
      MAIN_URL: 'https://api.jioretailer.com/platform/cart/',
    },
    FYND_OMS: {
      MAIN_URL:
        'https://api.jioretailer.com/__jiomart/oms/external/api/v1/asp/order/create/',
      CREDENTIAL: {
        INTEGRATION_ID: '63158ca6efee85199c540a61',
        INTEGRATION_TOKEN: 'LdI_XPdQ_',
        CLIENT_SALT:
          '8dc111288fec857a788a2e0b16902215987b2c809cc13c87d0082fd33dc9df01',
      },
    },
    HOGWARTS: {
      CLIENT_ID: '63158ca6efee85199c540a61',
      CLIENT_SECRET: 'LdI_XPdQ_',
      CLIENT_SALT:
        '8dc111288fec857a788a2e0b16902215987b2c809cc13c87d0082fd33dc9df01',
    },
    RPOS: {
      // @ToDo need to replace @vikas
      MAIN_URL:
        'https://finten.ril.com/OnlineOrderingAPI_Fynd/Api/v1.0/Checkout',
      GT_MAIN_URL: 'https://masp.jio.com/OnlineOrderingAPI/Api/Checkout',
      CREDENTIAL: {
        USERNAME: 'O!mU$er',
        PASSWORD: 'P@ssw0rd',
      },
    },
    CUSTOMER_DATA: {
      MAIN_URL: 'https://www.jiomart.com/mst/rest/v1',
    },
    JIO_PAY_URL: {
      MAIN_URL: 'https://api.jioretailer.com/service/application/payment',
    },
    CLIENT_CERIFICATES: {
      GT_CERT: 'masp_pem_jioretailer.crt',
      GT_KEY: 'masp_pem_jioretailer.pem',
    },
    PRISM: {
      MAIN_URL: 'https://api.jioretailer.com/prism',
    },
    JUSPAY_EMI_BASIC_AUTH: 'NTk4QUM4NUVEOTc0ODZEOTAzMjJCQjM3MTFERjE5Og==',
    TENANT_IDS: ['1004'],
    EMI_CHECKSUM_KEY:
      'ASDHSREIURQASNAMSNASASLKAKSDJSDKSKLDWOIWPIOEWDKLSLOOKMEKLSDJSLKDJSLKDJSLDEWIEOIWEASKALSKALSALSASSDSJDKLSDSLJDKLSDJSLKDJSLKDLESE',
    FDK: {
      CLIENT_ID: config.PARTNERS_API_KEY,
      CLIENT_SECRET: config.PARTNERS_API_SECRET,
      CLUSTER_URL: 'https://api.jioretailer.com',
    },
    GST_Encrypt_Key: '3Rwmhqk1VP',
    INVOICE_ENIGMA: {
      MAIN_URL: 'https://api.jioretailer.com/__jiomart/oms',
    },
    FIELD_FORCE_CREDENTIALS: {
      USERNAME: 'FIELD_FORCE',
      PASSWORD: 'ASP@890fieldForce',
      SECRET: 'ThisISASecret',
    },
    OTP_LOGIN_URL: 'https://onboarding.jiomartdigital.com',
    CACHE_DOMAIN: 'jmd-asp.jiostore.online',
    '608bbefa724f9df13166b545': {
      TEST_CONFIG: 'JIOretailer asp1',
      EMI_CHANNEL_ID: 'RPOSASP',
      FILTER: false,
      FE_CHANNEL_ID: 'asp',
      EMI_URL: 'https://rtss-prod.jioconnect.com/MappServer3/pinelab/offers',
      GST_CONFIG: {
        TOKEN_URL: 'https://gw.jiogst.com/token',
        GST_VALIDATE_URL: 'https://gw.jiogst.com/PublicSearch/1.0',
        MUTUAL_SSL_KEY: '0c10c485-f81b-47c9-974d-abe26475c3f4',
        SIGNATURE:
          'DHOY7YruJgHk2kRc1a1jKz6awd1vJYc0cErtXj/uTHrBYjVT49qHAylBTSdQNU6eBt4y38GksEMVKNBa5eW/d1yxNgdv6J8AGCPfyh3o1EstVD527V6aPlleq/SUM6nA2Gqk2fOz0CBxfN2Ov2kmTU8rOTpangxLVVkp2ueCb4zX2kieVx3qwh5iNUk9xjoAfrACQl2fR2XJKCkAUxLE2u+YGMc/e6wG/lH8OhB8BmXRorORi7+74p4lp31X8qxi7k6cWR5pXhdv4X4R+LEbb/giSflqbySdzaOEO9SwV4a83nBax6LLMZTEpuiUELpHtXAGVwq+RCs54uz+qNKynQ==',
        AUTH: 'Basic VnNLeGtONWYyRUQ0Z3IzbFJKVTdBQThFYW5jYTpIRFZKSDBkVEpVbllrdlg4ZlJnaTZ3dUdoQ2Nh',
        ASP_CLIENT_ID: 'FYND02LWY938D95TGUN5XM',
        ASP_CLIENT_SECRET: '600af1ae-e20e-44f9-9e28-37a1c44262fb',
      },
      PROMOTION_URL:
        'https://devfin.ril.com/MASP_Services/API/V1.0/ProductDetail', // @ToDo need to replace
      COMPUTRON: {
        CLIENT_ID: '609115887ded7831b69763a2',
        CLIENT_SECRET: 'rwvMUMQ8I',
        CLIENT_SALT:
          '709856d66fc64251b8aef10b79bbae80f913d7345597529248e9ff3331757761',
        MAIN_URL: 'https://api.jioecomm.com/__jiomart/oms',
      },
      HOGWARTS: {
        CLIENT_ID: '635d3cee565dc682a6477827',
        CLIENT_SECRET: 'HEm8uZdr_',
        CLIENT_SALT:
          '912839fd9a57a83c660d0d904a5c6bd61191503f1adf62c7d8f60b9b3026d073',
      },
      STORMBREAKER: {
        MAIN_URL: 'https://api.jioecomm.com/__jiomart/logistics',
        INTERNAL_URL: 'https://api.jioecomm.com/__jiomart/logistics-internal',
        X_OMS_APPLICATION_ID: '5ea6821b3425bb07c82a25c1',
        X_OMS_APPLICATION_TOKEN: 'qO2p_wQkq',
      },
      MEGATRON: {
        MAIN_URL: 'https://api.jioretailer.com/platform/cart/',
      },
      RPOS: {
        // @ToDo need to replace @vikas
        MAIN_URL:
          'https://finten.ril.com/OnlineOrderingAPI_Fynd/Api/v1.0/Checkout',
        GT_MAIN_URL: 'https://masp.jio.com/OnlineOrderingAPI/Api/Checkout',
        CREDENTIAL: {
          USERNAME: 'O!mU$er',
          PASSWORD: 'P@ssw0rd',
        },
      },
      CLIENT_CERIFICATES: {
        GT_CERT: 'masp_pem_jioretailer.crt',
        GT_KEY: 'masp_pem_jioretailer.pem',
      },
      PRISM: {
        MAIN_URL: 'https://api.jioretailer.com/prism',
      },
      JUSPAY_EMI_BASIC_AUTH: 'NTk4QUM4NUVEOTc0ODZEOTAzMjJCQjM3MTFERjE5Og==',
      TENANT_IDS: ['1004'],
      EMI_CHECKSUM_KEY:
        'ASDHSREIURQASNAMSNASASLKAKSDJSDKSKLDWOIWPIOEWDKLSLOOKMEKLSDJSLKDJSLKDJSLDEWIEOIWEASKALSKALSALSASSDSJDKLSDSLJDKLSDJSLKDJSLKDLESE',
      FDK: {
        CLIENT_ID: config.PARTNERS_API_KEY,
        CLIENT_SECRET: config.PARTNERS_API_SECRET,
        CLUSTER_URL: 'https://api.jioretailer.com',
      },
      GST_Encrypt_Key: '3Rwmhqk1VP',
      OTP_LOGIN_URL: 'https://onboarding.jiomartdigital.com',
      CACHE_DOMAIN: 'jmd-asp.jiostore.online',
    },
    '6316fc9b3fafc461e8639aaf': {
      TEST_CONFIG: 'JIOretailer asp2',
      EMI_CHANNEL_ID: 'JMDASP',
      FILTER: false,
      FE_CHANNEL_ID: 'asp',
      EMI_URL: 'https://rtss-prod.jioconnect.com/MappServer3/pinelab/offers',
      GST_CONFIG: {
        TOKEN_URL: 'https://gw2.jiogst.com/token',
        GST_VALIDATE_URL: 'https://gw2.jiogst.com/PublicSearch/1.0',
        MUTUAL_SSL_KEY: '0c10c485-f81b-47c9-974d-abe26475c3f4',
        SIGNATURE:
          'DHOY7YruJgHk2kRc1a1jKz6awd1vJYc0cErtXj/uTHrBYjVT49qHAylBTSdQNU6eBt4y38GksEMVKNBa5eW/d1yxNgdv6J8AGCPfyh3o1EstVD527V6aPlleq/SUM6nA2Gqk2fOz0CBxfN2Ov2kmTU8rOTpangxLVVkp2ueCb4zX2kieVx3qwh5iNUk9xjoAfrACQl2fR2XJKCkAUxLE2u+YGMc/e6wG/lH8OhB8BmXRorORi7+74p4lp31X8qxi7k6cWR5pXhdv4X4R+LEbb/giSflqbySdzaOEO9SwV4a83nBax6LLMZTEpuiUELpHtXAGVwq+RCs54uz+qNKynQ==',
        AUTH: 'Basic VnNLeGtONWYyRUQ0Z3IzbFJKVTdBQThFYW5jYTpIRFZKSDBkVEpVbllrdlg4ZlJnaTZ3dUdoQ2Nh',
        ASP_CLIENT_ID: 'FYND02LWY938D95TGUN5XM',
        ASP_CLIENT_SECRET: '600af1ae-e20e-44f9-9e28-37a1c44262fb',
      },
      PROMOTION_URL:
        'https://devfin.ril.com/MASP_Services/API/V1.0/ProductDetail', // @ToDo need to replace
      COMPUTRON: {
        CLIENT_ID: '609115887ded7831b69763a2',
        CLIENT_SECRET: 'rwvMUMQ8I',
        CLIENT_SALT:
          '709856d66fc64251b8aef10b79bbae80f913d7345597529248e9ff3331757761',
        MAIN_URL: 'https://api.jioecomm.com/__jiomart/oms',
      },
      HOGWARTS: {
        CLIENT_ID: '635d3cee565dc682a6477827',
        CLIENT_SECRET: 'HEm8uZdr_',
        CLIENT_SALT:
          '912839fd9a57a83c660d0d904a5c6bd61191503f1adf62c7d8f60b9b3026d073',
      },
      STORMBREAKER: {
        MAIN_URL: 'https://api.jioecomm.com/__jiomart/logistics',
        INTERNAL_URL: 'https://api.jioecomm.com/__jiomart/logistics-internal',
        X_OMS_APPLICATION_ID: '5ea6821b3425bb07c82a25c1',
        X_OMS_APPLICATION_TOKEN: 'qO2p_wQkq',
      },
      MEGATRON: {
        MAIN_URL: 'https://api.jioretailer.com/platform/cart/',
      },
      FYND_OMS: {
        MAIN_URL:
          'https://api.jioretailer.com/__jiomart/oms/external/api/v1/asp/order/create/',
        CREDENTIAL: {
          INTEGRATION_ID: '63158ca6efee85199c540a61',
          INTEGRATION_TOKEN: 'LdI_XPdQ_',
          CLIENT_SALT:
            '8dc111288fec857a788a2e0b16902215987b2c809cc13c87d0082fd33dc9df01',
        },
      },
      RPOS: {
        // @ToDo need to replace @vikas
        MAIN_URL:
          'https://finten.ril.com/OnlineOrderingAPI_Fynd/Api/v1.0/Checkout',
        GT_MAIN_URL: 'https://masp.jio.com/OnlineOrderingAPI/Api/Checkout',
        CREDENTIAL: {
          USERNAME: 'O!mU$er',
          PASSWORD: 'P@ssw0rd',
        },
      },
      CUSTOMER_DATA: {
        MAIN_URL: 'https://www.jiomart.com/mst/rest/v1',
      },
      JIO_PAY_URL: {
        MAIN_URL: 'https://api.jioretailer.com/service/application/payment',
      },
      CLIENT_CERIFICATES: {
        GT_CERT: 'masp_pem_jioretailer.crt',
        GT_KEY: 'masp_pem_jioretailer.pem',
      },
      PRISM: {
        MAIN_URL: 'https://api.jioretailer.com/prism',
      },
      JUSPAY_EMI_BASIC_AUTH: 'NTk4QUM4NUVEOTc0ODZEOTAzMjJCQjM3MTFERjE5Og==',
      TENANT_IDS: ['1004'],
      EMI_CHECKSUM_KEY:
        'JMDASKLODJSDSTIDFGVEQSJDHKSJDHSKJDSDKSKDLEWEPMNTSDLKAPOQLWUBQMANQWQQEQEQEDJSDDHSEDHMXCEWYJDQHDKNGKQ',
      FDK: {
        CLIENT_ID: config.PARTNERS_API_KEY,
        CLIENT_SECRET: config.PARTNERS_API_SECRET,
        CLUSTER_URL: 'https://api.jioretailer.com',
      },
      GST_Encrypt_Key: '3Rwmhqk1VP',
      FIELD_FORCE_CREDENTIALS: {
        USERNAME: 'FIELD_FORCE',
        PASSWORD: 'ASP@890fieldForce',
        SECRET: 'ThisISASecret',
      },
      OTP_LOGIN_URL: 'https://onboarding.jiomartdigital.com',
      CACHE_DOMAIN: 'jmd-asp2.jiostore.online',
    },
    '631f044a738bea0723fa1e42': {
      TEST_CONFIG: 'JIOretailer b2b', //from jiox5 asp2
      EMI_CHANNEL_ID: 'JMDASP',
      FE_CHANNEL_ID: 'b2b',
      FILTER: true,
      EMI_URL: 'https://rtss-prod.jioconnect.com/MappServer3/pinelab/offers',
      GST_CONFIG: {
        TOKEN_URL: 'https://gw2.jiogst.com/token',
        GST_VALIDATE_URL: 'https://gw2.jiogst.com/PublicSearch/1.0',
        MUTUAL_SSL_KEY: '0c10c485-f81b-47c9-974d-abe26475c3f4',
        SIGNATURE:
          'DHOY7YruJgHk2kRc1a1jKz6awd1vJYc0cErtXj/uTHrBYjVT49qHAylBTSdQNU6eBt4y38GksEMVKNBa5eW/d1yxNgdv6J8AGCPfyh3o1EstVD527V6aPlleq/SUM6nA2Gqk2fOz0CBxfN2Ov2kmTU8rOTpangxLVVkp2ueCb4zX2kieVx3qwh5iNUk9xjoAfrACQl2fR2XJKCkAUxLE2u+YGMc/e6wG/lH8OhB8BmXRorORi7+74p4lp31X8qxi7k6cWR5pXhdv4X4R+LEbb/giSflqbySdzaOEO9SwV4a83nBax6LLMZTEpuiUELpHtXAGVwq+RCs54uz+qNKynQ==',
        AUTH: 'Basic VnNLeGtONWYyRUQ0Z3IzbFJKVTdBQThFYW5jYTpIRFZKSDBkVEpVbllrdlg4ZlJnaTZ3dUdoQ2Nh',
        ASP_CLIENT_ID: 'FYND02LWY938D95TGUN5XM',
        ASP_CLIENT_SECRET: '600af1ae-e20e-44f9-9e28-37a1c44262fb',
      },
      PROMOTION_URL:
        'https://devfin.ril.com/MASP_Services/API/V1.0/ProductDetail',
      COMPUTRON: {
        CLIENT_ID: '609115887ded7831b69763a2',
        CLIENT_SECRET: 'rwvMUMQ8I',
        CLIENT_SALT:
          '709856d66fc64251b8aef10b79bbae80f913d7345597529248e9ff3331757761',
        MAIN_URL: 'https://api.jioecomm.com/__jiomart/oms',
      },
      HOGWARTS: {
        CLIENT_ID: '635d3cee565dc682a6477827',
        CLIENT_SECRET: 'HEm8uZdr_',
        CLIENT_SALT:
          '912839fd9a57a83c660d0d904a5c6bd61191503f1adf62c7d8f60b9b3026d073',
      },
      STORMBREAKER: {
        MAIN_URL: 'https://api.jioecomm.com/__jiomart/logistics',
        INTERNAL_URL: 'https://api.jioecomm.com/__jiomart/logistics-internal',
        X_OMS_APPLICATION_ID: '5ea6821b3425bb07c82a25c1',
        X_OMS_APPLICATION_TOKEN: 'qO2p_wQkq',
      },
      MEGATRON: {
        MAIN_URL: 'https://api.jioretailer.com/platform/cart/',
      },
      FYND_OMS: {
        MAIN_URL:
          'https://api.jioretailer.com/__jiomart/oms/external/api/v1/asp/order/create/',
        CREDENTIAL: {
          INTEGRATION_ID: '63158ca6efee85199c540a61',
          INTEGRATION_TOKEN: 'LdI_XPdQ_',
          CLIENT_SALT:
            '8dc111288fec857a788a2e0b16902215987b2c809cc13c87d0082fd33dc9df01', // not present in jiox5 b2b
        },
      },
      RPOS: {
        MAIN_URL:
          'https://finten.ril.com/OnlineOrderingAPI_Fynd/Api/v1.0/Checkout',
        GT_MAIN_URL: 'https://masp.jio.com/OnlineOrderingAPI/Api/Checkout',
        CREDENTIAL: {
          USERNAME: 'O!mU$er',
          PASSWORD: 'P@ssw0rd',
        },
      },
      CUSTOMER_DATA: {
        MAIN_URL: 'https://www.jiomart.com/mst/rest/v1',
      },
      JIO_PAY_URL: {
        MAIN_URL: 'https://api.jioretailer.com/service/application/payment',
      },
      CLIENT_CERIFICATES: {
        GT_CERT: 'masp_pem_jioretailer.crt',
        GT_KEY: 'masp_pem_jioretailer.pem',
      },
      PRISM: {
        MAIN_URL: 'https://api.jioretailer.com/prism',
      },
      JUSPAY_EMI_BASIC_AUTH: 'NTk4QUM4NUVEOTc0ODZEOTAzMjJCQjM3MTFERjE5Og==',
      TENANT_IDS: ['1004'],
      EMI_CHECKSUM_KEY:
        'JMDASKLODJSDSTIDFGVEQSJDHKSJDHSKJDSDKSKDLEWEPMNTSDLKAPOQLWUBQMANQWQQEQEQEDJSDDHSEDHMXCEWYJDQHDKNGKQ',
      FDK: {
        CLIENT_ID: config.PARTNERS_API_KEY,
        CLIENT_SECRET: config.PARTNERS_API_SECRET,
        CLUSTER_URL: 'https://api.jioretailer.com',
      },
      GST_Encrypt_Key: '3Rwmhqk1VP',
      FIELD_FORCE_CREDENTIALS: {
        USERNAME: 'FIELD_FORCE',
        PASSWORD: 'ASP@890fieldForce',
        SECRET: 'ThisISASecret',
      },
      INVOICE_ENIGMA: {
        CLIENT_ID: '63158ca6efee85199c540a61',
        CLIENT_SECRET: 'LdI_XPdQ_',
        CLIENT_SALT:
          '8dc111288fec857a788a2e0b16902215987b2c809cc13c87d0082fd33dc9df01',
        MAIN_URL: 'https://api.jioretailer.com/__jiomart/oms',
      },
      OTP_LOGIN_URL: 'https://onboarding.jiomartdigital.com',
      CACHE_DOMAIN: 'jiomart-b2b.jiostore.online',
    },
  },
};

export default { JIO_CONFIG: jioConfig[ENV] };

import TestResultsAPI from './TestResultsAPI';

const APIHeaders = {
    'Content-Type': 'application/json',
};

describe('TestResultsAPI', () => {
  beforeEach(() => {
    // Clear all mocks before each test
    jest.resetAllMocks();
  });

  it('fetches data for runAllTestsForTestConfig', async () => {
    const mockData = { testData: 'mocked data' };
    global.fetch = jest.fn().mockResolvedValue({
      json: jest.fn().mockResolvedValue(mockData),
    });

    const result = await TestResultsAPI.runAllTestsForTestConfig('testConfigId');

    expect(fetch).toHaveBeenCalledWith(expect.any(String), {
      method: 'GET',
      headers: APIHeaders,
    });
    expect(result).toEqual(mockData);
  });

  it('fetches data for runTestByIdForTestConfig', async () => {
    const mockData = { testData: 'mocked data' };
    global.fetch = jest.fn().mockResolvedValue({
      json: jest.fn().mockResolvedValue(mockData),
    });

    const result = await TestResultsAPI.runTestByIdForTestConfig('testConfigId', 'payload_id');

    expect(fetch).toHaveBeenCalledWith(expect.any(String), {
      method: 'GET',
      headers: APIHeaders,
    });
    expect(result).toEqual(mockData);
  });

  it('fetches data for getAllTestResultsByTestConfigId', async () => {
    const mockData = { testData: 'mocked data' };
    global.fetch = jest.fn().mockResolvedValue({
      json: jest.fn().mockResolvedValue(mockData),
    });

    const result = await TestResultsAPI.getAllTestResultsByTestConfigId('testConfigId');

    expect(fetch).toHaveBeenCalledWith(expect.any(String), {
      method: 'GET',
      headers: APIHeaders,
    });
    expect(result).toEqual(mockData);
  });

  it('fetches data for getTestResultByTestConfigId', async () => {
    const mockData = { testData: 'mocked data' };
    global.fetch = jest.fn().mockResolvedValue({
      json: jest.fn().mockResolvedValue(mockData),
    });

    const result = await TestResultsAPI.getTestResultByTestConfigId('testConfigId', 'payload_id');

    expect(fetch).toHaveBeenCalledWith(expect.any(String), {
      method: 'GET',
      headers: APIHeaders,
    });
    expect(result).toEqual(mockData);
  });
});

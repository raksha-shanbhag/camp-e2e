import TestConfigurationsAPI from './TestConfigurationsAPI';

const APIHeaders = {
    'Content-Type': 'application/json',
};

describe('TestConfigurationsAPI', () => {
  beforeEach(() => {
    // Clear all mocks before each test
    jest.resetAllMocks();
  });

  it('fetches data for getAllTestConfigurations', async () => {
    const mockData = { testConfigurations: [] };
    global.fetch = jest.fn().mockResolvedValue({
      json: jest.fn().mockResolvedValue(mockData),
    });

    const result = await TestConfigurationsAPI.getAllTestConfigurations();

    expect(fetch).toHaveBeenCalledWith(expect.any(String), {
      method: 'GET',
      headers: APIHeaders,
    });
    expect(result).toEqual(mockData);
  });

  it('creates test configuration', async () => {
    const mockData = { success: true };
    global.fetch = jest.fn().mockResolvedValue({
      json: jest.fn().mockResolvedValue(mockData),
    });

    const result = await TestConfigurationsAPI.createTestConfiguration(
      'TestName',
      'Description',
      'ProductIdMapping',
      'BrandIdMapping',
      'CreditPolicyId',
      'MensaFileName',
      'CSVData'
    );

    expect(fetch).toHaveBeenCalledWith(expect.any(String), {
      method: 'POST',
      headers: APIHeaders,
      body: JSON.stringify({
        testName: 'TestName',
        description: 'Description',
        productIdMapping: 'ProductIdMapping',
        brandIdMapping: 'BrandIdMapping',
        creditPolicyId: 'CreditPolicyId',
        mensaFileName: 'MensaFileName',
        csvData: 'CSVData',
      }),
    });
    expect(result).toEqual(mockData);
  });

  it('edits test configuration', async () => {
    const mockData = { success: true };
    global.fetch = jest.fn().mockResolvedValue({
      json: jest.fn().mockResolvedValue(mockData),
    });

    const result = await TestConfigurationsAPI.editTestConfiguration(
      'TestConfigId',
      'TestName',
      'Description',
      'ProductIdMapping',
      'BrandIdMapping',
      'CreditPolicyId',
      'MensaFileName',
      'CSVData'
    );

    expect(fetch).toHaveBeenCalledWith(expect.any(String), {
      method: 'PUT',
      headers: APIHeaders,
      body: JSON.stringify({
        testName: 'TestName',
        description: 'Description',
        productIdMapping: 'ProductIdMapping',
        brandIdMapping: 'BrandIdMapping',
        creditPolicyId: 'CreditPolicyId',
        mensaFileName: 'MensaFileName',
        csvData: 'CSVData',
      }),
    });
    expect(result).toEqual(mockData);
  });

  it('archives test configuration', async () => {
    const mockData = { success: true };
    global.fetch = jest.fn().mockResolvedValue({
      json: jest.fn().mockResolvedValue(mockData),
    });

    const result = await TestConfigurationsAPI.archiveTestConfiguration('TestConfigId');

    expect(fetch).toHaveBeenCalledWith(expect.any(String), {
      method: 'PUT',
      headers: APIHeaders,
    });
    expect(result).toEqual(mockData);
  });

  it('deletes test configuration', async () => {
    const mockData = { success: true };
    global.fetch = jest.fn().mockResolvedValue({
      json: jest.fn().mockResolvedValue(mockData),
    });

    const result = await TestConfigurationsAPI.deleteTestConfiguration('TestConfigId');

    expect(fetch).toHaveBeenCalledWith(expect.any(String), {
      method: 'DELETE',
      headers: APIHeaders,
    });
    expect(result).toEqual(mockData);
  });
});

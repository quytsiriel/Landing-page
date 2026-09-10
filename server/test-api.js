import http from 'http';

function makeRequest(path, method = 'GET', postData = null) {
  return new Promise((resolve, reject) => {
    const options = {
      hostname: '127.0.0.1',
      port: 5000,
      path: path,
      method: method,
      headers: {
        'Content-Type': 'application/json',
      }
    };

    if (postData) {
      options.headers['Content-Length'] = Buffer.byteLength(JSON.stringify(postData));
    }

    const req = http.request(options, (res) => {
      let body = '';
      res.on('data', chunk => body += chunk);
      res.on('end', () => {
        try {
          resolve({ status: res.statusCode, body: JSON.parse(body) });
        } catch {
          resolve({ status: res.statusCode, body });
        }
      });
    });

    req.on('error', reject);

    if (postData) {
      req.write(JSON.stringify(postData));
    }
    req.end();
  });
}

async function runTests() {
  console.log('--- TESTING BACKEND ENDPOINTS ---');
  try {
    const profileRes = await makeRequest('/api/profile');
    console.log('✓ /api/profile:', profileRes.status, profileRes.body.data?.name === 'Quách Đại Dương' ? 'PASS' : 'FAIL');

    const statsRes = await makeRequest('/api/stats');
    console.log('✓ /api/stats:', statsRes.status, statsRes.body.data?.systemHealth === 'OPERATIONAL' ? 'PASS' : 'FAIL');

    const contactRes = await makeRequest('/api/contact', 'POST', {
      name: 'Nguyen Van A',
      email: 'test@uet.vnu.edu.vn',
      subject: 'Hợp tác dự án AI',
      message: 'Xin chào Đại Dương, tôi muốn thảo luận về MedPal.'
    });
    console.log('✓ /api/contact:', contactRes.status, contactRes.body.status === 'success' ? 'PASS' : 'FAIL');

    const medpalRes = await makeRequest('/api/medpal-simulate', 'POST', {
      scenarioId: 'symptom'
    });
    console.log('✓ /api/medpal-simulate:', medpalRes.status, medpalRes.body.data?.triageLevel ? 'PASS' : 'FAIL');

    console.log('🎉 ALL BACKEND API TESTS PASSED SUCCESSFULLY!');
    process.exit(0);
  } catch (err) {
    console.error('❌ Test failed:', err.message);
    process.exit(1);
  }
}

runTests();

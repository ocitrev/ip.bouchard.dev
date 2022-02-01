function get_client_ip(request) {
    const forwarded_for = request.headers['x-forwarded-for']

    if (forwarded_for) {
        return forwarded_for.split(',')[0].trim();
    }

    return request.headers['client-ip'];
}

exports.handler = async function(event, context) {
    return {
        statusCode: 200,
        body: get_client_ip(event)
    };
}

export default function Email(data) {
    return (
        <>
            <table bgcolor="#fafafa" style={{ width: '100%!important', height: '100%', backgroundColor: '#fafafa', padding: '20px', fontFamily: '"Helvetica Neue", "Helvetica", Helvetica, Arial, "Lucida Grande", sans-serif', fontSize: '100%', lineHeight: '1.6' }}>
                <tbody><tr>
                    <td />
                    <td bgcolor="#FFFFFF" style={{ border: '1px solid #eeeeee', backgroundColor: '#ffffff', borderRadius: '5px', display: 'block!important', maxWidth: '600px!important', margin: '0 auto!important', clear: 'both!important' }}><div style={{ padding: '20px', maxWidth: '600px', margin: '0 auto', display: 'block' }}>
                        <table style={{ width: '100%' }}>
                            <tbody><tr>
                                <td>
                                    <h1 style={{ fontWeight: 200, fontSize: '36px', margin: '20px 0 30px 0', color: '#333333' }}>Details...</h1>
                                    <h2 style={{ fontWeight: 200, fontSize: '16px', margin: '20px 0', color: '#333333' }}> Name: {data.name}</h2>
                                    <h2 style={{ fontWeight: 200, fontSize: '16px', margin: '20px 0', color: '#333333' }}> Email: {data.email}</h2>
                                    <h2 style={{ fontWeight: 200, fontSize: '16px', margin: '20px 0', color: '#333333' }}> Message: {data.message}</h2>
                                    <p style={{ textAlign: 'center', display: 'block', paddingTop: '20px', fontWeight: 'bold', marginTop: '30px', color: '#666666', borderTop: '1px solid #dddddd' }}>Bunk pe</p></td>
                            </tr>
                            </tbody></table>
                    </div></td>
                    <td />
                </tr>
                </tbody>
            </table>
        </>
    )
}
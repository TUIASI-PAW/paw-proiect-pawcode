package com.ro.travel.RoTravel.payload.response;

public class JwtResponse {
    private String token;
    private String type = "Bearer";
    private String email;
    private String role;
    private long id;

    public JwtResponse(String accessToken, long id,String email, String role) {
        this.token = accessToken;
        this.email = email;
        this.role = role;
        this.id = id;
    }

    public String getAccessToken() {
        return token;
    }

    public void setAccessToken(String accessToken) {
        this.token = accessToken;
    }

    public String getTokenType() {
        return type;
    }

    public void setTokenType(String tokenType) {
        this.type = tokenType;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }
    public String getRole() {
        return role;
    }

    public void setRole(String role) {
        this.role = role;
    }

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }
}
